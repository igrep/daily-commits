# 2026/03/30 - 2026/04/04

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/03/30: splice機能のテストを通すために修正
        - 2026/03/31: 現状分かるテストの失敗を見る限り、恐らくライブラリーにおいてstatementを期待しているのに`transpileExpression`を使っていた箇所をひたすら`transpileStatement`に変えればだいたい直りそう。後はエラーメッセージの修正
        - 2026/04/01: リファクタリングとエラーメッセージの修正。
        - 2026/04/02: `transpileExpression`を使っていた箇所をひたすら`transpileStatement`に変える修正引き続き。残りエラーは34件。
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/04/02

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/6d329ea257c74e667f5989c55ddce2932bd7fd98/yesterday.md)
