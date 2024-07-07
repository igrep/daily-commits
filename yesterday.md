# 2024/07/01 - 2024/07/07

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/07/01: 簡単にテストを追加
            - 2024/07/02 - 2024/07/03: ちょっとだけ、と言いつつとりあえず動くものはもう直ぐっぽい
                - 多分今のまま作ると、外の変数にアクセスしようとしたときランタイムエラーになるんだよな。本来はできなくて良いはず
            - 2024/07/04: 実装してtscのエラーは全て直したが、テストが通らない
            - 2024/07/05: とりあえず入力のエラーは直したが、テストはまだ通らない。`internal/transpile.ts`のバグっぽい。作成したmacroを呼ぶコードに辿り着かずに普通の関数としてtranspileしているようだ
            - 2024/07/06: 現状の方式だと`meta.macro`を普通の式として`const`でセットしてしまうため、`Macro`としてではなく普通の`Const`として`env`に入れられ、`Macro`の`expand`が呼ばれないようだ。
                - やっぱり、式ではなく直接`Macro`を`env`に入れる方式に変えよう
            - 2024/07/07: 実装方法の修正開始
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/07/05
    - [Goのドキュメント](https://go.dev/doc/)
        - 2024/07/06 - 2024/07/07

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/b0683ad9fd155650ce9256467c673c64adcf9f3e/yesterday.md)
