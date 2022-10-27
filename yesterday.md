# 2022/10/24 - 2022/10/30

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] `recursive`
                - [ ] eslint-plugin-no-ignore-return
                    - 2022/10/24: 式の型を取得してみてる
                    - 2022/10/25: 式の型の扱い方が少しずつ分かってきた。`eslint-plugin-no-ignore-return`じゃなくて、`eslint-plugin-no-ignore-returned-union`に名前を変えて、もっと単純な仕様にしよう。custardで使う分にはそれで十分だし
                        - そうなると紹介記事を書こうか迷うわね
                    - 2022/10/26: 多分できたのでリポジトリーに公開。明日早速custardで使ってみよう
                        - <https://github.com/igrep/eslint-plugin-no-ignore-returned-union>
                    - 2022/10/27: ruleのexportの仕方が間違っているらしい
                        - <https://twitter.com/igrep/status/1585439830166867968>
            - [ ] 末尾再帰の最適化
                - [ ] よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/0a228eb61dc7e098ad08f4dd2be7a8f70734c56a>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/10/24 - 2022/10/27

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/08f8eac2f35ef51a500701b30624fd4dbe234e66/yesterday.md)
