# 2023/03/20 - 2023/03/26

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] `async.fn`, `async.scope`, `async.procedure`, `await`
                - 2023/03/20: 発生した例外がthrowされてないせいでエラーが分かりづらい！ -\> base.test.tsではできているし、いい加減テストに使っている関数を共通化しよう、ってことて修正していた
                - 2023/03/21: テストの修正引き続き。エラーハンドリングがうまく行っていないみたいで、一部の（より根本原因に近い）エラーが別のエラーに塗りつぶされてしまっているみたいね。今回は詳細分からないまま直しちゃったけど...
            - [ ] refactor: `Writer`をinternalに移す
            - [ ] viteの設定: <https://twitter.com/igrep/status/1623300862419546113>
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/03/20 - 2023/03/21

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/80bfec7ffb4a907334a2fea79f32f2f562ecac99/yesterday.md)
