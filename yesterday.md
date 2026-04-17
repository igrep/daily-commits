# 2026/04/13 - 2026/04/19

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/04/13: 昨日気付いた問題を直しているところ。`Macro`や`DirectWriter`に渡す値を`Form`として保証するのが難しそうだねぇ。やっぱりvalidationが必要か
        - 2026/04/14: 思い切って全部`unknown`にしてみてる。結局`Macro`がユーザーコードである以上、その方が実態に合っているだろうし。`DirectWriter`も`unknown`を受け取ることになるが、まあ恐らく問題なく実装できるだろう
            - ってことで`Form`を使っている大半の関数を`unknown`に置き換えてみてる
        - 2026/04/15: 引き続き`Form`から`unknown`への書き換え
        - 2026/04/16: 残りの型エラーは`ExpectNever`しているところだけになった。これくらいの単純な書き換えはAIにやらせた方が良かったなぁ。
            - それはそれとして、いい機会なんで`TranspileError`にエラーコードを入れ始めてみようか
        - 2026/04/17: テスト直し。型エラー潰しで間違えて`return`の仕様を変えてしまっていた。後、エラーメッセージの修正。`ExpectNever`潰しの件はテストをもう少し書いてからにしよう
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/04/17

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/8f2852e799a05ed2991b76f16b65efd6f9652cea/yesterday.md)
