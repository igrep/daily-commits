# 2024/03/24 - 2024/03/31

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/03/25: readerのテストを全て直せた
            - 2024/03/26: ちょっとだけ。新しいテストの失敗を見るに、まだパーサーのバグがあるらしい。なんでかなぁ
            - 2024/03/27: パーサーのバグというより、仕様の策定が不十分なせいだった。`LiteralObject`における、カンマの解釈。カンマはなしにしよう。後、その場合のエラーメッセージも適切ではないので、テストケース追加。
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 2 Programming Language Foundations](https://softwarefoundations.cis.upenn.edu/plf-current/index.html)
        - 2024/02/02 - 2024/03/27

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/11590adf059c97376e5a1f427cbbcaa44d364259/yesterday.md)
