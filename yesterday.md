# 2020/11/16 - 2020/11/22

- wasm2arm32 compiler:
    - i32.wastにおけるすべての`assert_return`のテストケースを解決
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - タイムスタンプがN日前以前のもので、かつthreadファイルがないmessageについて、replyがついてないか確認する
        - replyが見つかったmessageについて、threadファイルを作る
    - Monad則を破る話:
        - 半分強程度執筆
        - ReadmeTestの実装
            - ブログ記事を書くまでの残りのTODOを整理:
                - importの問題: 冒頭N行目は出力しない
                - `generateMain`の実装
                - 2行目以降のexpected lineを出力する際の、インデント幅を適切に調整
    - slack-logの修正
        - <https://github.com/jpvillaisaza/slack-web/pull/84>の見直し、マージ
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- その他:
    - タイプセーフプリキュア！
        - 新しいバージョンをリリース: <http://hackage.haskell.org/package/typesafe-precure-0.7.10.1>。
        - issueの追加: <https://github.com/igrep/typesafe-precure/issues/44>
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
- 読書など:
    - [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
        - 2020/11/23
    - [圏論入門 Haskellで計算する具体例から](https://www.nippyo.co.jp/shop/book/8340.html)
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）
        - 2020/11/23

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/92e7b8326e87988174de587524318f4491be08e6/yesterday.md)
