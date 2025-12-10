# 2025/12/08 - 2025/12/14

- custard:
    - [ ] Tampermonkeyのスクリプト作成1
        - 2025/12/08: 出来たと思いきやcustardのバグに気付く。`if`式の中でのstatementの扱いについての考慮が不十分だったようだ。従来は全部禁止するつもりだったけど、この際認めるような実装に出来ないだろうか。`isStatement`でstatementかどうか判定する処理を`_cu$if`の中で行っていないらしい。`_cu$const`・`_cu$let`はちゃんとstatementとして指定されていた
        - 2025/12/09: `if`式の改修に着手。本当はCustardの`scope`を直接呼び出すことで実装したかったけど、まあセルフホスティングは当面先にすることにしたし、どちらにしても難しそう
        - 2025/12/10: `if`式のstatement対応引き続き。残りはAIにやってもらおう
- 読書など:
    - [アンダースタンディング コンピュテーション](https://www.oreilly.co.jp/books/9784873116976/)
        - 2025/11/01 - 2025/12/10

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2c25c7da2ec05e20ceb69797cca0208e7397bc87/yesterday.md)
