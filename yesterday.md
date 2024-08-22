# 2024/08/19 - 2024/08/25

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/08/19: `transpile.ts`の型エラーを全て修正。折角ASTの型毎にクラスを作ったんだし、それに`transpile`メソッドを追加するのも手かも。次は`base/common.ts`。
            - 2024/08/20: `base/common.ts`の型エラーを全て修正。次は`base/safe.ts`。
            - 2024/08/21: `base/safe.ts`の型エラーを全て修正。次は`base/iteration/unbounded.ts`。
            - 2024/08/22: `base/iteration/unbounded.ts`の型エラーを（今出ている分は）全て修正。次は`internal/env.ts`。
- 読書など:
    - [WebAssembly JS String Builtins](https://github.com/WebAssembly/js-string-builtins)
        - 2024/08/17 - 2024/08/22

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/6245fbc6186b5eb4c3adf2981e2bed418ac1ffe9/yesterday.md)
