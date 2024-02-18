# 2024/02/12 - 2024/02/18

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/02/12 - 2024/02/13: 引き続き型エラーの修正。`Form`が事実上`any`だったツケが回ってるねぇ
            - 2024/02/14: printerモジュールは追々書き直す予定なので、型エラーになった箇所ごと削除
            - 2024/02/15: Scannerの修正方法を検討。行番号を取り出すの難しそう
                - いっそパーサーごと書き直すか！
            - 2024/02/16: Scannerの再実装から着手。RubyのStringScannerを参考にする
            - 2024/02/17: Scannerの再実装ができたはず。昨日頭の中で書いていたアルゴリズムがうまくいくかな？
            - 2024/02/18: stickyフラグを使って昨日書いたコードを書き換えてみた
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/b521b0eb297c968a4c659851de4bd347b7967ca1>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 2 Programming Language Foundations](https://softwarefoundations.cis.upenn.edu/plf-current/index.html)
        - 2024/02/02 - 2024/02/18

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c4176ff45ec89449868574cff33285557ff88f75/yesterday.md)
