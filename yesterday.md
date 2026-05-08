# 2026/05/04 - 2026/05/10

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/05/04: 新しい`PropertyAccess`への対応引き続き
        - 2026/05/05: AIの助けもあり新しい`PropertyAccess`への対応が概ね出来たつもりが、まだテストはたくさん落ちる。よく見たらパーサーにもまだ問題があるらしい
        - 2026/05/06: 新しい`PropertyAccess`への対応引き続き。`PropertyAccess`の左辺に任意の式を置けるようにしてしまったことで、色々話がややこしくなってしまった。
            - `WriterWithIsAtTopLevel`の定義を考え直した方が良さそう。最早`WriterWithIsAtTopLevel`では足りない。`PropertyAccess`用に`referTo`を別に作った方が良さそう
        - 2026/05/07: 昨日思いついた新しい`ContextF.find`の実装に着手
        - 2026/05/08: 新しい`ContextF.find`の実装引き続き
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/05/08

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/9da4409b5c810c99bb9bdec9c3f1407541c62574/yesterday.md)
