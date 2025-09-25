# 2025/09/22 - 2025/09/28

- custard:
    - [ ] Conjureのサポート
        - 2025/09/22: `autoload`が悪さしているという仮説は外れた。`require('conjure.config').filetypes()`の結果側前後で変わっていないのだ。仕組みがよく分からないが、Conjureのドキュメント曰く`require('conjure.config').merge()`ではなく`let g:conjure#filetypes = ['fennel', 'racket', 'custard']`などと書くのが公式な方法らしい。うまく行ったようだ。
            - 次はREPLが起動したのに動いていないように見える問題だね
        - 2025/09/23: ログ機能の仕様検討。`XDG_STATE_HOME`に保存するのが良さそう
        - 2025/09/24: ログ機能のライブラリーを実装。ちょっと凝り過ぎか。
        - 2025/09/25: ログ機能をcli-replで使ってみたが、動いてなさそう？
- 読書など:
    - [型システム入門 プログラミング言語と型の理論](https://www.ohmsha.co.jp/book/9784274069116/)
        - 2025/08/18 - 2025/09/25

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5a33331e309aab9305a0a55e7130f0998814dd24/yesterday.md)
