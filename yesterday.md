# 2025/03/10 - 2025/03/16

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/03/10: 継続渡し作戦、パーサー本体以外はできたっぽい。attoparsecの`Partial`の実装を見るに、`ParseError`の`resume`までCPSにするのはやり過ぎなのかも
        - 2025/03/11: 昨日ハマっていた、`ParseErrorSkipping`等に渡した関数の型が合わない問題を修正できた
        - 2025/03/12: 今日はちょっとだけ。やっぱ`arrayP`の実装が難しいなぁ。内部の関数の中で要素を貯めていって最終的に吐き出す、みたいな方法がよさそう？
        - 2025/03/13: とりあえず型チェックは通したけど合ってるか...？
- 読書など:
    - [Metaprogramming with Python](https://www.packtpub.com/en-us/product/metaprogramming-with-python-9781838554651)
        - 2025/02/22 - 2025/03/13

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/34ac4245c401a1c859ed8a36436a947f9e6cd75a/yesterday.md)
