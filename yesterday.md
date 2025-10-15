# 2025/10/13 - 2025/10/19

- custard:
    - [ ] Conjureのサポート
        - NOTE: `CUSTARD_LOG_LEVEL`の切り替え忘れに注意
        - 2025/10/13: タイミング問題であることを確かめるため、custardコマンドの先頭にsleepを挟んでみたりしてる
        - 2025/10/14: 小さなテスト用スクリプトを書いてみたところ、やはりタイミング問題らしいことが分かった。REPLへの入力を遅らせると成功する
            - https://deepwiki.com/search/how-is-the-stdin-readstream-im_5925d77e-a2e5-42b0-9f9f-d228afef760a 曰く`The stdin stream starts in a paused state by default in "old" streams mode, requiring process.stdin.resume() to read from it.`らしいし、その[`resume`を呼んでいるのは`readline.createInterface`](https://github.com/nodejs/node/blob/v23.11.1/lib/internal/readline/interface.js#L341)のようなので、`createInterface`を呼ぶタイミングを早めればいけそう？
                - メモ: <https://deepwiki.com/search/how-is-the-stdin-readstream-im_5925d77e-a2e5-42b0-9f9f-d228afef760a>
        - 2025/10/15: `readline.createInterface`を`custard`コマンドの先頭で呼ぶようにしたり、`stdin.resume()`だけを先頭で呼び出してみたりしたが、却っておかしな挙動になってしまった。
            - やっぱりクライアント側で待つくらいしかないのかも
            - 古いバグだが <https://github.com/nodejs/node/issues/36251> が似たような話？
                - ただ、報告者がやっているように`process.stdin`を参照しただけでは直らず
            - 代わりに<https://nodejs.org/api/repl.html#replstartoptions>`が使えるんだろうか？でもこれも結局`readline`を使ってるっぽい
            - とりあえずNode.jsのバージョンを上げよう... と思いきや、いつも使っていたDebianのリポジトリーはもうないらしい。chnodeとnode-buildで入れた
- 読書など:
    - [型システム入門 プログラミング言語と型の理論](https://www.ohmsha.co.jp/book/9784274069116/)
        - 2025/08/18 - 2025/10/15

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2943439068f5246453724640ccb14b2a46e1dade/yesterday.md)
