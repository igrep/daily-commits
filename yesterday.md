# 2021/08/23 - 2021/08/29

- [x] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/50>
    - 2021/08/23: 後はテストを通して手でも確認するだけ、ってところまできた
    - 2021/08/24: 昨日のバグを直した。自動テスト通せた！
    - 2021/08/25:
        - 実際に`slack-log generate-html`を実行するとやっぱりエラーになったので修正
        - 無事生成できたが、ちょっとCSSがおかしい
    - 2021/08/26:
        - CSS修正（実際にはtemplateの要素に着けたclassの修正）
        - ついでに <https://github.com/haskell-jp/slack-log/issues/56> にも挑んでる
    - 2021/08/27: <https://github.com/haskell-jp/slack-log/issues/56> の修正ができたので再生成して確認OK。あとはリリースか。
    - 2021/08/28: できた。確認もOK
        - <https://github.com/haskell-jp/slack-log/pull/58>
- [ ] Haskell Day 2021の動画作り
    - [ ] スライド作り
        - 2021/08/29: ようやく着手
- 読書など:
    - [WEB+DB PRESS Vol.122](https://gihyo.jp/magazine/wdpress/archive/2021/vol122)
        - 2021/08/23 - 2021/08/28
    - The Implementation of Functional Programming Languages
        - 後回し

------

- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
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
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/fa82962cf1269a6f6a16b11a8b048d2ba3325985/yesterday.md)
