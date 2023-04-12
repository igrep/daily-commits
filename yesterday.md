# 2023/04/10 - 2023/04/16

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - [ ] `meta.transpileModule`（指定したプログラムをtranspileして評価するプログラムをtranspileModuleで作るため）
                    - 2023/04/10: 何度確認しても、`transpileModule`が返した文字列がおかしいのではなく、単にJSの`eval`が呼ばれてない、というのが問題っぽい。なぜ？
                    - 2023/04/11: 今日は最近いろいろ更新した関係で、Neovim周りでトラブって本体は進まず。`eslint_d`でprettierを使うのはもうやめた方がよさげなことになったのでやめるようにしていた
                    - 2023/04/12: 原因は、`transpileModule`の結果を`await`してないからだった...
                        - 参ったなぁ。現状二つ以上のモジュールを`import`するとうまく行かないってバグがあるし...
                        - 本質的じゃないし、とりあえず`eval`した結果じゃなくて`transpile`した結果そのもので判定することにした
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Speculation in JavaScriptCore](https://webkit.org/blog/10308/speculation-in-javascriptcore/)
        - 2023/04/08 - 2023/04/12

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/a7d7cf43785ae0a0de27b5e8c59aa6de7067a3a1/yesterday.md)
