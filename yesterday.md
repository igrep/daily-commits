# 2023/03/13 - 2023/03/19

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] `async.fn`, `async.scope`, `async.procedure`, `await`
                - 2023/03/13: 概ねできたはずだけど、テストが落ちる。デグレもある。デグレの方はよく調べてないから分からないけど、残りのテストの方は結構厄介そうね...
                - 2023/03/14: 昨日のテストのエラーは凡ミスだった
                - 2023/03/15: テスト修正。以前の仕様変更に追いついていないだけだった
                - 2023/03/16: テスト追加
                - 2023/03/17: `Scope`に`async`かどうかの情報を加えた。今のままだと`for`文とかで`scope`を増やす場合も`async`かどうかが切り替わっちゃうからそこはなんとかしないとね
                - 2023/03/18: `async`な`for`のテストを追加、新しい`scope.ts`の実装を一部
                - 2023/03/19:
                    - `scope.ts`から分かれた`definitions.ts`などのモジュール分割を検討。`import()`を呼ぶ処理のディレクトリーに合わせて`standardModulePath`の中身を書き換えないといけないのがつらい
                    - モジュール分割後のエラー修正。tscのエラーはなくなったけど、テストが型チェックで検出できそうな間違いで落ちる
            - [ ] refactor: `Writer`をinternalに移す
                - 2023/03/17: ついでにやることにした。一気にリファクタリング。
                - 2023/03/18: リファクタリングに伴うエラーの修正
            - [ ] viteの設定: <https://twitter.com/igrep/status/1623300862419546113>
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/17ebe926c8a14180c65c8d6543ccf76a36e096dd>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/03/13 - 2023/03/19

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/86050c46b05351790abe2348a68f43de07fe3107/yesterday.md)
