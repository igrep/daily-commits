# 2025/09/22 - 2025/09/28

- custard:
    - [ ] Conjureのサポート
        - 2025/09/22: `autoload`が悪さしているという仮説は外れた。`require('conjure.config').filetypes()`の結果側前後で変わっていないのだ。仕組みがよく分からないが、Conjureのドキュメント曰く`require('conjure.config').merge()`ではなく`let g:conjure#filetypes = ['fennel', 'racket', 'custard']`などと書くのが公式な方法らしい。うまく行ったようだ。
            - 次はREPLが起動したのに動いていないように見える問題だね
        - 2025/09/23: ログ機能の仕様検討。`XDG_STATE_HOME`に保存するのが良さそう
        - 2025/09/24: ログ機能のライブラリーを実装。ちょっと凝り過ぎか。
        - 2025/09/25: ログ機能をcli-replで使ってみたが、動いてなさそう？
        - 2025/09/26: 単にログレベルを`info`にしていたからだった...
        - 2025/09/27: REPLがクラッシュしていたが詳細がわからなかったため、ログ機構に例外を記録するようの機能を追加した。でもこれ、stderrをConjureで取れたら見られそうだけど、取れないのかな？パッと見なさそう
            - でも追加したはずのログが出ないなぁ。1つは`~/prg/prj/custard`にいないときにexit code 254で発生したので多分<https://stackoverflow.com/questions/49656445/npm-i-running-command-failed-exit-code-254>と同じ原因なんだろうけど、`~/prg/prj/custard`に移動してもexit code 1で落ちるし例外が記録されない
                - ログ機能実装時にバグらせていただけだった
        - 2025/09/28: ログを見た感じ、Conjureからの入力が一切届いていないようだ。クライアントが正しく送れていないらしい
            - NOTE: `CUSTARD_LOG_LEVEL`の切り替え忘れに注意
- 読書など:
    - [型システム入門 プログラミング言語と型の理論](https://www.ohmsha.co.jp/book/9784274069116/)
        - 2025/08/18 - 2025/09/28

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5a33331e309aab9305a0a55e7130f0998814dd24/yesterday.md)
