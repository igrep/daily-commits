# 2021/05/17 - 2021/05/23

- [ ] 週刊アスキーへの道
    - 2021/05/17: 引き続き実装。動かしてみたけど動かぬ
    - 2021/05/18: と思ったら動いてた。明日は画像を用意したりCSSを調整したりしよう
    - 2021/05/19: 軽くCSSを設定。画像は代わりにemojiを使うことにした
    - 2021/05/20: さらに見た目の調整。新しいイベントハンドラー追加し始め
    - 2021/05/23:
        - 結構できた。そろそろ保存機能がないとまともにテストプログラムも作成できないや
            - 現に今IFの挙動がおかしい。IF自身の問題ではなさそうだけど、マウスカーソルの位置と定数を比較しても意図した結果にならない
            - とは言え保存機能を今のプランで実装しようと思ったら設計を大きく変えないとなぁ
        - しかし今回も没かなー。規定の行数を大幅に超える割には不便。現時点で思ったよりは見かけはそれっぽくなったけど
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
        - 2021/05/22: 課題11はまだまだ続く... <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/0846eebcb1b185c040406b2e3fce5a5b63d15e72>
- [ ] タイプセーフプリキュア:
    - [x] トロピカル～ジュ！プリキュアのサポート
        - 2021/05/22: 先週修正しきれなかった箇所の対応ができた
    - [ ] 一部の台詞が変わる変身への対応
        - [x] トロピカル～ジュ！プリキュア
            - 2021/05/22: ようやくかねてより考えていたアイディアを実現し、トロプリの変身で確認できた
                - <https://twitter.com/igrep/status/1396115001551720452>
        - [ ] ローラ
        - [ ] ドキドキ！プリキュア
        - [ ] ドキュメントの修正
    - attachmentを付ける場合と付けない場合があるspecial itemを適切に処理する <https://github.com/igrep/typesafe-precure/issues/44>
        - [ ] Qiitaの記事の修正
    - [ ] リリース
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- 読書など:
    - [Reeact and React Native - Third Edition](https://www.packtpub.com/product/react-and-react-native-third-edition/9781839211140)
        - 2021/05/17 - 2021/05/23
    - The Implementation of Functional Programming Languages
        - ※Reactの方に夢中になっちゃってあまり頭に入っていないので後回し

------

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/549f814f173267ff0576d3baa00038bc0c72c441/yesterday.md)
