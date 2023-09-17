# 2023/09/11 - 2023/09/17

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - 2023/09/11: 昨日気づいた、`node:`のモジュールを`import`できない問題を修正
            - 2023/09/12: 最後に処理した投稿の時刻を取得する処理をほぼ全部書いて、transpilerに必要な機能を列挙した
            - [x] try/catch/finally/throw
                - 2023/09/13: できれば式として使えるようにしたいけど、ちょっとめんどくさいし止めとくか...
                    - `scope`と`fn`の最後を式にするって制限はなくてもいいかも
                - 2023/09/14: テストケースを実装
                - 2023/09/15: 実装着手。ちょっとだけ
                - 2023/09/16: 引き続き実装。面倒なstate machineの手書きになってきた。まあパーサー書いているような門だから当然よね...
                - 2023/09/17: できたけど、やっぱ複雑な実装になってしまったなぁ
            - [ ] meta.directoryOfThisFile, meta.thisFile
            - [ ] `scope`と`fn`の最後は式でなくても良くする
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/6e6433dc953c8225fb3d5192eba9e882d722ed31>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/09/17

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/b08fde787480504de18f01bad4b26091f8718a24/yesterday.md)
