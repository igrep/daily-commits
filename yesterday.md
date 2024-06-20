# 2024/06/17 - 2024/06/23

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/06/17: 先週最後に加えた型定義の変更はどうやら間違っていたらしい。型を元に戻さないと
            - 2024/06/18: ようやく一つテストを通せた。残りはアレか、Object Literalのキーの型を適切に制限しないといけない件か
            - 2024/06/19: 違うわ。そもそも`traverseLiteralObject`はObject Literalではなく`keyValues`を返すべきなんだ
            - 2024/06/20: ようやく`meta.quasiQuote`のテストを通せた
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/06/20

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/3b6f7c169c4ba0114e6b842bed5e1337b2455916/yesterday.md)
