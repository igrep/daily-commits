# 2024/03/18 - 2024/03/24

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/03/18: `Symbol`を`Located`にしたことで、場所が関係なところで場所の情報が必要になり、ちょっと使いづらい。整理し直した方がいいのかもしれない。最初に`Lost`って型関数を作って`Located`じゃなくすって方法を思いついたけど、アドホックな感じは否めない
                - だから`Located`をパーサー（とマクロ）用の特別な型にするべきなんじゃろうな
            - 2024/03/19: `Located`はTrees That Growよろしく型パラメーターにしないと再帰的な型に適用できない！
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 2 Programming Language Foundations](https://softwarefoundations.cis.upenn.edu/plf-current/index.html)
        - 2024/02/02 - 2024/03/19

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/52f997a5f242a3a0b28f14a9a61f6955c116575a/yesterday.md)
