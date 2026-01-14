# 2026/01/12 - 2026/01/18

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/01/12: 昨日考えたとおり、マクロを呼ぶときはひとまず`Context`を渡さないことにしたことで直るかと思いきや、まだ問題が。マクロに渡す引数の評価規則に問題がありそう
        - 2026/01/13: テストを通せた！明日は動作確認と出来れば`git commit`しよう
        - 2026/01/14: `apps/igrep-cashbook`が古いバージョンを参照してしまっているせいで、うまく動かない。pnpm-workspaceの設定が悪いっぽい
            - で、pnpm-workspaceを直したら、なぜか`eslint-plugin-no-ignore-returned-union`のインストールが出来ない。あれこれ調べてみたら、package.jsonの`name`の末尾に空白が！
- 読書など:
    - [アンダースタンディング コンピュテーション](https://www.oreilly.co.jp/books/9784873116976/)
        - 2025/11/01 - 2026/01/14

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c532e6564aa3b74132a4f93c8b652e7f5170a1d7/yesterday.md)
