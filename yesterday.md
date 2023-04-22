# 2023/04/17 - 2023/04/23

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - [ ] `meta.transpileModule`（指定したプログラムをtranspileして評価するプログラムをtranspileModuleで作るため）
                    - 2023/04/17 - 2023/04/18: 引き続き`const`・`let`のトップレベルかつreplでの挙動を変える件
                    - 2023/04/19: すべて解決したか？と思いきや、まだうまく行かない。もしかして`set`する方の処理しか書けてないからか...
                        - `transpileExpression`関数を修正する必要があるわけだけど、この関数ちょっとリファクタリングしたいなぁ...
                    - 2023/04/20: `_cu$env`に格納したtopLevelの変数を参照するよう修正したけど、これじゃダメだ
                        - isolated-evalで例外が起きたときにtestがtimeoutしてしまう。ちゃんと例外処理はしているはずなのになぁ
                    - 2023/04/21: `EnvF.referTo`で取得した変数がトップレベルで定義した変数かどうかで分岐するようにしたけど、まだ足りない。後はjsTopLevelの扱いととかかねぇ。
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Speculation in JavaScriptCore](https://webkit.org/blog/10308/speculation-in-javascriptcore/)
        - 2023/04/08 - 2023/04/21

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/52e24dcf071abb8a14895d958557c0249863fd53/yesterday.md)
