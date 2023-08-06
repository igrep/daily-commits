# 2023/07/31 - 2023/08/06

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [x] Step 6
            - [x] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/07/31:
                    - コマンドラインで実行してみたら、viteとtranspileしたファイルでの`import.meta.url`の違いでバグっていたので直した。この辺分岐させるのめんどい
                    - `standardModuleRoot`をエクスポートしそびれていたり、モジュール周りのバグを修正
                - 2023/08/01:
                    - `implicitStatements`で`import`したものについて、REPLで参照する場合、top levelにするものとtop levelより上にするものを分けなければならないらしい。難しいね
                - 2023/08/02: そもそもtop levelが二つあることがおかしいのではないか。top levelでかつ普通の変数だけ`pseudoToplevel`として扱うべきなのでは
                    - その場合、`jsTopLevels`から来る`const`を別の種類として扱う必要がある模様
                - 2023/08/03:
                    - 「普通の変数」とは`Var`, `Const`, `RecursiveConst`, `Namespace`が該当するらしい
                    - 新しく`OrdinaryVariable`いう`Writer`の分類と、`ProvidedConst`という`Writer`を追加
                - 2023/08/04:
                    - テストのデグレを直して改めてcli-transpileを実行してみたら、まだエラーが
                    - 一つは単純な問題で、`await`忘れだった。しかし`await`を消してみたら、今度は実行が進まなくなってしまった。特にCPUは使用していないので、Promiseの扱いを間違えたのだろうか
                - 2023/08/05:
                    - デバッグコードを置いてみた所、どうやら最後まで動いてはいるけど終了しなくなっているようだ。恐らく、workerを終了させていないからだと思われる
                        - JSConf.jpのSlackで質問したらすぐ回答頂いて直せた！
                        - 後は、出力先のパスがおかしい問題を直してstep 6は終わりにしよう
                    - そして、今更だけど`import`とData URI使えばそもそもworker要らないんじゃないかって気がしてきた...。あと、`import.meta.resolve`ってやつを使えばもっと簡潔に書けそう？
                - 2023/08/06:
                    - ここまでの修正をコミット。
                    - `import.meta.resolve`はなんかTypeScriptもよくわからない型を出してきたりするし、止めておこう
                    - viteのせいなのか何かよう分からんけど、dynamic importするファイルが2回ロードされてしまっているのか、`IsWriterKey`が同一視されないみたいで、エラーになってしまう...
                        - 今後（あるいは今？）`import`を使わずにモジュールの中身を調べるよう修正することも考えたら、パーサーのことを調べつつ別の方法を考えた方がよさそう
                            - とりあえず、`Symbol`を使うのを諦めることで解決
                    - 後は`fn`のエラーだけなんだけど、なぜか`src instanceof TranspileError`が`true`になるべきところでならない現象にぶち当たってしまった
                        - `fn`のテストだけでなく、至る所で同じ現象が起きている模様
                            - 直した
                    - もう全て終わらせたい、ってことで、`Repl`や`worker`を消すのにtryしてみたら、設計のまずい所でハマってしまった。今からそこもきれいにしちゃうか...？
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - 2023/08/05: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/472fd02c90d54f32f6d3ebf39cd51eae3532199e>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Design 2023年8月号](https://gihyo.jp/magazine/SD/archive/2023/202308)
        - 2023/08/03 - 2023/08/06

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c47b2053de1fec52e94fa6d4701109c5964ba5ef/yesterday.md)
