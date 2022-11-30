# 2022/11/28 - 2022/12/04

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] `recursive`
                - 2022/11/28: やっぱ単体テストはやめ。多分実装できた
                - 2022/11/29: 実装できた！はずが一つだけテストが落ちる
                - 2022/11/30: 原因分かった。`ScopePath`を比較するときの順番が逆なのだ。`push`するんじゃなくて`unshift`しているんだった。references.tsにある`ScopePath`を操作する処理はすべてscoe-path.tsに寄せよう
            - [ ] 末尾再帰の最適化
                - [ ] よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/11/28 - 2022/11/30

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/572a4716abfc451dda6f1612e499a6f188fa4ac1/yesterday.md)
