# 2021/12/13 - 2021/12/19

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
        - [x] envparse-applicative
            - 2021/12/13 - 2021/12/14: デフォルトの.envを出力する処理の実装中。ちょっと設計ミスに気づいたけど、もう直すのも面倒ね...。case insensitiveか否かを格納する型を間違えたと思う。まぁ今のところ使わない機能だろうしなぁ
            - 2021/12/15: テストが全部通った！昨日発覚した問題はとりあえず後回しで！
        - 2021/12/16: option parserが書けた。次は昨日作ったライブラリーで環境変数の処理とdotenvパッケージの導入かな
    - [ ] リリース
    - [ ] Advent Calendarの記事
    - [ ] Qrunchに書いていた記事をZennに
- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/issues/90>
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2021/12/13 - 2021/12/15
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

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/0288f7db2845f42eeb31a926c374965dd8f8b2c8/yesterday.md)
