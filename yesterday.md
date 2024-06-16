# 2024/06/10 - 2024/06/16

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/06/10: ちょっとだけ
            - 2024/06/11: 今日もちょっとだけ。`module.ts`での修正が終わったはず
            - 2024/06/12: 終わったと思っていたら、設計に大きな問題が見つかったのでまた修正。
            - 2024/06/13: ちょっとだけ
            - 2024/06/14: `module.ts`の修正が終わったが、まだテストは落ちる
            - 2024/06/15: 二つ問題が分かった
                - 一つは、`traverseLiteralObject`の問題。keyの部分を愚直に評価すると`{ _cu$env.transpileState.topLevelValues.get("var"): value }`のようなコードが出てきて、構文エラーになる
                - もう一つは、`ReferTo`の型がまだ要件に合ってない問題。
            - 2024/06/16: ちょっとだけ
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/06/16

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/fa254c62b5b7427587327045b79d36e2afe33795/yesterday.md)
