# 2024/11/25 - 2024/12/01

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/11/25: transpile/module.ts の `_cu$import` の型エラーを修正
                - と思ったけど`import * as id`のケースに対応できてないな。`Ktval`にもう1種類追加する必要があるのか。追加した
            - 2024/11/26: transpile/module.ts の `_cu$import` と `importAnyOf` の型エラーを修正
            - 2024/11/27: `export`用の`Ktval`も要るねぇ。ってことで追加して、transpile/module.ts の型エラーを全て修正
            - 2024/11/28: `lib/meta.ts`などの型エラーを修正
                - `lib/base/common.ts`を見た感じ、どうやらもう何種類か`Ktval`が必要な気がする。`functionPostlude`の一部だ
                    - できた
                - `KtvalAssign`ももうちょっと工夫して、destructuring assignmentに対応させたほうが良さそう
                    - これもできた
            - 2024/11/29: `KtvalAssign`の構成を再度見直そう。今のままでも出来なくはないが、同じような判定を何度もさせるのも馬鹿馬鹿しいし。随分複雑になってしまった。
            - 2024/11/30: `KtvalAssign`の構成を見直し、ようやく`transpilingForVariableDeclaration`の型エラーを修正できた
            - 2024/12/01:
                - `lib/base/common.ts`の型エラーを全て修正
                - `lib/base/safe.ts`の型エラーの修正に着手。semgrep使って一気に出来ないかな。
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/12/01

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f5b7c31a05fd43230f92cb25541066e6c2a8429f/yesterday.md)
