# 2025/09/29 - 2025/10/05

- custard:
    - [ ] Conjureのサポート
        - NOTE: `CUSTARD_LOG_LEVEL`の切り替え忘れに注意
        - 2025/09/29: まだ原因分からない。デバッグログを見た感じ、タイミングの問題なんだろうか？が、sleepを入れてみても効果なし。
        - 2025/09/30: 関連しそうな`conjure.remote.stdio`のコードを一通り読んだが、特に問題はなさそう。次に読むべきは`conjure.client`か。
            - `nvim --headless`で動かせば`vim.print`した文字列を標準出力で取れるようなので、それを利用してAI Agentにデバッグを任せてみるのもありかも。今度はConjureのデバッグログが取得できなくなりそうなのが悩ましいが...
        - 2025/10/01: Racketと挙動を比べていたら、Racketの方は`(flush-output)`なる関数を呼んでいることが分かった。うーんでも、そもそもREPLに入力が届いているのか分からない状況だし、関係なさそう
            - 末尾の改行がないからだった！
- 読書など:
    - [型システム入門 プログラミング言語と型の理論](https://www.ohmsha.co.jp/book/9784274069116/)
        - 2025/08/18 - 2025/10/01

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c35ef5df873f7387cbbeb10eba7c2261a5d2ad11/yesterday.md)
