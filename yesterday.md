# 2025/02/24 - 2025/03/02

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/02/24: 実際に新しい実装のパーサーをREPLで呼び出す処理を途中まで実装。プロトタイプにして正解だった。いろいろ問題点が見えてくる。やっぱり`Parser`の中で無限ループを回し続ける必要がありそう。後、その上で更に入力が必要なエラーなのかそれ以外のエラーなのか区別するような仕様にした方がいいね
        - 2025/02/25: `ParseError`に、入力が更に必要かどうかの情報を追加
        - 2025/02/26: 多分プロトタイプが概ね出来た。うまくいくかな？
- 読書など:
    - [Metaprogramming with Python](https://www.packtpub.com/en-us/product/metaprogramming-with-python-9781838554651)
        - 2025/02/22 - 2025/02/26

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/10edc8a7acacbea492c70f176496207c547816cf/yesterday.md)
