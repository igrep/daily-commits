# 2024/05/13 - 2024/05/19

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/05/13: テストの修正...の前に`List`クラスと`Symbol`クラスの実装に着手
            - 2024/05/14: `List`や`Symbol`や新しい設計絡みでやることが多い
            - 2024/05/15: テストを新しい仕様に合わせて修正中。`list`, `symbol`だけじゃなくて`keyValues`やpropertyAccess`も要るね
            - 2024/05/16: `keyValues`も作ってテストの移行ができた。次は`propertyAccess`や`quote`含めカバーできていなかったテストを
            - 2024/05/17: ちょっとだけ
            - 2024/05/18: テストが全部できたはず
            - 2024/05/19: また面倒な問題に気づいた。`quote`などで`List`や`Symbol`などを返すJSのコードを生成するとき、そのままでは`List`クラスや`Symbol`クラスにアクセスできないので、どこかにランタイムライブラリー（RTL）への`import`のソースを挟み込めるようにしなくては
                - module.tsのソースを読んだところ、現状`import`はそのまま`import`を出すだけみたいなので、ソース本体とは別に`import`を貯める仕組み（以前そんな感じの作ってたね）を`Env`に加えないと
                - RTL本体は既に`meta`に入っているから、それをそのまま使えればいいのか
                    - ってことは、現状の実装だと自前で`import`しなくても、`meta`をどうqualified importしているかどうかが分かればいいって話なのか
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/43fe6b0a2bc98bd34fe356853a0e0eeb37c4157d>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/05/19

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/63a5a635c4ab6fa896eb6c7a714ab499dabee649/yesterday.md)
