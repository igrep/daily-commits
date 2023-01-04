# 2023/01/02 - 2023/01/08

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] 末尾再帰の最適化（マクロを実装してから）
        - [ ] Step 6
            - [ ] `importJs`:
                - [ ] `fs/promises`の関数を呼べるように
                - [ ] globalの関数を呼べるように
            - [ ] `asyncFn`
            - [ ] `asyncScope`
            - [ ] `constAwait`
            - [ ] `readString`
                - 2023/01/04: テストの修正したけど上手く動かない。まだワーカーとのやりとりにバグがあるのか？
            - [ ] `transpile`
            - [ ] `evaluate`
            - [x] `import`
                - 2023/01/02: `async/await`修正祭が終わった。REPLで`awwait`が必要な場合に次の式を`then`でラップする処理を加えたが、テストが少ないヒントで落ちる
                    - workerが転送したオブジェクトが`Promise`だからだった。デバッグしづれぇ
                    - これで多分できたかな？
                - 2023/01/03: ESLintの指摘に対応して、一旦GitHubでレビューできるようPull request
                - 2023/01/04: 指摘対応。マージ
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/01fb1649a7da1bdae3deef7fb03d80ba91a2c4d4>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/01/02 - 2023/01/04

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/8d5867054b999d4dbaeba8f090e665da2834acd1/yesterday.md)
