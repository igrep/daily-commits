# 2025/06/09 - 2025/06/15

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/06/09: Claude Codeに型エラーを一部直してもらった
        - 2025/06/10: 気がつけば自分で一部型エラーを直していた。ついつい余分に手を動かしてしまったけど、まあ休憩感覚でできたのでいいか。Claude Codeのプランを見たらパッと見間違えている箇所だったし。やっぱり自分はNeovimで手を動かすこと自体が好きなんだろうな
        - 2025/06/11: 型エラー修正完了。最後はast-grepに頼った。明日はClaudeも分からなかった無限ループの件だね
        - 2025/06/12: 少しデバッグ
        - 2025/06/13: 昨日考えた方法でバグの修正を試みるが、落とし穴が
            - とりあえず`symbolOrPropertyAccess`の方は直せたけど、`string`については文字列リテラルが半端だった場合の処理を考慮できていないので何とかしよう
        - 2025/06/14: その前に、prompt.md.vimの改善をしようと思ってプロンプトを書こうとしたらprompt.md.vimのバグを見つけたので直していた
- 読書など:
    - [実践TLA+](https://www.shoeisha.co.jp/book/detail/9784798169163)
        - 2025/03/25 - 2025/06/14

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/fb0508e7781153fc1bf0954769d6d5263dd15403/yesterday.md)
