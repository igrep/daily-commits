# 2021/07/26 - 2021/08/01

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - [ ] 繋げたエッジも動かす処理
        - [ ] ノードを動かした時のz-indexの制御
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- [ ] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/20>
    - <https://github.com/haskell-jp/slack-log/pull/55> の修正・マージ
        - 2021/07/26: Windowsでビルドがこける問題を修正 <https://github.com/haskell-jp/slack-log/pull/55/commits/95c7c4c3ff3604e7eae836f1b16c1eda19540b25>
        - 2021/07/27: matsubaraくんの指摘を受けて修正 <https://github.com/haskell-jp/slack-log/pull/55/commits/1faf7e10277ea785a41a30ee8456cca8e137c9e2>
- 読書など:
    - [The Art of WebAssembly](https://nostarch.com/art-webassembly)
        - 2021/07/26 - 2021/07/27
    - The Implementation of Functional Programming Languages
        - 後回し

------

- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/ec1b7d8559f0a688282c6d3670dd6793ee3b38f8/yesterday.md)
