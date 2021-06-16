# 2021/06/14 - 2021/06/21

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - 2021/06/14: 昨日の時点で、Edgeの場合や、位置を調整したとき表示が少し崩れるのを調整
        - [ ] plug/jackを動かす処理
            - 2021/06/14: どうしよう。初期位置のレイアウトをflexで簡単にするためにtranslateでやるのがいいかな、という気もしたけど却ってややこしいかな？
            - 2021/06/15:
                - 位置は一旦`position: absolute`にしておき、レイアウトは後で考えよう
                - とりあえず`draggable="true"`にしてみた。今どきは便利なAPIがあるんだなぁ
        - [ ] plug/jackを繋げる処理
            - [ ] 繋げたエッジも動かす処理
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/eaa072095ed694db838250b6112fad80b1a106bd>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- 読書など:
    - [Reeact and React Native - Third Edition](https://www.packtpub.com/product/react-and-react-native-third-edition/9781839211140)
        - 2021/06/14 - 2021/06/15
    - The Implementation of Functional Programming Languages
        - ※Reactの方に夢中になっちゃってあまり頭に入っていないので後回し

------

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/cac0613b039b5b54ce926db5e39a31515f5bbacb/yesterday.md)
