# 2026/06/08 - 2026/06/14

- custard:
    - [ ] 依存関係の更新
        - 2026/06/08: アップデート自体は無事実行できたが、テストがたくさん落ちる
        - 2026/06/09: テストの修正方法、全く分からず。`import.meta.resolve`の挙動が変わったのが原因っぽいけど、どう変わったんだろう
            - 違った。`node_modules`ディレクトリーに`@custard-lang/processor`が入ってないのが原因らしい。`pnpm`の仕様変更だろうか？
                - `packages/command`の`node_modules`ディレクトリーには`@custard-lang/processor`が入っている一方project rootの`node_modules`にはない。まあ確かにこの方が適切な挙動か
        - 2026/06/10: テスト時に生成するファイルを`packages/test`以下に移すことで`@custard-lang/processor`が見つからない問題は解決したかと思いきや、まだ別の箇所で同じようなエラーが出る
    - [ ] tampermonkeyのスクリプト作成2
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/05/21, 2026/05/24 - 2026/06/10

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/59e8b47ac5cd77f1a2c7584c9a64ebc5a7ac08b5/yesterday.md)
