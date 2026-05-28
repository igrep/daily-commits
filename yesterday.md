# 2026/05/25 - 2026/05/31

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - Done 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => Done 合計のみを出す
                    - => 内訳を出す
        - 2026/05/25: ここまでの修正をコミット
        - 2026/05/26: 「日付にマッチする行を返す」処理の実装に着手
        - 2026/05/27: 「日付にマッチする行を返す」処理の実装ができた。アプリケーションの中で`process.exit`したり`process.argv`を変更したりしてしまうと`custard transpile`の実行にも影響を与えてしまうので、早くどうにかしないとね。これができたら次はそれやるか。
            - その前に依存パッケージのアップデートだね
            - でも、CLIアプリでなければ別に`process.exit`とか使うことはないし、次にCLIアプリを作るときまで後回しでいいかも
        - 2026/05/28: 「内訳を出す」処理を軽く実装。動作確認は明日やる
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/05/21, 2026/05/24 - 2026/05/28

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5fddb245263b5a00676444111b0e8a9b96c6b8e7/yesterday.md)
