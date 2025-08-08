# 2025/08/03 - 2025/08/10

- custard:
    - [ ] Conjureのサポート
        - 2025/08/04: Yak-shavingがまだ続きそう
        - 2025/08/05: ライブラリー側での`Context`の切り替え機能が出来たと思いきや、まだテストなどで型エラーが
        - 2025/08/06: 紛らわしいし忘れてたけど、`transpileOptions`の`srcPath`と`ProvidedSymbolsConfig`に元々書いていた`from`は別の概念なはず
            - やはり別だった: <https://deepwiki.com/search/compare-the-usage-of-transpile_3fa01ea6-3ce6-4119-8d38-004773cedd98>。自分で決めたのにAIに教わって情けない。そうだとすると、`EnviromentF.initialize`の実装が全然違ってくるね。何を見てたんだ俺は
        - 2025/08/07: 今日はちょっとだけ。cli-repl.ts以外の型エラーを直した
        - 2025/08/08: 内部の設計がまだブレて混乱してる...
- 読書など:
    - [型システムのしくみ ― TypeScriptで実装しながら学ぶ型とプログラミング言語](https://www.lambdanote.com/products/type-systems)
        - 2025/07/06 - 2025/07/10, 2025/07/12 - 2025/08/08

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/d83d6fbd4506e07bf5473a099d50a8ade3f4a5b1/yesterday.md)
