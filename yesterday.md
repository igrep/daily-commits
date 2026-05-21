# 2026/05/18 - 2026/05/24

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/05/18: エラーメッセージの修正引き続き。残りテストの失敗は65件。パーサーの問題の他、`context.ts`にエンバグしてしまったらしい
        - 2026/05/19: テストの間違いとバグを修正。残りテストの失敗は63件。
        - 2026/05/20: エラーメッセージの修正とパーサーのバグを一部修正。残りテストの失敗は44件。
        - 2026/05/21: context.test.ts における失敗は、テストで使っている関数を間違えて変えたからだった。残りテストの失敗は39件。多分これらもテスト側を修正すれば解決するはず
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/05/21

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/4fd1e3ee1077d3dc19b81c6740a4a094a9653cd7/yesterday.md)
