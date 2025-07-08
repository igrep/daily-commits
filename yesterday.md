# 2025/07/07 - 2025/07/13

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/07/07: 引き続きデバッグ。同じ出力が2回出ているように見えたのは、`expected`を構築する時に同じ箇所を実行しているせいだった。そりゃそうか
        - 2025/07/08: 一つバグを取り除けた。予期せぬ`ParseError`が出るのはあと一つだけかな？
            - `symbolOrPropertyAccess`でも、`stringP`と似たような配慮が必要らしい。一旦諦めるか。文字列リテラルほど重大な問題ではないし
- 読書など:
    - [実践TLA+](https://www.shoeisha.co.jp/book/detail/9784798169163)
        - 2025/03/25 - 2025/07/05
    - [型システムのしくみ ― TypeScriptで実装しながら学ぶ型とプログラミング言語 – 技術書出版と販売のラムダノート](https://www.lambdanote.com/products/type-systems)
        - 2025/07/06 - 2025/07/08

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2a8a8ae588fb5795b60a1edebad433c7aaa5d5be/yesterday.md)
