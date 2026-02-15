# Stacks Voting DApp

Простой on-chain Voting DApp на Stacks.

## Структура репозитория


## Контракт

- `voting.clar` — контракт с голосованием A/B
- Каждый адрес может проголосовать только один раз
- Доступные функции:
  - `vote-for-a`
  - `vote-for-b`
  - `get-results`
  - `has-voted`

## Frontend

- Используется `@stacks/connect` для подключения кошелька
- Используется `@stacks/transactions` для вызова функций контракта
- Простейший UI с кнопками Connect / Vote A / Vote B

## Running Locally

1. Перейти в папку fron
2026-02-14 21:12:39 - adjusted logic
2026-02-14 21:12:53 - adjusted logic
2026-02-14 21:57:16 - added test case
2026-02-14 21:58:02 - adjusted logic
2026-02-15 00:25:52 - updated UI
2026-02-15 00:26:30 - added test case
2026-02-15 07:46:11 - added test case
2026-02-15 07:46:19 - added test case
2026-02-15 07:46:47 - updated UI
2026-02-15 07:46:55 - adjusted logic
