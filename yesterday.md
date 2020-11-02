# 2020/11/02 - 2020/11/08

- wasm2arm32 compiler:
    - [x] `i32.shl`のテストケースを解決
        - 2020/11/02: 達成
    - [x] `i32.shr_u`のテストケースを解決
        - 2020/11/02: 達成
    - [x] `i32.shr_s`のテストケースを解決
        - 2020/11/02: 達成
    - `i32.rotl`のテストケースを解決
    - `i32.rotr`のテストケースを解決
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
        - conversations.repliesのテスト用コマンドを作る
    - Monad則を破る話:
        - 半分強程度執筆
        - ReadmeTestの実装
            - 2020/11/02: 既存の`undefined`をすべて定義。これでテストは書けたかな？まぁ、概ね仕様は整理できただろうし、いい加減実装を書こう。
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
- 読書など:
    - [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
    - [圏論入門 Haskellで計算する具体例から](https://www.nippyo.co.jp/shop/book/8340.html)
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）

[先週の記録はこちら](2020/01.01-11.01.md)
