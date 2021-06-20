# 2021/06/14 - 2021/06/21

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - 2021/06/14: 昨日の時点で、Edgeの場合や、位置を調整したとき表示が少し崩れるのを調整
        - [x] plug/jackを動かす処理
            - 2021/06/14: どうしよう。初期位置のレイアウトをflexで簡単にするためにtranslateでやるのがいいかな、という気もしたけど却ってややこしいかな？
            - 2021/06/15:
                - 位置は一旦`position: absolute`にしておき、レイアウトは後で考えよう
                - とりあえず`draggable="true"`にしてみた。今どきは便利なAPIがあるんだなぁ
            - 2021/06/16: まだまだDraggable APIの勉強
            - 2021/06/17: Edgeで意図通りにドラッグ&ドロップでマウスカーソルの位置にノードを動かせるようになった
                - Firefoxでは全然動かないし、Edgeでもよく分からない条件で失敗する
            - 2021/06/18: 結局ドラッグ&ドロップ APIでの実装は諦めて、hashrock氏の[これ](https://github.com/anydown/anydown-monorepo/blob/master/packages/anydown-core/components/CodeBlockBlock.vue)を参考に`pointerdown`などを使ってやってみたが、どうもうまく行かない。なんかおかしい... と思ってさらにサンプルを検索してたどり着いた[これ](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable)を見てすぐ間違いに気づいた。単位の`px`がついてなかったのだ... あと位置の計算方法が間違っている（SVGの場合と勝手が違う）ようなのでこれも修正しないと
            - 2021/06/19:
                - 位置の計算方法を<https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable>を参考に直した
        - [ ] plug/jackを繋げる処理
            - 2021/06/19:
                - エッジの状態はgarageで管理した方がよさそう。そしてそれと同時にそろそろDAGも設計しないとね
                - `type`という概念はノードンにはないし、なくすべきかも
            - 2021/06/20: ちゃんと動くか分からんけど、結構進んだぞ。もう少しでとりあえず動かせそう
            - [ ] 繋げたエッジも動かす処理
        - [ ] ノードを動かしたz-indexの制御
        - [ ] ノードの削除
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
        - 2021/06/20: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/099ba30799a11584c0dea50800ab7d89cb47a09b>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
        - 2021/06/20: stack replとcabal replそれぞれが生成しているghcに渡している引数を見やすくした
- 読書など:
    - [Reeact and React Native - Third Edition](https://www.packtpub.com/product/react-and-react-native-third-edition/9781839211140)
        - 2021/06/14 - 2021/06/20
    - The Implementation of Functional Programming Languages
        - ※Reactの方に夢中になっちゃってあまり頭に入っていないので後回し

------

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/cac0613b039b5b54ce926db5e39a31515f5bbacb/yesterday.md)
