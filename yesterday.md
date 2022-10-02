# 2022/09/26 - 2022/10/02

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [x] `for`
                - [x] `incrementF` / `decrementF`
                    - 2022/09/26: 実装結構進めた
                    - 2022/09/27: `const`な変数の扱いがあるからちょっと大変
                    - 2022/09/28: 実装できた。ついでに`assign`のバグも直した
            - [ ] `forEach`
                - 2022/09/30: テストケース追加
                - 2022/10/01: 一部実装
            - [ ] `recursive`
            - [x] `break` / `continue`
                - 2022/09/29: とりあえず最小の実装を作り、テストを通した。行儀のいい作りにするなら`for` / `while` 以外で使えないよう修正すべきだけど、後回しにするか...
                    - <https://github.com/igrep/custard/commit/9284fcd872e81582b564b38c698fa7c4df56fcad>
            - [ ] 末尾再帰の最適化
                - よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] cabalファイルのパース
        - 2022/09/27: もくもくとreplからのコピペを
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/09/26 - 2022/10/01

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5e02ac88ced6ec47a4771802131f06cd65a4eba8/yesterday.md)
