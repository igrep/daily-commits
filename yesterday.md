# 2022/10/10 - 2022/10/16

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] `recursive`
                - 2022/10/10: 少し実装。当初考えていたプランに落とし穴があった。ちょっと修正しないと
                - 2022/10/11 - 2022/10/12: 少し実装。
                - 2022/10/13: 少し実装。あとはエラーメッセージの修正か
                - 2022/10/14:
                    - その前に昨日書いた箇所をリファクタリング
                    - 実装を概ね終えたところで、一つ重大なテストケースを忘れていた。はてどうやって解決したものか...
                - 2022/10/15: 昨日気づいた問題についてのテストを追加
                    - 恐らくこうすればうまく行く解決策
                        - `recursive`外の場合、
                            1. 関数を参照したとき、その関数が外の関数であれば、その外の関数を参照したことをメモ
                                - 未定義であればエラー
                            2. 前のステップでメモした関数と同じidentifierを`const`で定義するとき、エラーにする
                        - `recursive`内の場合、内部の`const`を従来通り当該スコープにおける`RecursiveConst`として扱う？
                - 2022/10/16: 新しい実装方針の実装開始
                - [ ] `transpilingForAssignment`をインライン化して、`let`, `const`では式を`transpile`する前に`EnvF.set(id.v, anUnknown())`しよう。行きすぎた抽象化だった。
            - [ ] 末尾再帰の最適化
                - よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
        - 2022/10/16: `Ord`型クラスの説明: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/a201a1c41ee62ad6ce023534e568733d4825f615>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] cabalファイルのパース
        - 2022/10/10: 型エラーが直った、と思いきや依存関係の解決に急に失敗した？！
            - やっぱり型エラー通ってなかった。急にクラッシュして整合性とれなくなってたのね
            - `fromSolverInstallPlanWithProgress`もインライン化するか`traceM`でも使わないとダメか...
        - 2022/10/11: やっとコンパイル通せた。
        - 2022/10/16: 依存パッケージなどを取り出す処理までできた
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/10/10 - 2022/10/16

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/cf8d9c4f2be16db0335317d752dbe6b8d07b5d6e/yesterday.md)
