# 2021/05/31 - 2021/06/06

- [ ] 週刊アスキーへの道
    - 2021/05/31: 必要なクラスを列挙
    - 2021/06/01: 利用例から逆算して仕様を検討。規定された行数でどこまで任天堂のゲームを再現できるか悩みそうね。もちろんライブラリー側で多くをやってしまえば収まるだろうけど、あまりに特化したライブラリーを作ってしまうとずるい気もするし。
    - 2021/06/02: Custom Elementsうまく動かん。
    - 2021/06/03: 昨日うまく行かなかったのは、親要素にshadow rootを加えていたからだった。shadow rootを作っているときにshadow rootじゃない箇所に子要素を置いたら表示されないってことか。多分仕様どおりなんだろうけど、なんか警告出してよ！
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
        - 2021/05/31 - 2021/06/04
    - The Implementation of Functional Programming Languages
        - ※Reactの方に夢中になっちゃってあまり頭に入っていないので後回し

------

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f028896268621e5c8ad47cb86e5b43a0689da17b/yesterday.md)
