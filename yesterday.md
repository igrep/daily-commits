# 2023/12/04 - 2023/12/10

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [ ] 未変換のJSONをリストアップするプログラム（.mdファイルのうち日付が最新のものより、新しい .jsonファイルを探す）
            - [ ] JSONを分割するプログラム
                - [x] バグ: `async.generatorFn`の最後に`async.forEach`を使うとSyntaxErrorに
                    - 2023/12/04: 昨日の続きで、`EnvF.find`の仕様変更に合わせて使用箇所を修正中
                    - 2023/12/05: 修正できたけど、別のバグが見つかった。テストケース作成に着手
                    - 2023/12/06: 昨日見つけたバグを修正
                    - [x] それはそれとして、`export`や`for`、`recursive`などが受け取るFormをチェックするのに`transpile`した結果からとる、という挙動に変えたいなぁ
                        - 2023/12/07: とりあえず`export`でやってみてるけど、既存の無関係なテストがこけるね。`transpileExpressionWithNextCall`の複雑さが高まりそうだし、そこまでパフォーマンスで困ってるわけでもないし、やっぱやめた方がよさそう
                        - 2023/12/08: 一昨日までの修正だけをコミットして昨日の修正は削除
                - [x] バグ: 同じディレクトリーにあるモジュールを`import`しようとしても相対パスにならない
                    - 2023/12/08: 改めて`transpile`してみたら発覚したバグ。またテスト追加してから直さないとね
                    - 2023/12/09: 修正
                - 2023/12/09: ようやくtranspile errorなしに実行できた。ぱっと見出力先のディレクトリーが入力ファイルのあったところではなくカレントディレクトリーになっているのが一つ問題
                - 2023/12/10: 昨日の問題は多分修正できた。でも配列のdestructuringを実装したくなるな...
                - [ ] 配列のdestructuring: `let/const/assign`, `fn`, `forEach`
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/c687498ebed3faebb363831b22b048507b0ea785>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/12/10

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/4f6b59d5296402679798bb73cc6ceaf19e58d0f0/yesterday.md)
