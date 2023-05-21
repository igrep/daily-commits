# 2023/05/15 - 2023/05/21

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/05/15: まだエラー。今度は処理系のバグか？
                - 2023/05/16: エラーの原因だけ分かった。やっぱり影響範囲の広さとか生成するコードの量とか考えたら、トップレベルの変数を参照する方法は改めた方がいいかもね
                - 2023/05/17: 再現するテストケースを書き始めただけ
                - 2023/05/18: object、というかkey valuesの構文を、もっとJSのそれに近くなるよう見直している。今の中途半端な状態より、arrayもそうした方がいいだろうな
                    - ってことでテストが概ね書けた。不足がないかな？
                - 2023/05/19: Arrayのliteralもついでに作った方がいいことに気づいたのでテストケースや型設計を書いた
                - 2023/05/20: Arrayのliteralやkey valuesのtranspileの修正ができた
                    - objectの構文の解釈で怪しい（validationが不十分な）部分はあるけど
                - 2023/05/21: 昨日までの修正をgit push
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/53dbbb69e57ee33dac79f1b01e3362bc6e14451c>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Speculation in JavaScriptCore](https://webkit.org/blog/10308/speculation-in-javascriptcore/)
        - 2023/04/08 - 2023/05/21

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/94cddbb57580ca28606bf2f0fe726abc711ba196/yesterday.md)
