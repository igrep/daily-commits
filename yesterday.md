# 2024/08/12 - 2024/08/18

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/08/12: `formatErrorKV`を新しい`Form`型の設計に合わせて修正
            - 2024/08/13: `formatErrorEtc`などを新しい`Form`型の設計に合わせて修正。が、まだ謎の型エラーに。
            - 2024/08/14: 昨日の問題は、`Unquote`と`Splice`がstructually equalになっていたため区別ができなくなっていることが原因だった。`Unquote`と`Splice`を区別するためBranded型にした
- 読書など:
    - [canvasのチュートリアル](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial)
        - 2024/08/01 - 2024/08/14

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f8091ec92823e23995558b4d265e4335d9a3c35e/yesterday.md)
