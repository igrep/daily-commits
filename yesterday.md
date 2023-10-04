# 2023/10/02 - 2023/10/08

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [ ] `cu$note`, `cu$annotated`
                - 2023/10/02: やっぱ思ったより難しいかも。方法を考えるにとどめるかなあ
                    - 考えた。実装しよう
                    - `cu$comment`という名前は予約語として扱いたいので`cu$`をつけよう
                - 2023/10/03: 単なるコメントだけだと不便っぽいので`cu$annotated`もつけようかな？
                    - 設計も少し考えた
                - 2023/10/04: コメントの型設計。入れ子を認めるか迷うね。パーサーの実装上楽そうだし、とりあえず認めるか
            - [ ] `array`モジュール（`base`からreexport）
                - [ ] `last` / `first`
                - [ ] `map`
                - [ ] `push`
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/10/04

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/dbfe6ae90079db8b366bd29d039f1e7c033ce1c0/yesterday.md)
