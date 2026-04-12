# 2026/04/06 - 2026/04/12

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/04/06: 昨日の修正が終わったが、テストの失敗件数は依然として26。
        - 2026/04/07: オブジェクトリテラルの中でのspliceでmacroの結果を処理する件は一旦スキップで！残り24件。
        - 2026/04/08: `annotateArray`のバグ修正。残り16件
        - 2026/04/09: 1件`expandMacro`のバグを修正して残りエラーは10件。一部デグレしたっぽい。難しそう
            - macroの仕様を多かれ少なかれ変えないといけなさそうだ。`Form`を受け取るか`Form`をtranspileしたJSの値を受け取るか。
                - [malのTypeScriptによる実装](https://github.com/kanaka/mal/blob/2bbfaa54cca4908efc90b4173b1406e260788e8a/impls/ts/step8_macros.ts#L194)を読む限り、`Form`を直接受け取っている
        - 2026/04/10: macroの仕様を変えたことでテストの失敗は残り14件。その後4件直して残り10件。残りはテストケース自体の修正でいけそうかな？
        - 2026/04/11: ようやく全てのテストケースを通した！明日は件のアプリで動作確認だ
        - 2026/04/12: うーむ、処理系側のバグかマクロ定義の問題なのかどっちかわからないな。やはりエラーが起きた箇所を表示する機能がないとそろそろ限界か。そもそも、`Unquote must be used inside quasiQuote`というエラーを出すテストケースがないらしい
            - なんとここに来てパーサーのバグではないかという懸念が。と思ってテストケースを書いてみたが、再現しない。
            - `locatedUnquote`が受け取る引数を見る限り、問題なく呼ばれていそうに見える
            - 分かった。`jsValueToForm`関数の実装がおかしい。でもなんでここで`jsValueToForm`が呼ばれるんだろう？
                - 簡単なことだった。`annotate`がmacroに変わったからだった
                    - うーん、そう考えると、macroが結果を返す度に結果の`Form`全体をスキャンするの、効率悪そうだな。`transpile`の中で防御的にやっていくのが理想的なんだろうね
                        - OK。`jsValueToForm`は効率悪い上にバグっているので、なくそう。
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/04/11

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/058d8627ca3bd2d36fc3f0d2c21358486e57b334/yesterday.md)
