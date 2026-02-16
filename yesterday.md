# 2026/02/16 - 2026/02/22

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/02/16: spliceの件を実装し始めたけど、セマンティクス的にこれでいいのかよく分からなくなってきた。普通の`array`における`...`と整合性がとれるか？
            - ってことで今までサポートしてなかったようなのでテストを追加。
            - 色々考えた感じよさそう。そして、arrayなどの中で`...`を使う場合、マクロ呼び出しだろうと何だろうと、そのままtranspileした式を`...`に入れれば（最適ではないが）とりあえず実装はできそう。
                - ということは、arrayの中とそれ以外とで実装が異なることになるねぇ
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/02/16

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/198a54527f46931a23c5493f2598028519615200/yesterday.md)
