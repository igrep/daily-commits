# 2022/10/03 - 2022/10/09

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [x] `forEach`
                - 2022/09/30: テストケース追加
                - 2022/10/01: 一部実装
                - 2022/10/03: `array`が必要なところ以外できた
                - 2022/10/04: `array`のテストケース
                - 2022/10/05: さっと`array`を実装。まだテストがこける
                - 2022/10/06 - 2022/10/07: テスト修正
                    - <https://github.com/igrep/custard/commit/f81bc6540eeb3714a5fa0759638b45a4cba48eb1>
            - [ ] `recursive`
                - 2022/10/08: テストケースの検討から。偶然にも現行の実装上、`const`がすでに再帰呼び出しを認めていないことが分かったので、その性質を利用すれば意外とあっさりできそう。
                - [ ] `transpilingForAssignment`をインライン化して、`let`, `const`では式を`transpile`する前に`EnvF.set(id.v, anUnknown())`しよう。行きすぎた抽象化だった。
            - [ ] 末尾再帰の最適化
                - よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] cabalファイルのパース
        - 2022/10/04: 久々に未定義識別子を埋める遊び
        - 2022/10/05: 未定義識別子がすべて埋まったけど型エラーがたくさん
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/10/03 - 2022/10/08

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/60e05350da6be1a6a2933ad53c4de51d448fb0af/yesterday.md)
