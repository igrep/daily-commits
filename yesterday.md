# 2021/01/11 - 2021/01/17

- wasm2arm32 compiler:
    - i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- Haskell-jp活動:
    - slack-logの修正
        - タイムスタンプがN日以前のもので、かつthreadファイルがないmessage、またはthreadファイルにおける最後のメッセージのタイムスタンプがN日以前のmessageに、replyがついてないか確認して、replyを取得する
            - 2021/01/18:
                - [x] 昨日気づいた問題について、conversations.historyもconversations.repliesと同じ順番か調べる
                    - <https://twitter.com/igrep/status/1350974583105531905>
                    - ややこしいので、続くツイートに書いたとおり「結論、順番に依存せずに全ページをフラットに取得してから自前で好きな順番にソートする、が正解」なんだろう
        - 使用できなくなるAPIをリストアップして書き換える
- Haskell入門コンテンツ:
    - 課題10の不足箇所を埋める
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
- 読書など:
    - [圏論入門 Haskellで計算する具体例から](https://www.nippyo.co.jp/shop/book/8340.html)
        - 2021/01/18
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）
        - 2021/01/18

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/77e43c0b87bb03cdccf8879a9545d95cf94a60bd/yesterday.md)
