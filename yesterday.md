# 2021/11/15 - 2021/11/21

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - 2021/11/15: 最後に放置された状態がとても半端なので、何をやりたかったのか思い出すところから
    - 2021/11/16: Preprocessor型の`Show`と`FromJSON`のインスタンス定義を概ね終えた。ちょっとオーバーエンジニアリング感が強いけど...
    - 2021/11/17: 昨日最後に出遭った型エラーを修正
    - 2021/11/18: 今日も少しだけ
    - 2021/11/19: `main`の修正
- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/issues/90>
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
        - 2021/11/20: `read`関数の話といくつか先の課題で紹介する`Maybe`や`Either`について触れておくところ
        - 2021/11/21: 昨日の分も含めて今週はこれだけ
            - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/5ac4b84f31c73d80b75ce51a4ad74a077ac43edd>
            - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/196b331c93613a79b7ae92ff60e830352e8f17c2>
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2021/11/15 - 2021/11/19
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

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/4d49ecae81a61dc64dedc28772c4343e71484c9a/yesterday.md)
