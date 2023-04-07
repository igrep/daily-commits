# 2023/04/02 - 2023/04/09

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [x] refactor: `Writer`をinternalに移す
                - 2023/04/03: 昨日までのコードをコミットしてなかったのでlintのエラーを直しつつlinterの警告を直す
                - 2023/04/04: `async`の実装したとき既に達成していたようだ
            - [ ] viteの設定: <https://twitter.com/igrep/status/1623300862419546113>
                - 2023/04/04: rollupの設定を変えてみたけど果たして効果あるか？
                - 2023/04/05: 効果ないっぽいなぁ。よく見たらworkerだけの依存関係だけじゃなくて、（テストによって動的に`import`されるので）custardのライブラリーが依存関係に含まれないのも問題なので、想像以上に難しそうね
                    - <https://twitter.com/igrep/status/1643467369531203584> にも書いてから思ったけど、ちゃんとやるには多分custardのローダーを作ってcustardのライブラリーをロードしたら自動でtranspileしたものを返す、みたいなものを実装しないといけないんだろうな
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - [ ] `meta.transpileModule`（指定したプログラムをtranspileして評価するプログラムをtranspileModuleで作るため）
                    - 2023/04/06: とりあえずテストケースだけ
                    - 2023/04/07: 実装はただre-exportするだけじゃん。後はテストケースの不完全なところを直すだけ
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/51d4a1649164afe6897a9aa225de68aea1a001b7>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/04/03 - 2023/04/07

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/eb17592fab83c68b527c643ae261039470624fb7/yesterday.md)
