# 2024/10/14 - 2024/10/20

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/10/14: テスト失敗時、`Error.prototype.cause`を表示するようにした
            - 2024/10/15: 当てが外れた。`transpileModule`でも`implicitStatements`はちゃんと実行しているようだ。`initializeForRepl`の中で呼んでいる
                - 一箇所テストの失敗を直せた。`markAsMacro`する関数を定義する`Env`を`module`の`Env`にしているせいだった
            - 2024/10/16: 残りの問題は、以前から懸念していた、macroが`Form`でない、普通の値を返した場合にどういう扱いをするか、という問題っぽい
                - 要はこれは以前考えていた、`Form`に対する`is***`系の関数が生JSの値をサポートしていない問題なので、`MacroBody`が返すことができる値を`any`、とまでは行かずとも、`Form`に変換できる値として処理する必要がある
                    - JavaScriptの仕様上ここは`any`にしなきゃならなそうだね
                    - 参考: <https://zenn.dev/mshaka/articles/8b9d8fdb7a219e>
            - 2024/10/17: どうせ`Object`の内部までバリデーションすることになるし、`expand`した結果を都度全部`Form`に変換するか
                - ってことで変換する関数のテストに着手
            - 2024/10/18 - 2024/10/19: 変換する関数のテストを途中まで書いた
            - 2024/10/20: テスト引き続き。ついまた今すぐ実装しなくても良さそうなケースを考えちゃうね
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/10/20

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/89b37816de904f28940c78bc86d2f65e20af7a29/yesterday.md)
