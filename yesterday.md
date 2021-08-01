# 2021/08/02 - 2021/08/08

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
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- [ ] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/50>
- 読書など:
    - [The Art of WebAssembly](https://nostarch.com/art-webassembly)
    - The Implementation of Functional Programming Languages
        - 後回し

------

- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/1403391eae0792ebfd3625e9ce2f0222a2f5ab7e/yesterday.md)
