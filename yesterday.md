# 2021/07/26 - 2021/08/01

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - [ ] 繋げたエッジも動かす処理
                - 2021/07/27: 線を動かすアルゴリズムについて、従来のアルゴリズムの問題を修正すべく型修正
                - 2021/07/28:
                    - さらに ~~二つ~~ 一つ問題に気づいた:
                        - edgeのtop/leftは`PointerOnGarageSvg`、つまり親SVGのboundingClientRectの値を引かずに計算しないといけない
                        - `calcEdgeDef`関数に渡す、`PointerOnGarageSvg`の初期位置（x0, y0）が、最後にマウスがあった位置になってないか？
                            - 気のせいだった
                    - 分かりづらいので、最初から全部viewportからの絶対位置になるように作り直そう
                - 2021/07/29:
                    - 試行錯誤してようやく適切な設計が見つかった。こういう時型に守られてて変更が楽に感じるよな。
                    - 残りは一番難しい、lineの座標や位置を計算する箇所だ
                - 2021/07/30: lineの座標や位置を計算する箇所少し実装。合っているかは分からん
        - [ ] ノードを動かした時のz-indexの制御
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- [x] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/20>
    - <https://github.com/haskell-jp/slack-log/pull/55> の修正・マージ
        - 2021/07/26: Windowsでビルドがこける問題を修正 <https://github.com/haskell-jp/slack-log/pull/55/commits/95c7c4c3ff3604e7eae836f1b16c1eda19540b25>
        - 2021/07/27: matsubaraくんの指摘を受けて修正 <https://github.com/haskell-jp/slack-log/pull/55/commits/1faf7e10277ea785a41a30ee8456cca8e137c9e2>
- [ ] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/50>
    - 2021/08/01: 着手。テンプレートに渡す型をある程度修正
- 読書など:
    - [The Art of WebAssembly](https://nostarch.com/art-webassembly)
        - 2021/07/26 - 2021/08/01
    - The Implementation of Functional Programming Languages
        - 後回し

------

- Haskell入門コンテンツ:
    - [x] 課題11の不足箇所を埋める
        - やっとできたぜ <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/f8cbc29efc4aa65c1c66f555b3bdf8046d536db4>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/ec1b7d8559f0a688282c6d3670dd6793ee3b38f8/yesterday.md)
