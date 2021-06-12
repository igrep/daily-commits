# 2021/06/07 - 2021/06/13

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackの見た目
            - 2021/06/07
            - 2021/06/08: やっぱ飛び出たりへこんだりするところが難しいね。Grid Layoutのほうが簡単だったりする？
            - 2021/06/09: と、思ったけどflexでなんとかなりそう。
            - 2021/06/10: 少しずつ見た目がそれっぽくなってきた！
            - 2021/06/11: やはりこれまで検討した方法ではできなさそうだ。すごく頑張って位置を調整したらできるかもだけど、難しそう。ちらちらと考えていた、背景色で上書きする方法の方が確実だ。背景色をユーザーで指定しないといけなくなるけど...
        - [ ] plug/jackを繋げる処理
        - [ ] serialize/deserialize
        - [ ] layout
        - [ ] document
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/eaa072095ed694db838250b6112fad80b1a106bd>
- [x] タイプセーフプリキュア:
    - [x] レビュー
        - [x] ドキドキ！プリキュア
        - [x] ドキュメントの修正
    - [x] 一部の台詞が変わる変身への対応
        - [x] ドキドキ！プリキュア
        - [x] ドキュメントの修正
    - attachmentを付ける場合と付けない場合があるspecial itemを適切に処理する <https://github.com/igrep/typesafe-precure/issues/44>
        - [x] Qiitaの記事の修正
    - [x] リリース
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- 読書など:
    - [Reeact and React Native - Third Edition](https://www.packtpub.com/product/react-and-react-native-third-edition/9781839211140)
        - 2021/06/07 - 2021/06/12
    - The Implementation of Functional Programming Languages
        - ※Reactの方に夢中になっちゃってあまり頭に入っていないので後回し

------

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/9cb957d26f4859c6478fcf8c8d2609a476c2ee20/yesterday.md)
