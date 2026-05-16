# 2026/05/11 - 2026/05/17

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/05/11 - 2026/05/13: 新しい`PropertyAccess`の実装引き続き。内部で使っていた`CallingWriter`を`writer`だけでいいようにしたい。よく見たら`sym`の部分はエラーメッセージの表示にしか使っていないようだし。
        - 2026/05/14: `formatForError`が出す文字列をより簡潔に修正しつつ、`showSymbolOrPropertyAccess`の代わりに`formatForError`を用いることで、internal/transpile.ts`の型エラーを全て潰せた。
            - `PropertyAccessResolutionResult`の`writer`はない、ってことにしたいけど、やっぱりちょっと不便だしそれ用の`Writer`を作るか？`Writer`として加えるよりかは、`Writer`でも`undefined`でもない固有の値を作るか
        - 2026/05/15: 別種の`Writer`は、やっぱ面倒なので止めた。代わりに`CuSymbol`と`PropertyAccess`のtranspile周りをリファクタリングした。型エラーの大半を潰せた
        - 2026/05/16: 型エラーを全て潰せた。しかし、テスト結果見た感じまだ大本の問題が直せていない？
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/05/16

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/6666fde938841f454a2840ee380ea43639064a84/yesterday.md)
