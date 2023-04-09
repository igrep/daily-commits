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
                    - 2023/04/08: テストケースで`providedSymbols`を作るところでハマる
                    - 2023/04/09: パーサーのバグっぽいな、と思ったけどそんなことなかった...。まだテストは通らない
                        - まずい`switch`文（`case`節を意図せずまたいでしまっている）のが見つかったので直したけど、特に実行結果は変わらないので直らない
                        - 一つ問題をクリアしたが、最後に`jsTopLevels`で`import`した`eval`が`eval`しないでそのまま文字列を返しているっぽく見える謎が残った
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - 2023/04/09: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/d118eaddc3886faa841ac5f10ceece5e46f7fd24>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - 2023/04/09: パーサー**以外の**cabal部分を編集する部分ができた模様
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/04/03 - 2023/04/07
    - [Speculation in JavaScriptCore](https://webkit.org/blog/10308/speculation-in-javascriptcore/)
        - 2023/04/08 - 2023/04/09

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/eb17592fab83c68b527c643ae261039470624fb7/yesterday.md)
