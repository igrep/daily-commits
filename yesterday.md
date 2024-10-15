# 2024/10/14 - 2024/10/20

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/10/14: テスト失敗時、`Error.prototype.cause`を表示するようにした
            - 2024/10/15: 当てが外れた。`transpileModule`でも`implicitStatements`はちゃんと実行しているようだ。`initializeForRepl`の中で呼んでいる
                - 一箇所テストの失敗を直せた。`markAsMacro`する関数を定義する`Env`を`module`の`Env`にしているせいだった
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/10/15

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/89b37816de904f28940c78bc86d2f65e20af7a29/yesterday.md)
