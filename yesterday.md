# 2022/10/31 - 2022/11/06

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] `recursive`
                - 2022/10/31: デバッグ開始。どうやら`EnvF.set`しているときの`env[0]`でチェックしている時点では、関数の定義が終了してしまっているので、すでに問題のscopeは`EnvF.pop`されてしまっているようだ
                - 2022/11/01: 修正するために設計の再検討中。どうせいつか必要になるだろうし、どの変数がどこの名前を参照したか全部覚えることにしよう
            - [ ] 末尾再帰の最適化
                - [ ] よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/10/31 - 2022/11/01
- heroku無料プランの件:
    - 2022/11/01: Scrapbookで保存したページを読んでみてる。スタートHaskell 2のところまで読んで問題なさそう

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2052cda7c4b44cfb9ac253b79a41fafbafa6ebe7/yesterday.md)
