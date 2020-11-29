# 2020/11/30 - 2020/12/04

- wasm2arm32 compiler:
    - i32.wastにおけるすべての`assert_return`のテストケースを解決
- Haskell-jp活動:
    - slack-logの修正
        - タイムスタンプがN日以前のもので、かつthreadファイルがないmessageについて、replyがついてないか確認する
        - replyが見つかったmessageについて、threadファイルを作る
        - その前に「N日以前」を表す設定項目が必要だったので追加
    - Monad則を破る話:
        - 半分強程度執筆
        - ReadmeTestの実装
            - ブログ記事を書くまでの残りのTODOを整理:
                - 2行目以降のexpected lineを出力する際の、インデント幅を適切に調整
                - 結合テスト
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
- 読書など:
    - [圏論入門 Haskellで計算する具体例から](https://www.nippyo.co.jp/shop/book/8340.html)
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/d2a581aec730d85f24e66084d3804e97db88059b/yesterday.md)
