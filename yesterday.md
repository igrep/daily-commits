# 2022/12/05 - 2022/12/11

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [x] `recursive`
                - 2022/12/05:
                    - 難しいと思っていた箇所は昨晩ベッドの中で修正方法に気づけて、直せた。残りは無理に直さない方がシンプルでいいかもなぁ
                - 2022/12/06: 分からんので変数が見つからないときのエラーメッセージは全部`NOTE`を加えよう
                    - と言うわけで1ヶ月以上ぶりにコミット: <https://github.com/igrep/custard/commit/7fa5cc8618b7a51b1a5e6d4a51c91c126969c1ac>
            - [ ] formatter周りの整備・lintの修正
                - 2022/12/07: Lintのエラーの扱いが悩ましい... と思っていたら、本当に間違っている箇所があった。修正
                    - <https://github.com/igrep/custard/commit/3819c3c32f1523c50e84c31f9538bc3393d18786>
                - [ ] eslint-plugin-no-ignore-returned-union のリリース
                - [ ] gitのhookでformat
            - [ ] 末尾再帰の最適化
                - [ ] よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/12/05 - 2022/12/07

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/72f999ce99e03a03d4b6af83cccaafdb84b52a45/yesterday.md)
