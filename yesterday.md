# 2025/03/17 - 2025/03/23

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/03/17: テストを一部書いた
        - 2025/03/18: テストで`ParseErrorWantingMore`の場合に適切に再開できることを確認した。今度はunknown tokenの場合も試してみてるが、うまく動かない。恐らく、途中でエラーが発生した場合の`ParseError`オブジェクトの`resume`を書き換えて、`resume`の中で`arrayPNext`を再開できるように変えれば直せそう
        - 2025/03/19: うまくいかないなぁ。もう一度attoparsecを参考に設計を直した方が良さそう。今は`(r: Result | ParseError) => R`という関数を渡しているけど、attoparecではちょっと違うらしい？
            - 参考: <https://hackage.haskell.org/package/attoparsec-0.14.4/docs/src/Data.Attoparsec.Internal.html#prompt>
            - attoparsecでは入力文字列と最終的な結果を受け取って`IResult`を返す関数を合成している
        - 2025/03/20: 今日はちょっとだけ。新しい設計向けに型注釈を変えただけ
        - 2025/03/21: 今日もちょっとだけ。grammar.tsを新しい設計向けに修正
- 読書など:
    - [Metaprogramming with Python](https://www.packtpub.com/en-us/product/metaprogramming-with-python-9781838554651)
        - 2025/02/22 - 2025/03/21

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/90f55b4063dbe8054dc10676092134a058d658d0/yesterday.md)
