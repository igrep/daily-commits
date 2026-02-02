# 2026/02/02 - 2026/02/07

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/02/02: 昨日ぶち当たった問題の昨日考えた解決策はやっぱりダメそう。macroとasync macroを区別するようにした方が理に適ってそう。ってことで、`meta.defineMacro`にリネームする件と並行して開始。明日は`meta.defineAsyncMacro`のテストを書こう
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/02/02

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/7716254e87ef919133f37fa1cde861047364e9fe/yesterday.md)
