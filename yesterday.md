# 2024/09/23 - 2024/09/29

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/09/23: とりあえずmacroのテストを、`TranspileState`が`repl`の場合でも`module`の場合でも実行できるよう、前から気になっていたテストの統一をするか。ファイルをたくさん移したりしないといけないし、大分大変そうだけど...
            - 2024/09/24: test.tsの修正に着手。REPLの場合とModuleの場合とで`TranspileOptions`を分けないといけないようだ
            - 2024/09/25: test.tsの修正が完了。次は仕様変更に応じて型エラーになってるところを直そう
            - 2024/09/26: 発生していた型エラーを、test.ts側で吸収するよう修正してみたが、moduleのテストでエラーに。よーく考えたらその通りだし、やっぱりmeta.test.tsでやったとおりmoduleのテストはtmp fileに書いてテストするべきみたいね
                - 直した。まだ一部のテストが落ちる。適宜`repl`の場合のみテストした方がいいケースとかだろう
                - 流石に実行が大分遅くなってしまった
            - 2024/09/27: `module`の場合に落ちるテストを一部修正
            - 2024/09/28: 想定外だったなあ。`const name = function anotherName() {}`みたいなコードでも`anotherName`という名前の変数は作られない、と
                - ってことは式として`fn`を使っているか宣言として使っているかで挙動を変えないといけないのか。難しいなあ
                - `test.fails`を使ってスキップさせることに。これで後はmeta.test.tsの修正だけ
            - 2024/09/29: `meta.evaluate`と`meta.readString`のテストについてはひとまず`test.fails`でスキップ。とりあえず`TranspileError`を出すことにするのが良さそうだけど
                - あと、よく見たら`import`のテストも落ちてるのね
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/09/29

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/b5f7c393b5fffdd3992146ad56248e4b61f94c26/yesterday.md)
