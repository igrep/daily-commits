# 2024/04/08 - 2024/04/14

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/04/08: git commitより先にcommandパッケージの修正が必要だったので修正。試せてはいない
            - 2024/04/09: commandパッケージ、上手く動かんなぁ。なんかいつの間にか`@custard-lang/processor`を解決できなくなってる...、ってことで`npm i`してみたら今度は依存関係のconflictだと...？
            - 2024/04/10: 依存関係の解決ができん！めんどくさ！
            - 2024/04/11: package-lock.jsonを消したらできた。で、また`npm run custard repl`を試してみたけど、やっぱ`@custard-lang/processor`を`import`できない。逆になんで前はできてたんだ？
                - どうも一旦`command`ディレクトリーに移動しないとダメな状況らしい。前はできてたと思うのにな...
                    - ごちゃごちゃやってもう一度`npm i`して`npm run custard repl`したらできた。もういやじゃ...
                        - 次に`npm run custard transpile`してみたら、なんか動いてないっぽい？
            - 2024/04/12: `npm run custard transpile`にデバッグコードを入れてみたら、なぜか`globIterate`が空っぽを返すようだ
                - `glob`の仕様が変わって、バックスラッシュをデフォルトでパス区切りと認識しなくなったらしい（あるいは、実は更新前からそうだったけど私が気づいてなかったか）。どうしたものか...。自前でエスケープする？
                    - [mochaがやっている](https://github.com/mochajs/mocha/blob/e263c7a722b8c2fcbe83596836653896a9e0258b/lib/cli/lookup-files.js#L78)ように、普通に`windowsPathsNoEscape`を`true`にした方がよさそう。別に絶対escapeできなくなるワケじゃないみたいだし...
                        - ってことで`windowsPathsNoEscape`を有効にした上で`transpile`してみたら、早速エラー。どうやら、npmに上がっている古いバージョンと今開発中のバージョンが混ざってしまっているらしい。開発中のバージョンで実行するには切り替えないといけない、と。こうなるのは予想はしてたけど、つらいなぁ
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/04/12

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/4dc1681f34baea06e76cf580aa9d1ad7b0f5f757/yesterday.md)
