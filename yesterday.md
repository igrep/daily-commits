# 2023/10/02 - 2023/10/08

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [x] `note`, `annotate`
                - 2023/10/02: やっぱ思ったより難しいかも。方法を考えるにとどめるかなあ
                    - 考えた。実装しよう
                    - `cu$comment`という名前は予約語として扱いたいので`cu$`をつけよう
                - 2023/10/03: 単なるコメントだけだと不便っぽいので`cu$annotated`もつけようかな？
                    - 設計も少し考えた
                - 2023/10/04: コメントの型設計。入れ子を認めるか迷うね。パーサーの実装上楽そうだし、とりあえず認めるか
                - 2023/10/05: 設計ミスったかなぁ。パーサー側で処理するのはよくなかったかも。でもパーサーでやらないと`Form`型を処理するとき分けづらいと思うんだよね。TypeScriptで考えるからそう感じるだけかな
                - 2023/10/06:
                    - やっぱもっと簡単に作ろう。そうだそうだ、特別扱いしなくていい作りにすればいいんだ
                        - というわけで実装
                    - vimのsyntax highlightはちょっとうまくいかないなぁ。vimの正規表現が難しい
            - [x] `array`モジュール（`base`からreexport）
                - [x] `last` / `first`
                    - 2023/10/07: 実装。
                        - ちょっと悩んだが、とりあえず空っぽの場合は`undefined`に。
                        - `array`モジュールを`base`から名前空間としてreexportする場合、少し工夫が必要だったがさらっと実装できた。我ながらよく考えついたと思う
                        - 2023/10/08: また設計をちょっと修正しないといけない問題にぶち当たってしまった。`Namespace`が入れ子になっているとアクセスできない、と。
                            - `Writer`の仕様を変えよう。`_cu$IsWriter`の代わりに`_cu$WriterKind`を作って、それを`import`したオブジェクトに被せる形にしよう。そうすればキーの追加が最小限で済む。
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/931605037a334363b391e8ac42dcaee6ad8fa5b4>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/10/08

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/dbfe6ae90079db8b366bd29d039f1e7c033ce1c0/yesterday.md)
