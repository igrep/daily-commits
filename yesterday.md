# 2026/02/09 - 2026/02/15

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/02/09: 先週残したバグはよーく見たらテストコード側のバグだった。`quasiQuote`の中での`Promise`の扱いが難しいのう。後はエラーメッセージの修正だけだ
        - 2026/02/10: エラーメッセージの修正とコミット。次は複数の文を返すmacroを扱えるようにする上での最難関、macroの結果のspliceだ。第1歩として`note`と`annotate`にテストケースを追加。ユースケースとしては`macro`にも必要だろう
            - 例外的なケースを考えると、もっとたくさんテストが欲しい
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/02/10

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/e8b94c0e57c7eeb639ca4095eccebcf83a47f322/yesterday.md)
