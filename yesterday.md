# 2022/01/10 - 2022/01/16

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
- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/pull/91>
    - [ ] slack-logにも適用
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/01/10

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに
- [ ] Yokohama.rbの問題 [103mask](http://nabetani.sakura.ne.jp/yokohamarb/103mask/)
    - 2022/01/10:
        - traverseする処理が書けたものの、そこからpower setを組み立てる処理が思いのほかうまく行かず。やっぱりparent nodeを紐付けてちゃんと木を作るしかないのでは
        - Nodeオブジェクト自身に辿ってきたノードにおける番号のリストを持たせて、一番深いノードに来たらyieldする、という実装にシャワー浴びてたら気づいた。うまくいくかな？
    - [ ] Haskellでも書く
    - [ ] 記事も書く？
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/87d324590c6100febc419d8192b731b3bbc0a66d/yesterday.md)
