# 2021/01/25 - 2021/01/31

- wasm2arm32 compiler:
    - i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- Haskell-jp活動:
    - slack-logの修正
        - 使用できなくなるAPIをリストアップして書き換える
            - 2021/01/26: リストアップするのも面倒だし、どうぜ2月には利用できなくなるのだから、slack-logの古いAPIを片っ端から削除することにした
            - 2021/01/27: 削除完了。明日からエラーが出るところを一つずつ直そうね
            - 2021/01/28: 削除対象の関数を呼んでいる`saveGroupsList`がイマイチなんで書いたのか分からん。もう不要なのでは？
            - 2021/01/29:
                - `saveGroupsList`を削除
                - slack-webにまだ削除し忘れている関数や型があったので削除。古いHistory関連の関数はもういらない。
        - 動作確認
- Haskell入門コンテンツ:
    - 課題10の不足箇所を埋める
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
- 読書など:
    - [Effect Handlers in Haskell, Evidently](https://xnning.github.io/papers/haskell-evidently.pdf)
        - 2021/01/25 - 2021/01/29
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）
        - 2021/01/25 - 2021/01/29

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/42123041bda568c3e820ea9bbcdd6f139c6d4854/yesterday.md)
