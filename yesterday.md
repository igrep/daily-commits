# 2021/12/20 - 2021/12/26

- [x] Advent Calendarの記事
    - 2021/12/25: 共に公開
    - [x] Haskell (GHC)のおける記号の調べ方
        - 2021/12/20: 一部書いた
        - 2021/12/21: とりあえず書けた: <https://github.com/haskell-jp/blog/pull/212>
        - 2021/12/22: matsubaraくんの助けもありtypoなど修正
    - [x] 文字列型を抽象化する型クラスはmono-traversableがいいかも
        - 2021/12/22: 着手。どれだけ有効かを知るためにやっぱりでかい対応表を作ることにした。めんどい。事例紹介の前に力尽きそう
        - 2021/12/23: でかい対応表ができた
        - 2021/12/24: できた。軽い誤字などの修正
- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/issues/90>
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2021/12/20 - 2021/12/26
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
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに
- [ ] Yokohama.rbの問題 [103mask](http://nabetani.sakura.ne.jp/yokohamarb/103mask/)
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/243f15788a99a8e00efeba8f2c0eb496cca502c6/yesterday.md)
