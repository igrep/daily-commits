# 2026/02/02 - 2026/02/08

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/02/02: 昨日ぶち当たった問題の昨日考えた解決策はやっぱりダメそう。macroとasync macroを区別するようにした方が理に適ってそう。ってことで、`meta.defineMacro`にリネームする件と並行して開始。明日は`meta.defineAsyncMacro`のテストを書こう
        - 2026/02/03: `meta.defineAsyncMacro`のテストを書いた。実装も途中まで
        - 2026/02/04: 実装できたつもりだったけど、まだ肝心の部分が抜けているらしい。すっかり忘れてたけど、macroも普通の関数のようにスコープの管理をしなければならないのだ。
        - 2026/02/05: 既存の実装をよく見たらちゃんと`buildAsyncFn`を使って関数を定義していた。`defineMacro`では`buildFn`を、`defineAsyncMacro`では`buildAsyncFn`を使うようにしたので実装できたはず
        - 2026/02/06: 昨日の修正出てきた型エラーを直した。が、まだテストは落ちる。なんならデグレしてるな
        - 2026/02/07: 昨日のデグレの調査。
        - 2026/02/08: 一昨日デグレだと思ったものの一部はテストのミスだった。残りはエラーメッセージの修正と、`defineMacro`が何故かまだ`async.await`を許容してしまう問題か
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/02/08

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/7716254e87ef919133f37fa1cde861047364e9fe/yesterday.md)
