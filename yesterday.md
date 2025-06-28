# 2025/06/23 - 2025/06/29

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/06/23: Claude Codeにやらすには修正範囲が小さすぎたかもしれないが、Claude Codeが書いたコードを叩き台として直して既存のテストをほぼ完璧に通せた。後はエラーメッセージの処理か。どう直そうかね。既存の呼び出し箇所を特別バージョンとして、それ用のファクトリーメソッドを作るか。WebStormのstructural search and replaceで変えよう
        - 2025/06/24: エラーメッセージを組み立てるヘルパー関数を定義して、既存の箇所で呼び出した。思ったより込み入ってたし、これこそClaude Codeにやらせるべきだったかも
        - 2025/06/25: 既存のテストを通せた。次は新しいテストだ
        - 2025/06/26:
            - Claude Codeに生成してもらった。叩き台として自分で手を加えようかと思ったけど、もうちょっと修正してもらおう。
            - `PromptMdSubmit`（あるいは`PromptMdSubmitSelection`）が、選択したテキストをうまくさばけないらしい
        - 2025/06/27: テストは直してもらえたがまだ落ちる。実装のバグらしい。どのケースで落ちたか分からないし、今度はClaude Codeにparameterized testに変換してもらおう
        - 2025/06/28:
            - parameterized testに変換してみたら、なんと全てのケースで落ちていた
            - また`PromptMdSendSelection`の挙動がおかしい。
- 読書など:
    - [実践TLA+](https://www.shoeisha.co.jp/book/detail/9784798169163)
        - 2025/03/25 - 2025/06/28

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/1ef53f44b46110e669dd462eda26a62cfff039b6/yesterday.md)
