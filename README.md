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

1. Перейти в папку frontend:
