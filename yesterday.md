# 2023/02/27 - 2023/02/26

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] globalのJSの関数を呼べるように
                - 2023/02/27: Objectの構文定義。やっぱ今の段階ではやり過ぎだったんじゃないか、って気がしてくるねぇ
                - 2023/02/28: Objectのパーサーまだバグってる
                - 2023/03/01: エラーハンドリングに問題があったせいでエラーメッセージが分かりづらくなっていたのを修正
                - 2023/03/02: パーサーの問題を修正
                - 2023/03/03: 構文の仕様を変えたのにテストが追従できてないのを修正。次はtranspileの方も変えないと
                - 2023/03/04: workerでエラーが発生したときでもレスポンスを返すよう修正し、タイムアウトが発生しないように
                - 2023/03/05: Objectをtranspileする処理ができた
            - [ ] `asyncFn`, `asyncScope`, `asyncProcedure`, `constAwait`
            - [ ] refactor: `Writer`をinternalに移す
            - [ ] viteの設定: <https://twitter.com/igrep/status/1623300862419546113>
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - 2023/03/05: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/f80e1b970533c071b6887bbcc9316fd249696198>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/02/27 - 2023/03/05

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/fddb79491126da79f06702dd99d8f01900b69477/yesterday.md)
