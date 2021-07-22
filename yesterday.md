# 2021/07/19 - 2021/07/25

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - [ ] 繋げたエッジも動かす処理
                - 2021/07/19: エッジの初期位置を修正。plugの中心からクリックした位置へ線を表示することに。このほうが多分線ができたことが分かりやすい
                - 2021/07/20: エッジの初期位置の修正引き続き。
                - 2021/07/21: エッジの初期位置の修正終わったけどうまく動かず。まぁ依然として線を動かすアルゴリズムがおかしいでしょうしね
            - [ ] ループの禁止
        - [ ] ノードを動かした時のz-indexの制御
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- [ ] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/20>
- 読書など:
    - [The Art of WebAssembly](https://nostarch.com/art-webassembly)
        - 2021/07/19 - 2021/07/21
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

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/4c8f11fc98ddb3abdb6448c78b06aed1875224bf/yesterday.md)
