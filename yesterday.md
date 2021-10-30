# 2021/10/25 - 2021/10/31

- [ ] その他: WebAssembly Reference Typeの記事
    - [x] ごく簡単な例
        - 2021/10/27: Rustによるサンプルのビルドの設定
        - 2021/10/28: ベンチマークでも同じサンプルにしたくなったのでサンプルを修正
    - [x] ベンチマーク in Rust
        - 2021/10/29: 軽く録ってみたところ、Reference Typesを使った方がちょっと遅い。なんでか分からないが、とりあえずまぁそういう結果として公開するか...
    - ベンチマーク in WAT
        - 2021/10/30: どうせこのままだとWATでやっても遅いだろうし、止めておこう
    - [x] ベンチマーク in JS
        - 2021/10/30: サクッと書いた。あとはディレクトリー構成を見直してpush、かなー
    - [ ] 本文
        - 2021/10/30: これもまぁまぁ前進
- [ ] Haskell Day 2021
- [ ] タイプセーフプリキュア
- [ ] sydtestへIssue・PR
    - [ ] `--system-ghc`
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
        - 2021/10/25: ちょっとだけ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2021/10/25 - 2021/10/30
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
- [ ] Yokohama.rbの問題 [103mask](http://nabetani.sakura.ne.jp/yokohamarb/103mask/)
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/6f5a5808fe9059ecb9680cba265ff96b494aefb1/yesterday.md)
