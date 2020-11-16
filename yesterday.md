# 2020/11/16 - 2020/11/22

- wasm2arm32 compiler:
    - i32.wastにおけるすべての`assert_return`のテストケースを解決
        - 2020/11/16: ctz関数実装開始。Cのバージョンを逆アセンブルして参考にしたり。しかし最適化有効にしてないから結構冗長なのが出たなぁ
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - タイムスタンプがN日前以前のもので、かつthreadファイルがないmessageについて、replyがついてないか確認する
        - replyが見つかったmessageについて、threadファイルを作る
    - Monad則を破る話:
        - 半分強程度執筆
        - ReadmeTestの実装
            - 先週気づいた型設計の修正を実装に反映。あとはspecをそれに合わせるよう考え直すだけ...
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
- 読書など:
    - [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
        - 2020/11/16
    - [圏論入門 Haskellで計算する具体例から](https://www.nippyo.co.jp/shop/book/8340.html)
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）
        - 2020/11/16

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/262f4a67e84582d0512469822f1d2f000eaac0af/yesterday.md)
