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
    - [ ] テストケースのリファクタリング
    - [ ] ソースコードをsrcに移動してまとめる
- Haskell入門コンテンツ:
    - [ ] 課題15の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/08/15 - 2022/08/18

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2d8f68fb511c36a76233943b6ee81f83db41683e/yesterday.md)
