# 2023/05/29 - 2023/06/04

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/05/29: どうもworker threadとの同期が上手くとれていないのか、isolated-evalの中にdebug logを仕込むとmetaやasyncモジュールが絡むテストで失敗してしまう。debug logを消すか、実行するテストケースを一つに絞ると再現しない。どうも`env`を`Map`に`set`し損ねている（あるいは不正な`contextId`を作ってしまっている）ように見える。とりあえず無視するか...
                    - ってことで少し実装を進めた
                - 2023/05/30: ちょっとだけ
                - 2023/05/31: REPL top level以外の場合のケースができたかな
                    - でもテストケースの大半はREPL top level向けなのでほとんど落ちるね...。いい加減これもなんとかしないと
                - 2023/06/01: REPL top levelかつ`cuSymbol`の場合を実装
                - 2023/06/02: REPL top levelかつ`KeyValues`の場合を実装、したつもりだけどこれまだまだ考えることがたくさんあるねぇ
                    - テストも落ちてる。パッと見た感じ、REPL top level向けではなく普通のコードを吐いてしまっているらしい
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Design 2023年5月号](https://gihyo.jp/magazine/SD/archive/2023/202305)
        - 2023/05/29 - 2023/06/02

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/97220d6da1207f214c3acc3fe90680824d73949b/yesterday.md)
