# 2025/11/03 - 2025/11/09

- custard:
    - [x] Conjureのサポート
        - NOTE: `CUSTARD_LOG_LEVEL`の切り替え忘れに注意
        - 2025/11/03: 何故か知らんが`ConjureEval`などを実行したときに出るべき`vim.print`の出力が、`--headless`だと出てこない。何故！？やっぱりAIに頼れないなぁ
            - 止むなく手でデバッグしたところ、次のメッセージが出てこない要因は、[この行](https://github.com/Olical/conjure/blob/dab027e0cb710beb070424a117b9065279f6083d/fnl/conjure/remote/stdio.fnl#L71)の時点で`repl.current`に前のメッセージが入ったままになっているからだった
            - 更に掘ってみた感じ、やっぱり`prompt-pattern`の設定ミスっぽい => 動いた！
            - 後はしばらくvim-sexpとConjureの練習を両方やって完了ってことにしよう
        - 2025/11/04: <https://gist.github.com/cszentkiralyi/a9a4e78dc746e29e0cc8> の「Splicing」節までのコマンドを概ね一度は試した
        - 2025/11/05: 書いてあるのは概ね触った。次はConjureのキーを触ろう
        - 2025/11/06: Conjureのキーはとりあえず`\ee`と`e!`と`\E`、`\lv`・`\ls`辺りを覚えておくと良さそう
            - そう言えば昨日気付いた、なぜか`text`が定義されないものとして扱われる問題、今日試した限り再現しない
            - 明日からはTampermonkeyのスクリプトか、立替を少し楽にするアプリケーション作りにチャレンジしよう
                - その前に、`@custard-lang/processor`とか`@custard-lang/comamnd`をnpmに上げるか。今後アプリを開発しながら処理系に手を入れる運用が難しそう
        - 2025/11/07: npmに上げた
- 読書など:
    - [アンダースタンディング コンピュテーション](https://www.oreilly.co.jp/books/9784873116976/)
        - 2025/11/01 - 2025/11/07

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/801563ee8ea0047ee16c416d376ae8c8dfd48e80/yesterday.md)
