# 2023/05/01 - 2023/05/07

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - [x] `meta.transpileModule`（指定したプログラムをtranspileして評価するプログラムをtranspileModuleで作るため）
                    - 2023/05/01: やっとテストを全部パスした...。後はリファクタリングかな
                    - 2023/05/02: リファクタリングできた、と思いきや、テストがめっちゃ落ちる。多分に評価順が変わったせいだねぇ。案外すぐ直せたけど。
                        - 欲が出て関係ないところだけど他にもリファクタリングしたくなってきた
                    - 2023/05/03: 想定通りリファクタリングできた。コードも少しすっきりしたし、パフォーマンス上も多少なりメリットがあるだろう。あと、`AsyncFunction`のconstructorの問題について調べたけど、思った通りに再現しなかった
                - 2023/05/04: 「指定したプログラムをtranspileして評価するプログラムをtranspileModuleで作る」ためには、今のREPL全体をcustardで書き直さないとコマンドが一つにならないし、やっぱ独立して作ってしまうか...。mal.jsを改善しながら思った。mal.jsに適当なコマンドラインパーサーを加えて整えよう。
                    - と、いうわけでコマンドラインパーサーにどのライブラリーを使うか考えていた。やっぱcommanderだなぁ。やっぱJSだとなかなかHaskellのoptparse-applicativeのように綺麗なのはできないね
                - 2023/05/05: commanderを使ってサブコマンドを分けて作っているところ
                - 2023/05/06: providedSymbols をcustardで設定することにした
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Speculation in JavaScriptCore](https://webkit.org/blog/10308/speculation-in-javascriptcore/)
        - 2023/04/08 - 2023/05/06

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/a63e0f9b7ea2b550a887bb6089cd8c62cd3ac9d9/yesterday.md)使って
