# 2025/03/31 - 2025/04/06

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/03/31: バグの原因はさておき、`undefined`が返ってくる原因を知りたい。真っ先にscannerを疑ったが、そうではなさそう？
            - なんてことない理由だった。`ParseError`が返ってきていてその`value`に`toJsValue`でアクセスしてたからだった
            - 昨日予想したとおりやってみたら直った。結局、エラーハンドリングをどこでも考えないといけないのが辛いね
                - 明日はあれだ、不正なトークンとEOFを両方挟んだケースのテストを書こう
- 読書など:
    - [実践TLA+](https://www.shoeisha.co.jp/book/detail/9784798169163)
        - 2025/03/25 - 2025/03/31

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/428d0f29d8fdff46ee43c589bb4b565131649a16/yesterday.md)
