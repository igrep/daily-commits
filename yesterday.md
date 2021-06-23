# 2021/06/21 - 2021/06/27

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - 2021/06/21: 昨日までの実装で、不足していた部分まで実装できたはずだけど、動かず。
            - [ ] 繋げたエッジも動かす処理
            - [ ] ループの禁止
        - [ ] ノードを動かしたz-indexの制御
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
            - 2021/06/21: よーく考えたら、当初と違って実際のノードンのようなプログラミングモデルにする設計に切り替えたため、今の設計のままでちゃんと200行以内の実装ができるか心配になってきたので、先にインタープリターの部分を作りながらどういうデータをserialize/deserializeするか考えることにした
            - 2021/06/22:
                - インタープリター作り始め。やっぱりJavaScriptのイベントドリブンなモデルとの兼ね合いがちょっと難しい
                - トポロジカルソートが必要になったらどうしようかなぁ、それで行数がかさまないかなぁ
        - [ ] document
    - [ ] 企画の実装
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- 読書など:
    - [Reeact and React Native - Third Edition](https://www.packtpub.com/product/react-and-react-native-third-edition/9781839211140)
        - 2021/06/21 - 2021/06/22
    - The Implementation of Functional Programming Languages
        - ※Reactの方に夢中になっちゃってあまり頭に入っていないので後回し

------

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/3908b1f20014a5bc412d51d81ba08d08a40a3f0b/yesterday.md)
