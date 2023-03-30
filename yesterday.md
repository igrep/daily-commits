# 2023/03/27 - 2023/04/02

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] `async.fn`, `async.scope`, `async.procedure`, `await`
                - 2023/03/27: 修正漏らしてるだけだった。`while`と`for`については`async.procedure`と`async.fn`でテストすればいいか
                - 2023/03/28: `async.procedure`と`async.fn`のテストができたはず
                - 2023/03/29: `async.fn`の実装をしたものの、テストの方にまだ間違いがあるらしい
                - 2023/03/30: 一昨日のテストを修正。まだ`async.fn`にバグがある模様
            - [ ] refactor: `Writer`をinternalに移す
            - [ ] viteの設定: <https://twitter.com/igrep/status/1623300862419546113>
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/03/27 - 2023/03/30

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/3a99aa2cb2a55c12aa0cfc25743439f19f03d7c2/yesterday.md)
