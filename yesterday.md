# 2022/10/10 - 2022/10/16

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] `recursive`
                - 2022/10/10: 少し実装。当初考えていたプランに落とし穴があった。ちょっと修正しないと
                - 2022/10/11: 少し実装。
                - [ ] `transpilingForAssignment`をインライン化して、`let`, `const`では式を`transpile`する前に`EnvF.set(id.v, anUnknown())`しよう。行きすぎた抽象化だった。
            - [ ] 末尾再帰の最適化
                - よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] cabalファイルのパース
        - 2022/10/10: 型エラーが直った、と思いきや依存関係の解決に急に失敗した？！
            - やっぱり型エラー通ってなかった。急にクラッシュして整合性とれなくなってたのね
            - `fromSolverInstallPlanWithProgress`もインライン化するか`traceM`でも使わないとダメか...
        - 2022/10/11: やっとコンパイル通せた。
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/10/10

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/cf8d9c4f2be16db0335317d752dbe6b8d07b5d6e/yesterday.md)
