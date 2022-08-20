# 2022/08/15 - 2022/08/21

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - 2022/08/15: `if`の実装をしゅっと
        - 2022/08/16: `None`と一貫させるために`true`や`false`じゃなくて`True`や`False`にしてたのね...
            - <https://github.com/igrep/custard/commit/b4a76cda5c7d8c37ee961646b41ca62979e5be67>
        - 2022/08/17: `fn`のテストケースを追加。そろそろテストケースのリファクタリングしたいなぁ
            - 関数を表す式を直接呼び出すのはちょっと難しいかなぁ。symが関数呼び出しだったらそのままtranspileしちゃう、という方向で！
        - 2022/08/18:
            - 関数を表す式を直接呼び出せるよう修正途中まで
            - `fn`の実装を途中まで
        - 2022/08/19:
            - `fn`の実装ができたはず
            - 関数呼び出しのtranspileも概ねできたはず
            - あとは、引数が空の場合、不正な（`CuSymbol`じゃない）場合、他のスコープで参照している変数は参照できない、外の変数は参照できる、最後のformはexpressionじゃないといけない、など異常系のテストかなぁ
        - 2022/08/20: 昨日までのコードのコミット
            - <https://github.com/igrep/custard/commit/cfcfcae766b9b3df2d5e2c07a6926db913754cce>
    - [ ] テストケースのリファクタリング
    - [x] ソースコードをsrcに移動してまとめる
        - <https://github.com/igrep/custard/commit/6c12b67ed8ada8190bf36fd9d82f7a6f1055e9f1>
- Haskell入門コンテンツ:
    - [ ] 課題15の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/08/15 - 2022/08/20

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2d8f68fb511c36a76233943b6ee81f83db41683e/yesterday.md)
