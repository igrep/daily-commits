# 2021/06/28 - 2021/07/04

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - [ ] 繋げたエッジも動かす処理
            - [ ] ループの禁止
        - [ ] ノードを動かしたz-indexの制御
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/03e6462ef008b67003067ef4e52c9fa14b6d455d>
- [ ] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/20>
    - GHCとStackageのLTSを更新した結果、type-of-htmlの新しいバージョンに追従しないといけなくなったので、どうせtype-of-htmlは乗り換えるつもりだったから急遽取り組むことに。その間更新を止めないといけないのが心配。何週間かかるかな...
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- 読書など:
    - [The Art of WebAssembly](https://nostarch.com/art-webassembly)
    - The Implementation of Functional Programming Languages
        - 後回し

------

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/740504cfa4ea38c65f0189b50be312b80c88a858/yesterday.md)
