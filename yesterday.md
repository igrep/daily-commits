# 2024/07/08 - 2024/07/14

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/07/08: 設計変更引き続き。`meta.macro`の引数での名前validationなどを実装
            - 2024/07/09: `fn`や`procedure`も名前をつけられるようにするため、テストケースを追加
                - 仕様上考えることが増えるなぁ。特に`recursive`の扱いが難しい。
            - 2024/07/10 - 2024/07/12: ちょっとだけ
            - 2024/07/13: `fn`の仕様を変える変更を引き続き。後は関数の名前を`Env`に`set`するだけなんだけど、`const`などで使っている処理を再利用しないといけないだろうし、面倒くさそう。多分`tryToSet`関数を使うだけでいいんだろうけど、使っている箇所が複雑すぎて本当に正しいのか分からんな...
            - 2024/07/14: 関数の名前を`Env`に`set`する処理も書いた。改めて見て、`tryToSet`で大丈夫そうだったので`tryToSet`にした
- 読書など:
    - [Goのドキュメント](https://go.dev/doc/)
        - 2024/07/06 - 2024/07/14

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/fdb7871192a283f126b3841b4a32435bba80c8bf/yesterday.md)
