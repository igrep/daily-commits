# 2025/09/29 - 2025/10/05

- custard:
    - [ ] Conjureのサポート
        - NOTE: `CUSTARD_LOG_LEVEL`の切り替え忘れに注意
        - 2025/09/29: まだ原因分からない。デバッグログを見た感じ、タイミングの問題なんだろうか？が、sleepを入れてみても効果なし。
        - 2025/09/30: 関連しそうな`conjure.remote.stdio`のコードを一通り読んだが、特に問題はなさそう。次に読むべきは`conjure.client`か。
            - `nvim --headless`で動かせば`vim.print`した文字列を標準出力で取れるようなので、それを利用してAI Agentにデバッグを任せてみるのもありかも。今度はConjureのデバッグログが取得できなくなりそうなのが悩ましいが...
        - 2025/10/01: Racketと挙動を比べていたら、Racketの方は`(flush-output)`なる関数を呼んでいることが分かった。うーんでも、そもそもREPLに入力が届いているのか分からない状況だし、関係なさそう
            - 末尾の改行がないからだった！
        - 2025/10/02: ダメだった。何故？昨日はうまく行ってたのに。Conjure側のデバッグコードを消したからなのか？
            - デバッグログをRacketの場合と見比べた感じ、一番最初の`stdin.write`以降`repl.send`に送ったメッセージの送信が実行されていないように見える。となるとクライアント側の問題か？
            - とりあえず、今日消してしまった`vim.print`を復活させてみるか
        - 2025/10/03: `vim.print`を<https://github.com/Olical/conjure/blob/d450b6508fd63c9b0601a229e75225774228fd2b/lua/conjure/remote/stdio.lua#L83>に挟むと最初の`:load`は届くようになった。
            - 届いていないというのは、Custard側が入力を受け付ける前に送信されてしまうから、なんだろうか。どうすれ違っているんだろう。
                - 時刻を録って確かめられないかと思ったが、Luaの`os.date`は秒までしか出ないので無理そう。
            - custard/stdio.fnlで`vim.print`しても直らないか...
- 読書など:
    - [型システム入門 プログラミング言語と型の理論](https://www.ohmsha.co.jp/book/9784274069116/)
        - 2025/08/18 - 2025/10/05

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c35ef5df873f7387cbbeb10eba7c2261a5d2ad11/yesterday.md)
