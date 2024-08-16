# 2024/08/12 - 2024/08/18

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/08/12: `formatErrorKV`を新しい`Form`型の設計に合わせて修正
            - 2024/08/13: `formatErrorEtc`などを新しい`Form`型の設計に合わせて修正。が、まだ謎の型エラーに。
            - 2024/08/14: 昨日の問題は、`Unquote`と`Splice`がstructually equalになっていたため区別ができなくなっていることが原因だった。`Unquote`と`Splice`を区別するためBranded型にした
            - 2024/08/15:
                - 昨日でinternal/types.tsの修正が終わったので他のファイルの修正着手
                - 後、`Unquote`と`Splice`について、Branded型にするためにフィールドを増やすのが嫌だったのでフィールドを増やさない方法に書き換えた。面倒くさい！
            - 2024/08/16: `grammar.ts`を新しい設計に合わせて修正中。あと`CuObject`の箇所だけなんだけど、果てどうしよう。従来の設計では`CuObject`は`KeyValue`だけじゃなくて`Unquote`も持てるようになってるし、それもちゃんとサポートすべきよね...
                - 多分、素直に従来の設計に近い形に直すべきだろう。ただ従来の設計だと`{ $key }`はできても`{ $key: value }`ができないのでそこも合わせて直そう
- 読書など:
    - [canvasのチュートリアル](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial)
        - 2024/08/01 - 2024/08/16

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f8091ec92823e23995558b4d265e4335d9a3c35e/yesterday.md)
