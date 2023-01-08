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
            - [ ] `readString`, `evaluate`
                - 2023/01/04: テストの修正したけど上手く動かない。まだワーカーとのやりとりにバグがあるのか？
                - 2023/01/05:
                    - `__cu$Context.set`メソッドを`eval`で読んだ結果、結果が`Promise`を含む`Map`になったのが原因らしい
                    - 直したら、今度は`CuSymbol`の他に`PropertyAccess`を追加したことによる修正があちこちに必要なことが分かった
                - 2023/01/06:
                    - 引き続き`PropertyAccess`についての対応
                    - まだ`import`関連のバグがあるらしい
                - 2023/01/07: `import`やら`Env`のmutationの管理やらでバグがたくさん見つかった。残る問題は`evaluate`にどう`env`を渡すか、ですね...
                - 2023/01/08:
                    - 昨日までの修正でできていた別のバグを直した
                    - `Env`の件は、単純にスレッドをやめた方がいい気がするな。
                        - 修正してみたところ、`ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING`なるエラーが。多分適当に`then`を挟めば解決できるんでしょうけど...
            - [x] `import`
                - 2023/01/02: `async/await`修正祭が終わった。REPLで`awwait`が必要な場合に次の式を`then`でラップする処理を加えたが、テストが少ないヒントで落ちる
                    - workerが転送したオブジェクトが`Promise`だからだった。デバッグしづれぇ
                    - これで多分できたかな？
                - 2023/01/03: ESLintの指摘に対応して、一旦GitHubでレビューできるようPull request
                - 2023/01/04: 指摘対応。マージ
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/ad194d12e078a47fe859c21b5a2704403a3ebb3c>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabal --versionの出力をパースする関数のテストを書いた。cabalが内部で使っているパース機構をそのまま使うのはやっぱり不向きっぽいので直接parsecを使って書き直すことに
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/01/02 - 2023/01/08

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/8d5867054b999d4dbaeba8f090e665da2834acd1/yesterday.md)
