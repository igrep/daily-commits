# 2025/11/03 - 2025/11/09

- custard:
    - [ ] Conjureのサポート
        - NOTE: `CUSTARD_LOG_LEVEL`の切り替え忘れに注意
        - 2025/11/03: 何故か知らんが`ConjureEval`などを実行したときに出るべき`vim.print`の出力が、`--headless`だと出てこない。何故！？やっぱりAIに頼れないなぁ
            - 止むなく手でデバッグしたところ、次のメッセージが出てこない要因は、[この行](https://github.com/Olical/conjure/blob/dab027e0cb710beb070424a117b9065279f6083d/fnl/conjure/remote/stdio.fnl#L71)の時点で`repl.current`に前のメッセージが入ったままになっているからだった
            - 更に掘ってみた感じ、やっぱり`prompt-pattern`の設定ミスっぽい => 動いた！
            - 後はしばらくvim-sexpとConjureの練習を両方やって完了ってことにしよう
        - 2025/11/04:
            - <https://gist.github.com/cszentkiralyi/a9a4e78dc746e29e0cc8> の「Splicing」節までのコマンドを概ね一度は試した
- 読書など:
    - [アンダースタンディング コンピュテーション](https://www.oreilly.co.jp/books/9784873116976/)
        - 2025/11/01 - 2025/11/04

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/801563ee8ea0047ee16c416d376ae8c8dfd48e80/yesterday.md)
