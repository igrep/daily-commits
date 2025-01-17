# 2025/01/13 - 2025/01/19

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2025/01/13: もうちょっとってところだろうけど、`currentBlockIndex`と`evaluatedUpTo`の数え方がおかしい。
                - 入力した`Block`のindexになっている。実際には書き出している`Ktvals`のindexになるべき。`currentBlockIndex`って名前がそもそもおかしいのだ
            - 2025/01/14: `transpileBlockCore`の設計を改めている。`currentBlockIndex`はそもそも要らないっぽいな
            - 2025/01/15: 結果をを返す用の最後の`Ktvals`とそれ以前の`Ktvals`を分ける方法はどうしても必要なので、そのための内部設計を考えている
                - `transpileBlockCore`で、結果を表す`Ktvals`までのoffsetを返せばよさそうだ
            - 2025/01/16: `transpileBlockCore`が`Ktvals`のoffsetを返すよう修正。
                - 現行の方法だと、今正に`transpileExpression`している`Ktvals`の長さがカウントされないのでは？それでいいのか？まあ試してから考えるか
            - 2025/01/17: `meta.macro`のテストケースがようやく一部通った！ついでに他のテストをすべて実行してみたところ、なんか無限ループになる。vitestが繰り返しテストを再実行しているらしい。詳しい理由は分からないが、出力したコードに構文エラーがあるのでそれを直せばいけるかな？構文エラーがRollupのレベルで起きていることからしても怪しい
                - あと、一部の生成したコードを実行し損ねてエラーになっている箇所もたくさん
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2025/01/17

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/85807aada5ec06df2bed9998d2c747c68b1b394e/yesterday.md)
