import { describe, it, expect, beforeEach } from "vitest";
import { Clarinet, Tx, Chain, Account, types } from "@hirosystems/clarinet-sdk";

describe("Voting Contract", () => {
  let chain: Chain;
  let accounts: Map<string, Account>;
  let wallet1: Account;
  let wallet2: Account;
  let wallet3: Account;

  beforeEach(() => {
    chain = new Chain();
    accounts = chain.accounts;
    wallet1 = accounts.get("wallet_1")!;
    wallet2 = accounts.get("wallet_2")!;
    wallet3 = accounts.get("wallet_3")!;
  });

  it("initial results should be zero", () => {
    const block = chain.mineBlock([
      Tx.contractCall("voting", "get-results", [], wallet1.address),
    ]);

    block.receipts[0].result.expectOk().expectTuple({
      "candidate-a": types.uint(0),
      "candidate-b": types.uint(0),
      "total-voters": types.uint(0),
    });
  });

  it("allows a user to vote for candidate A", () => {
    const block = chain.mineBlock([
      Tx.contractCall("voting", "vote-for-a", [], wallet1.address),
    ]);

    block.receipts[0].result.expectOk().expectAscii("Vote recorded for A");
  });

  it("allows a user to vote for candidate B", () => {
    const block = chain.mineBlock([
      Tx.contractCall("voting", "vote-for-b", [], wallet2.address),
    ]);

    block.receipts[0].result.expectOk().expectAscii("Vote recorded for B");
  });

  it("increments candidate A vote count correctly", () => {
    chain.mineBlock([
      Tx.contractCall("voting", "vote-for-a", [], wallet1.address),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall("voting", "get-results", [], wallet1.address),
    ]);

    block.receipts[0].result.expectOk().expectTuple({
      "candidate-a": types.uint(1),
      "candidate-b": types.uint(0),
      "total-voters": types.uint(1),
    });
  });

  it("increments candidate B vote count correctly", () => {
    chain.mineBlock([
      Tx.contractCall("voting", "vote-for-b", [], wallet2.address),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall("voting", "get-results", [], wallet2.address),
    ]);

    block.receipts[0].result.expectOk().expectTuple({
      "candidate-a": types.uint(0),
      "candidate-b": types.uint(1),
      "total-voters": types.uint(1),
    });
  });

  it("prevents double voting", () => {
    chain.mineBlock([
      Tx.contractCall("voting", "vote-for-a", [], wallet1.address),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall("voting", "vote-for-b", [], wallet1.address),
    ]);

    block.receipts[0].result.expectErr().expectUint(100);
  });

  it("tracks multiple voters correctly", () => {
    chain.mineBlock([
      Tx.contractCall("voting", "vote-for-a", [], wallet1.address),
      Tx.contractCall("voting", "vote-for-b", [], wallet2.address),
      Tx.contractCall("voting", "vote-for-a", [], wallet3.address),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall("voting", "get-results", [], wallet1.address),
    ]);

    block.receipts[0].result.expectOk().expectTuple({
      "candidate-a": types.uint(2),
      "candidate-b": types.uint(1),
      "total-voters": types.uint(3),
    });
  });

  it("has-voted returns true after voting", () => {
    chain.mineBlock([
      Tx.contractCall("voting", "vote-for-a", [], wallet1.address),
    ]);

    const block = chain.mineBlock([
      Tx.contractCall(
        "voting",
        "has-voted",
        [types.principal(wallet1.address)],
        wallet1.address
      ),
    ]);

    block.receipts[0].result.expectBool(true);
  });

  it("has-voted returns false for non-voters", () => {
    const block = chain.mineBlock([
      Tx.contractCall(
        "voting",
        "has-voted",
        [types.principal(wallet2.address)],
        wallet1.address
      ),
    ]);

    block.receipts[0].result.expectBool(false);
  });
});
