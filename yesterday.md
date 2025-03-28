# 2025/03/24 - 2025/03/30

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/03/24:
            - cli.mtsを試した感じ、まだ動かない
            - テストを一部修正
        - 2025/03/25: テストを修正したらあっさり通った！でもなんでcli.mtsだと動かないんだろう
            - いや、やっぱcli.mtsも動いてるっぽい。一部挙動がおかしいけど
        - 2025/03/26: 新たに失敗するテストケースを追加。scannerを改善すれば通る
            - EOFに位置情報を付ける件と一緒にやって、`null`だと何にもマッチしなかったって意味にして`UNKNOWN`を消そう
        - 2025/03/27 - 2025/03/28: 26日に考えた修正を途中まで
- 読書など:
    - [Metaprogramming with Python](https://www.packtpub.com/en-us/product/metaprogramming-with-python-9781838554651)
        - 2025/02/22 - 2025/03/24
    - [実践TLA+](https://www.shoeisha.co.jp/book/detail/9784798169163)
        - 2025/03/25 - 2025/03/28

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/90dde616372ae1bc9cb14d86b345b87cb7e30c37/yesterday.md)
