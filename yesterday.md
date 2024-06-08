# 2024/06/03 - 2024/06/09

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/06/03: 先週の問題は直せた、と思いきやまたいつか見たエラーに
            - 2024/06/04: 一部直せた。残るエラーは、まだJSのSyntax Errorが起こるって問題と、`meta`を参照する際`pseudoTopLevelReference`を使えていないって問題と、何故か今更custardの構文エラーが起きてるって問題
                - 最後の奴は、パースの問題に加えてエラーメッセージもおかしいらしい（取りあえずエラーメッセージだけ直した）
            - 2024/06/05: 昨日出くわした問題を解決するべく、構文上`unquote`を`LiteralObject`に含められるようにした。型エラーがいろんなところに波及して、まだまだ時間かかりそう
            - 2024/06/06: 昨日出くわした型エラーはとりあえず`TranspileError`として返して修正。まあ多分それで正解なんだろう。
            - 2024/06/07: ああー、失敗。`importAnyOf`した場合、`pseudoTopLevelReference`が必要なのは`meta`だけじゃなくて、`meta`の中身もだった。
            - 2024/06/08: 今日はちょっとだけ。`transpileState.mode`と`isAtTopLevel`それぞれの組み合わせで保存するコードを変えなければならず、面倒そうなことが分かった
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/06/08

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/0e3b208202d657ead7995124e393b8036d87b68a/yesterday.md)
