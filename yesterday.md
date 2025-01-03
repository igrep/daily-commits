# 2024/12/30 - 2025/01/05

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/12/30: lib/base/safe.ts の型エラーをすべて修正できたので他のlib以下のファイルを修正に着手。あと、sg.yamlの間違いも修正
            - 2024/12/31: lib/以下のファイルにast-grepをまとめて適用。残った分は手でやってもいいけど、よく見たらruleを追加すればいけるかも
            - 2025/01/01: lib/以下のファイルの型エラーをすべて直した。残った分はあんまり被ってなかったので手でやった
            - 2025/01/02: @custard/processor の型エラーをすべて直した。次は @custard/test
            - 2025/01/03: 型エラーをすべて直した。テストで分かったバグも直した。次はとりあえずマクロのテストが通せるようにしたいな
のが痛い。- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2025/01/03

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f9eb88cd61c4d011325cda54ab351095888b82ac/yesterday.md)
