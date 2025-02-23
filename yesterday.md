# 2025/02/17 - 2025/02/23

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/02/17: 今日は少しだけ実装。`yield`が返した新しい文字列を何とか`Scanner`に渡せるようにしないとか
        - 2025/02/18: `Scanner`に新しい文字列を渡せるよう修正。行と列の数え方が合ってるのかな？
        - 2025/02/19: 今日も少し。基本的に、`Generator`が`RecoverableParseError`を出すときは`yield`で、それ以外の時は`return`という原則にそればよさそう
        - 2025/02/20: 今日も少し。ちょっと難しくなってきた
            - ここまでの話を総合するに、`Generator`の`next`の結果を使えば`RecoverableParseError`であるか否かを区別する必要がないような気がしてきた。そもそもrecoverableじゃない場合であっても、そのトークンは無視して続きを受け取る、みたいなことはできるし、用途によっては必要なはず
        - 2025/02/21: 実装方法を確かめるためにプロトタイプを作ることにした。恐らく`yield`する際渡す`ParseError`は、スキップする長さを含めれば、途中のEOF以外のエラーでも応用できて便利だろう（今そこまでやらなくていいけど！）
        - 2025/02/22: プロトタイプの足回りを整えていた
        - 2025/02/23: プロトタイプの一番重要な箇所を実装できたつもり
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2025/02/21
    - [Metaprogramming with Python](https://www.packtpub.com/en-us/product/metaprogramming-with-python-9781838554651)
        - 2025/02/22 - 2025/02/23

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2c389b03e8c6ea6d7b492f857a43ca89aa2d34bb/yesterday.md)
