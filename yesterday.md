# 2026/06/08 - 2026/06/14

- custard:
    - [ ] 依存関係の更新
        - 2026/06/08: アップデート自体は無事実行できたが、テストがたくさん落ちる
        - 2026/06/09: テストの修正方法、全く分からず。`import.meta.resolve`の挙動が変わったのが原因っぽいけど、どう変わったんだろう
            - 違った。`node_modules`ディレクトリーに`@custard-lang/processor`が入ってないのが原因らしい。`pnpm`の仕様変更だろうか？
                - `packages/command`の`node_modules`ディレクトリーには`@custard-lang/processor`が入っている一方project rootの`node_modules`にはない。まあ確かにこの方が適切な挙動か
        - 2026/06/10: テスト時に生成するファイルを`packages/test`以下に移すことで`@custard-lang/processor`が見つからない問題は解決したかと思いきや、まだ別の箇所で同じようなエラーが出る
        - 2026/06/11: 残りのエラーはREPLの場合で、REPLが`src`とするディレクトリーの末尾に`/`を着けるだけであっさり解決。`import.meta.resolve`の細かい挙動が垣間見える
            - というわけで packages/test のテストが全部通った
        - 2026/06/12: packages/command のテストも packages/test と同じ問題があったので直したが、まだ同じエラーが出る。`import.meta.resolve`の第2引数に渡したパスが存在しないから、とか？
            - とすると、エラーメッセージが紛らわしい。Node.jsのバグといっていいかもしれない
            - 話を戻すと、元々期待していた`.provided-symbols.cstd`はどこにある`.provided-symbols.cstd`のつもりだったんだろう
        - 2026/06/13: エラーメッセージ云々の問題は多分関係なさそう。というのも、初期化に失敗していたのは、bootstrapに必要な`ProvidedSymbolsConfig`、つまりコマンドライン引数で与えた`.provided-symbols.cstd`を評価するのに使う大本の`ProvidedSymbolsConfig`だったからだ。
            - それはそれとしてやっぱりエラーメッセージがなんか変な感じ。`import`元を指しているであろう、`import.meta.resolve`の第2引数とは違う、`import.meta.resolve`を呼んだファイルのパスが`imported from ...`の所に出てるし
            - いずれにしても、`packages/test`でうまく行った時のことを思うと、`ProvidedSymbolsConfig`はCustardで提供するんじゃなくてtranspile済みのJavaScriptとして提供した方が無難そう。まあ、その方が少し実行も速いだろうし
                - ただ、目の前にある、大本の`ProvidedSymbolsConfig`の問題を解決したとして、本当にその続きもうまく行くんだろうか。根本原因が分からないし自信がない
                - ああ、あと、あまり関係ないかもだけど、大本の`ProvidedSymbolsConfig`を取りに行くときの`srcFullPath`が実態と異なるのは紛らわしいし直した方が良いかもね。最初からJSに変換すればそれも考えなくて済むし、いずれにしても変えた方がいいのか？
    - [ ] tampermonkeyのスクリプト作成2
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/05/21, 2026/05/24 - 2026/06/14

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/59e8b47ac5cd77f1a2c7584c9a64ebc5a7ac08b5/yesterday.md)
