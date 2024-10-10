# 2024/10/07 - 2024/10/13

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/10/07: メモリー消費量が少なそうな方法とか先週までに色々考えたけど、やっぱりもっとシンプルな方法でよくないか？どうしても変更料めっちゃ増えちゃうし...。ってことで、概ね当初の設計に戻すような感じに
                - 後は入力の`Block`をどうやって`transpileExpression`で見えるようにするか: 冷静に考えたら`TranspileState`のmoduleはpublicなAPIでは隠蔽されているんだから、entry pointである`transpileModule`関数で作ってしまえばいいんだ
            - 2024/10/08: 昨日まで考えた設計に従って実装着手。
                - はて、`evalBlock`を微妙に変えたバージョンが欲しいわけだけど、依存しようと思うと循環依存になってしまうなまあコピペでいいかな、と思ったけど十分な被り方なのでちゃんと切り出そう
                - 現在評価している`Form`が何番目かの情報も必要だ。どうしたものか。
                    - `TranspileState`に書けば？とも思ったけど、あんまり破壊的な変更に依存するのもあれだし、引数に追加しちゃおうか
            - 2024/10/09: 昨日までの設計だと、`Env`を共有するような形になるし、それだと`repl`で評価するとき名前が衝突してしまうな。どのような形であれ名前の衝突に配慮する必要はあるし、いっそ`repl`用の`Env`を別に作ろう
            - 2024/10/10: `repl`用の`Env`を作って後は実装！というところで大きな問題に気づいた。macroの呼び出しやmacro呼び出し前にコードを`repl`で評価する際、`TranspileError`でない、任意の`Error`のことを考慮しなければならないため、`TranspileError`で`Error`をラップする必要がありそうだ
                - 幸い、今の`Error`クラスには`cause`というオプションがあるのでいけそう。
                    - と、思いきや、TypeScriptがその引数を認識していないらしい？
                        - そして、TypeScriptが認知してないってことは現状だとprocessorパッケージのコード生成がされないってことか...
                            - ES2022かららしい。思いのほか新しい。<https://zenn.dev/pixiv/articles/bb123b2f50cdab>
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/10/10

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5d95cbe9ab769eb795a51a48a2e9b58b8880f38c/yesterday.md)
