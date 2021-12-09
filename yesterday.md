# 2021/12/07 - 2021/12/12

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
        - [ ] autodocodecの環境変数インタープリター作り
            - 2021/12/06: ちょっとだけ。直接環境変数に変換できない型が多いの悩ましいね
            - 2021/12/07: ちょっとだけ。対応する値コンストラクターが多い... 実装見ても分からないものは飛ばすのが吉か...
            - 2021/12/08: やっぱちょっとautodocodeの設計的に難しい気がしてきたので別パッケージとして作るか...
            - 2021/12/09: 別パッケージをちょっとだけ
    - [ ] リリース
    - [ ] Advent Calendarの記事
    - [ ] Qrunchに書いていた記事をZennに
- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/issues/90>
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2021/12/06 - 2021/12/09
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

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/74d0c87dda68faed85ed6752a54ee11c3e2e8255/yesterday.md)
