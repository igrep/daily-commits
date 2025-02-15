# 2025/02/10 - 2025/02/16

- custard:
    - [x] `lib/**/common.ts`は`lib/internal.ts`にrename
        - 2025/02/10: 完了
    - [x] npm-check-updates
        - 2025/02/10: ESLintの更新は乗り切ったが、commanderパッケージの仕様変更でsplit.test.tsのテストが落ちてしまった。テスト対象のコードは全く使ってないのに、なんやかんやsplit.test.tsが役に立っているな...
            - Ref. <https://github.com/tj/commander.js/blob/master/CHANGELOG.md#1300-2024-12-30>
        - 2025/02/11: commanderの仕様変更に追従。まだESLintの設定で手こずりそう。推奨するデフォルトが変わったせいか、`Unused eslint-disable directive`で怒られる
        - 2025/02/12: 勢い余って全てのESLintの問題を解決した。結構な量だったのに
    - [ ] replで複数行を扱えるように
        - 2025/02/12: 明日はこれのテストを追加するところからか
        - 2025/02/13: テストコードの分類を変えただけ。当初考えてたよりはやっぱ難しそう
            - closingに相当するtokenをqueueに積むような実装がいいっぽい？
                - いや、generatorでやれば簡単にできるっぽいな。`next`メソッドで`yield`が返す値を設定できるらしいし
        - 2025/02/14: generatorでの実装に備えてちょっとだけ進めた
        - 2025/02/15: 最小限のテストケース追加
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2025/02/15

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/36905fcb338eb78fe5650cb3c5e54ab9484c3da2/yesterday.md)
