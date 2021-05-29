# 2021/05/24 - 2021/05/30

- [ ] 週刊アスキーへの道
    - 2021/05/24: 昨日のバグはあっさり直せた。これでIFができた
    - 2021/05/25: 保存機能に向けて設計の変更を検討
        - してるうちに、これ、Web Componentにしてどこかにライブラリーとして公開すれば行数の問題もクリアできるんじゃないかという気がしてきた
    - 2021/05/26: 引き続き設計の変更。とっかかりがわからなくて始めるのに時間がかかり、あまり進まず。
    - 2021/05/27: 設計の変更だいぶできてきた。後は実行する箇所の移植だけかな？
    - 2021/05/28: 実行する箇所の移植もできた。動作確認ができた。ようやく保存機能が実装できる。
    - 2021/05/29:
        - 簡易的に保存機能を実装したものの、全く使い物にならないものだった... フォームへの入力が消えるわイベントリスナーが消えるわ。innerHTMLじゃダメね...
        - ここまで来て、素のバージョンを仕上げるモチベーションが落ちてきたので（テストもしにくいままだし）、Web Componentにするバージョンを作るためにWeb Componentsの勉強を始めた。
            - GitHubのCatalystを使ってみようとしてみたけど、これunpkgで使えなさそう...
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
- [ ] タイプセーフプリキュア:
    - [ ] レビュー
        - [ ] トロピカル～ジュ！プリキュアのサポート
        - [ ] 一部の台詞が変わる変身への対応
            - [ ] トロピカル～ジュ！プリキュア
        - [ ] ローラ
        - [ ] ドキドキ！プリキュア
        - [ ] ドキュメントの修正
    - [ ] 一部の台詞が変わる変身への対応
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
        - 2021/05/24 - 2021/05/29
    - The Implementation of Functional Programming Languages
        - ※Reactの方に夢中になっちゃってあまり頭に入っていないので後回し

------

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/295d0a1db803cd7318b7c3926be49735ed877752/yesterday.md)
