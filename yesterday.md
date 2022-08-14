# 2022/08/08 - 2022/08/14

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - 2022/08/08:
            - `let`・`const`で現在のスコープのみを探索する処理の実装
            - 最後の文を結果として返せるよう`return`を入れたら出てきたソースがSyntaxErrorに
        - 2022/08/09: 指定したformがexpressionかどうかを見分ける処理が必要らしい。transpile.tsにも同じような処理があるので共通化したくなってしまうな
        - 2022/08/10:
            - `scope`の最後の文で発生した`TranspileError`を正しく処理していなかったのを修正
            - 出力するセミコロンと改行の位置を調整
            - 現時点のテストケースをすべてクリア
                - <https://github.com/igrep/custard/commit/02b81a22f01fdaefff6442d0981764635547b237>
            - 次はStep 4かな？
        - 2022/08/11: `if`などの仕様を考えただけ: <https://github.com/igrep/custard/commit/fba6ec31766ad6eb5a97c84cd93549cefe8f2691>
        - 2022/08/12: `if`... の前に条件演算子を実装: <https://github.com/igrep/custard/commit/e4110b1dd9d1826741c76ee5efe093c03626d080>
        - 2022/08/13: `if`のテストケースを追加。結局三項演算子にするんだから`else`はなくていいことに気づいた。複数の文を書きたいときは`scope`にすればいいし
- Haskell入門コンテンツ:
    - [ ] 課題15の不足箇所を埋める
        - 2022/08/14: 軽めにここまで <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/af15d4de48c365dd702c24b9b57cd1a5f42c623b>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - 2022/08/14: コピペ元として`cabal repl`がcabalファイルをパースするまでの処理を追った
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/08/08 - 2022/08/14

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/ff75446889d824df570d707508d1dd50c186b053/yesterday.md)
