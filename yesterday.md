# 2022/01/03 - 2022/01/09

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - [ ] 繋げたエッジも動かす処理
                - 2022/01/04:
                    - 実装にあたり、data propertyに設定するプロパティー名が間違っていたので修正
                    - 動かしたvertexに紐付いたedgeを取得する処理を一部実装
                    - はて、取得したedgeはどう動かすのがいいのか...
                        - 移動後のplug/jackの位置を求めてそれを追いかけるような形ならできるかも。`moveBy`より`follow`みたいな名前の方がいいか
                - 2022/01/05: 昨日の設計に問題があったのでやり直し
                - 2022/01/06: plugとjackでほぼ似たような実装になるだろう、と思いつつplug側の実装を一部
                - 2022/01/07: plug側の実装が結構進んだ。ただ、garageからedgeにつながっているjackを見つけるのが現状の実装では難しいのでちょっと設計を見直す必要が
                - 2022/01/08: edgeにつながっているjackを検索できるよう設計を修正して探索してみたが、見つからない。またselectorの間違いか？
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
- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/issues/90>
    - [x] Pull request送る
        - 2022/01/09: Pull request送れた <https://github.com/jpvillaisaza/slack-web/pull/91>
    - [ ] slack-logにも適用
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
        - 2022/01/03: ちょっとだけ
        - 2022/01/09: `concatLines`関数の解説の大半が書けた。課題12もこれで9割くらい終わったかな。<https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/0b8ca66b79570e57692ffa9d65b60d7e055b554f>
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/01/03 - 2022/01/09

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに
- [ ] Yokohama.rbの問題 [103mask](http://nabetani.sakura.ne.jp/yokohamarb/103mask/)
    - [ ] 記事も書く？
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/16625f3543a308990cc9697c21b97949269826a6/yesterday.md)
