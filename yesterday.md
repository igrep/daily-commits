# 2026/06/15 - 2026/06/21

- custard:
    - [x] 依存関係の更新
        - 2026/06/15: 読み間違えた。作り直すべきは`default-provided-symbols.cstd`ではなかった。回避が出来るかと思いきやできないってことだ。やっぱりわからん
            - <https://nodejs.org/dist/latest-v24.x/docs/api/esm.html#importmetaresolvespecifier>を読むに、Node.jsの`import.meta.resolve`は第2引数を取ることができないらしい。これが原因か？じゃあなんでテストで動いていたんだろう
                - よくよく読んでみたら、第2引数は`--experimental-import-meta-resolve`フラグが必要らしい。ブラウザーなどにもこの機能はない。で、フラグを有効にしたら動いた。真面目にやるんなら`import.meta.resolve`直接使わずにやるとかしないといけないんだろうね
                - vitestは自前で`--experimental-import-meta-resolve`を有効にしているらしい
                    - <https://github.com/vitest-dev/vitest/blob/d40fa598817fcf6bc97ce1c35dfa188f04527fb6/packages/vitest/src/node/pool.ts#L253>
        - 2026/06/16: `process.execArgv`をいじることで解決できた
        - 2026/06/17: これまでの変更を`git commit`
    - [x] pkgsにrename
        - 2026/06/18: 完了
    - [ ] tampermonkeyのスクリプト作成2
        - 2026/06/19: リポジトリーの外で使えるよう、ひとまず新しいバージョンを公開
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/05/21, 2026/05/24 - 2026/06/19

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/28a3071ceaaa90cabad61d18021ca21d45ac7d2c/yesterday.md)
