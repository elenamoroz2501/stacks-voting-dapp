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
2026-02-15 08:40:27 - adjusted logic
2026-02-15 08:40:36 - adjusted logic
2026-02-15 08:41:07 - updated UI
2026-02-15 08:41:34 - updated UI
2026-02-15 14:10:24 - adjusted logic
2026-02-15 15:20:15 - updated UI
2026-02-15 15:20:20 - updated UI
2026-02-15 15:20:49 - adjusted logic
2026-02-15 15:20:54 - added test case
2026-02-15 15:21:20 - updated UI
2026-02-15 15:21:47 - adjusted logic
2026-02-15 16:20:11 - added test case
2026-02-15 16:20:32 - added test case
2026-02-15 16:20:46 - added test case
2026-02-15 16:21:03 - updated UI
2026-02-15 16:21:53 - added test case
2026-02-15 16:22:05 - adjusted logic
2026-02-15 17:17:44 - updated UI
2026-02-15 17:18:03 - adjusted logic
2026-02-15 18:15:42 - adjusted logic
2026-02-15 18:16:16 - updated UI
2026-02-15 18:16:35 - added test case
2026-02-15 18:16:51 - added test case
2026-02-15 18:16:58 - updated UI
2026-02-15 18:17:09 - updated UI
2026-02-15 18:17:18 - added test case
2026-02-15 21:24:40 - adjusted logic
2026-02-15 21:24:48 - updated UI
2026-02-15 21:25:29 - added test case
2026-02-15 21:26:00 - updated UI
2026-02-15 21:26:12 - updated UI
2026-02-15 21:26:22 - adjusted logic
2026-02-15 21:26:37 - updated UI
2026-02-15 21:26:45 - added test case
2026-02-15 21:27:01 - added test case
2026-02-15 21:28:07 - updated UI
2026-02-15 21:28:31 - added test case
2026-02-15 21:29:16 - adjusted logic
2026-02-15 21:29:33 - adjusted logic
2026-02-15 21:29:44 - updated UI
2026-02-15 21:31:08 - updated UI
2026-02-15 21:31:31 - updated UI
2026-02-15 21:31:58 - updated UI
2026-02-16 11:03:58 - adjusted logic
2026-02-16 11:05:05 - added test case
2026-02-16 11:05:54 - updated UI
2026-02-16 11:06:01 - updated UI
2026-02-16 11:07:36 - adjusted logic
2026-02-16 11:07:46 - adjusted logic
2026-02-16 11:08:29 - updated UI
2026-02-16 11:08:44 - updated UI
2026-02-16 11:10:29 - updated UI
2026-02-16 15:13:59 - adjusted logic
2026-02-16 15:15:16 - added test case
2026-02-16 15:15:27 - updated UI
2026-02-16 15:15:39 - updated UI
2026-02-16 15:16:25 - updated UI
2026-02-16 15:16:39 - adjusted logic
2026-02-16 15:17:04 - updated UI
2026-02-16 21:24:30 - updated UI
2026-02-16 21:24:37 - added test case
2026-02-16 21:24:44 - added test case
2026-02-16 21:26:02 - added test case
2026-02-16 21:27:09 - updated UI
2026-02-16 21:28:14 - added test case
2026-02-16 21:28:56 - adjusted logic
2026-02-17 12:14:49 - adjusted logic
2026-02-17 12:15:42 - updated UI
2026-02-17 12:16:07 - added test case
2026-02-17 12:16:18 - adjusted logic
2026-02-17 12:16:26 - added test case
2026-02-17 12:16:57 - added test case
2026-02-17 12:17:17 - adjusted logic
2026-02-17 12:17:54 - updated UI
2026-02-17 12:18:05 - added test case
2026-02-17 12:18:12 - adjusted logic
2026-02-17 12:18:40 - adjusted logic
2026-02-17 12:18:51 - added test case
2026-02-17 12:19:11 - adjusted logic
2026-02-17 12:19:30 - adjusted logic
2026-02-17 12:20:07 - adjusted logic
2026-02-17 12:20:14 - added test case
2026-02-17 12:20:25 - added test case
2026-02-17 12:21:27 - adjusted logic
2026-02-17 12:21:42 - adjusted logic
2026-02-17 12:21:51 - adjusted logic
2026-02-17 12:22:09 - adjusted logic
2026-02-17 12:22:19 - adjusted logic
2026-02-17 12:22:58 - updated UI
2026-02-17 12:23:07 - adjusted logic
2026-02-17 12:23:30 - added test case
2026-02-17 12:24:58 - adjusted logic
2026-02-17 12:25:20 - adjusted logic
2026-02-17 12:25:58 - updated UI
2026-02-17 12:26:08 - adjusted logic
2026-02-17 12:26:17 - updated UI
2026-02-17 12:26:24 - updated UI
2026-02-17 12:26:33 - added test case
2026-02-17 12:27:02 - added test case
2026-02-17 12:27:18 - updated UI
2026-02-17 12:28:00 - adjusted logic
2026-02-18 14:55:53 - updated UI
2026-02-18 14:56:09 - updated UI
2026-02-18 14:56:18 - adjusted logic
2026-02-18 14:59:20 - updated UI
2026-02-18 14:59:31 - adjusted logic
2026-02-18 14:59:40 - adjusted logic
2026-02-18 15:00:14 - added test case
2026-02-18 15:00:22 - added test case
2026-02-18 15:01:35 - added test case
2026-02-18 15:01:46 - adjusted logic
2026-02-18 15:02:13 - updated UI
2026-02-18 15:02:31 - adjusted logic
2026-02-18 15:02:40 - updated UI
2026-02-18 15:02:51 - updated UI
2026-02-18 15:03:10 - updated UI
2026-02-18 15:04:19 - adjusted logic
2026-02-18 15:05:16 - added test case
2026-02-18 15:05:36 - adjusted logic
2026-02-18 15:05:45 - updated UI
2026-02-18 15:06:30 - updated UI
2026-02-18 15:07:08 - updated UI
2026-02-18 15:07:26 - adjusted logic
2026-02-18 15:07:37 - added test case
2026-02-18 15:08:17 - updated UI
2026-02-18 15:08:26 - added test case
2026-02-18 15:08:37 - updated UI
2026-02-18 15:09:06 - added test case
2026-02-18 15:09:16 - added test case
2026-02-18 15:09:25 - added test case
2026-02-18 15:10:02 - added test case
2026-02-18 15:10:11 - adjusted logic
2026-02-18 15:10:22 - added test case
2026-02-18 15:11:20 - updated UI
2026-02-18 15:11:42 - adjusted logic
2026-02-19 09:49:53 - added test case
2026-02-19 09:50:15 - added test case
2026-02-19 09:50:41 - updated UI
2026-02-19 09:50:52 - adjusted logic
2026-02-19 09:52:26 - adjusted logic
2026-02-19 09:52:53 - updated UI
2026-02-19 09:53:01 - updated UI
2026-02-19 15:44:00 - added test case
2026-02-19 15:44:35 - adjusted logic
2026-02-19 15:44:55 - updated UI
2026-02-19 15:45:32 - adjusted logic
2026-02-19 15:46:37 - adjusted logic
2026-02-19 22:18:09 - adjusted logic
2026-02-19 22:18:29 - updated UI
