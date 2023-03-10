# 2023/03/06 - 2023/03/12

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] globalのJSの関数を呼べるように
                - 2023/03/06: 残っている型エラーを成敗。いよいよ後は`jsTopLevels`を初期の`Scope`に入れ込む処理だけど、どこで実装するのが適切だろうか
                    - `loadAsScope`が返す`Scope`と合成する関数を作ってそれと`Scope`を初期化する処理と混ぜれば...
                        - その辺を一手に引き受けるモジュールが必要そうね。internal/scope.tsでいいかな
                            - となるとenv.ts辺りにある他のscope関連の処理も...と思ったけど意外とないね
                - 2023/03/07: これでできたか、と思いきやエラーに。なんかオブジェクト型の値を`transpile`した結果がおかしいらしい
                - 2023/03/08: 問題はエラーハンドリングだった。そして、直したらその根本原因である問題が分かった
                - 2023/03/09: できたはず。明日コミットしよう
            - [ ] `asyncFn`, `asyncScope`, `asyncProcedure`, `constAwait`
            - [ ] refactor: `Writer`をinternalに移す
            - [ ] viteの設定: <https://twitter.com/igrep/status/1623300862419546113>
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/03/06 - 2023/03/09

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/d29abd45303f274bb97a726d73993b8dab203a5e/yesterday.md)
