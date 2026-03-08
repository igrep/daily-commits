# 2026/03/02 - 2026/03/08

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - メモ: <https://github.com/igrep/daily-commits/blob/c8f22c5741db84de73d6a1789d850aa47658448a/yesterday.md>
        - 2026/03/02 - 2026/03/04: objectのdestructuring assignmentのバグ修正。終わった模様。またエラい脱線してしまったが、ようやくマクロが返した結果のspliceに取り組めるな。
        - 2026/03/05: コミットしてlintのエラーを直すだけで終わり
        - 2026/03/06: 該当箇所を読んで復習。spliceをflatにするのを何段階もやるべきか。まあ後回しにしよう
        - 2026/03/07: transpileの再設計にチャレンジしてみてるが、あまり進まず。ボトムアップにやるよりトップダウンに進めた方が良さそう
            - `transpileBlockCore`からか。
            - それ以外だと、新たにリストや配列を評価する箇所以外では`processSplices`する必要はなさそう
        - 2026/03/08: `transpileStatementsSplicing`から始めた
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/03/08

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/d82ae06fc78c4ad36a049141751c0b2c93b5175e/yesterday.md)
