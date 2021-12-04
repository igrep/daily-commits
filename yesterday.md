# 2021/11/29 - 2021/12/05

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - 2021/11/29: 昨日のコードを軽く見てコミット
    - [ ] Zennのサポート
        - 2021/11/29:
            - 型設計を一気に変えてる。結構複雑になるのでまだ悩みそう
            - 個人的には全部コマンドライン引数にしてしまいたいけど、設定ファイルに書いた方が使いやすそうだなぁ
                - TOMLかYAMLにしようかなぁ
        - 2021/11/30: tomlandの採用に向けて型の修正。あとbarbiesも必要そうだ
        - 2021/12/01: Qiitaのアクセストークンだけは環境変数から取得する必要がありそう。というわけでenvyも採用か
            - というか他の項目も環境変数から使えた方がいいのか...
        - 2021/12/02: 面倒くさいし全部環境変数でいいんじゃないかな。ほとんどの環境変数はデフォルト値付きだし
            - autodocodecの環境変数インタープリターでも作ろうか
        - 2021/12/03: autodocodecをビルドできない。とりあえず目論んでいたとおりGHC 9.0にしてaeson 2に追従できてない問題を直せばできるかな？
    - [ ] リリース
    - [ ] Advent Calendarの記事
    - [ ] Qrunchに書いていた記事をZennに
- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/issues/90>
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2021/11/29 - 2021/12/03
    - The Implementation of Functional Programming Languages
        - 後回し

------

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - [ ] 繋げたエッジも動かす処理
            - [ ] 無関係な箇所をクリック（pointerup）したときにキャンセル
            - [ ] garageをはみ出たときのハンドリング
        - [ ] ノードを動かした時のz-indexの制御
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- [ ] Yokohama.rbの問題 [103mask](http://nabetani.sakura.ne.jp/yokohamarb/103mask/)
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/d7765bc3d1ad6e99a1b6b2e8c09f326d20b58b62/yesterday.md)
