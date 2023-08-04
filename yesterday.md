# 2023/07/31 - 2023/08/06

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
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
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Design 2023年8月号](https://gihyo.jp/magazine/SD/archive/2023/202308)
        - 2023/08/03 - 2023/08/04

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c47b2053de1fec52e94fa6d4701109c5964ba5ef/yesterday.md)
