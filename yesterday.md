# 2024/07/29 - 2024/08/04

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/07/29: `functionPrelude`の問題を一部修正。まだ`procedure`でテストが失敗する
            - 2024/07/30: `procedure`の問題の原因はシンプルだった。`functionPrelude`の仕様変更に一部追従できていなかった。今度こそ`meta.macro`を直そう
            - 2024/07/31: 昨晩寝る頃になって原稿の実装では不十分な点に気づいたので直す方法を考えてそれをメモした
            - 2024/08/01: Macroとして生成した関数を呼ぶことはできたようだけど、返す型が`transpileExpression`が要求する`Form`型ではないのでエラーに。確か`Form`は普通のオブジェクトで、場所の情報とかも入れやすいからってことでそうしてたんだよなぁ。`unquote`した型の値に場所の情報を入れるのは難しそうだだし。どうしたものか
                - やっぱり`Form`も特殊なclassにしないといけなさそうね。`Number`クラスとか`String`クラスを継承するのは有効な手段らしい
- 読書など:
    - [jotaiのドキュメント](https://jotai.org)
        - 2024/07/15 - 2024/07/31
    - [canvasのチュートリアル](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial)
        - 2024/08/01

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/79fce6eb98849e1c4692ade742cc7583592ad1f0/yesterday.md)
