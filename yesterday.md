# 2024/04/15 - 2024/04/21

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/04/15 - 2024/04/17: ちょっとずつコミット。完了。
        - [ ] eslint-plugin-no-ignore-returned-unionの更新: `@typescript-eslint/eslint-plugin`の仕様変更に追従
            - 2024/04/18: 久々に更新するべく、とりあえず依存パッケージを更新。
            - 2024/04/19: 直せたっぽいんだけど、テストが妙なエラーで落ちる。`afterAll`を設定せよ、とのことだけど、型情報を見てもそれらしいものが見当たらない
            - 2024/04/20: 直ったはず。が、いざcustardに導入したところでエラーが。.eslintrc.cjsをESMにしないといけないのかな？
            - 2024/04/21: ついでにESLintの設定を新しい形式に移行してみたら、思ったより大変ね
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/3c9d773c08bcee1ad004c7657ce2934ad31495a7>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/04/21

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/6ece6e1bd6fcd7427f0f1d02847523e4e195deff/yesterday.md)
