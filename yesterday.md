# 2024/09/02 - 2024/09/08

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/09/02: ちょっとだけ。`locatedCuObject`を実装
            - 2024/09/03: `locatedList`など`located**`系の関数を全て実装。Copilotに大分助けてもらえた
            - 2024/09/04: `locatedCuObject`などを使ってreader.test.tsを半分近く修正
            - 2024/09/05 - 2024/09/06: ちょっとだけ
            - 2024/09/07:
                - `locatedUnquote`、`locatedSplice`をそう言えば実装してなかったので実装
                - `reader.test.ts`を新しい仕様に合わせて修正した
                - まだテストが落ちるので見たところ、grammar.tsの間違いだった。多分Copilotが生成した部分の検証漏れだなあ。他のテストの失敗もそうかも
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/09/07

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/fc8ce35f0624630acda11095cd8735b4bcbfb446/yesterday.md)
