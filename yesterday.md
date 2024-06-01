# 2024/05/27 - 2024/06/02

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/05/27: ちょっとだけ
            - 2024/05/28: `importedModuleJsIds`の仕様がちょっと難しい。必ず`file://`なURLを仕込むべきか、あるいは`npm:`なパッケージを意識して使い分けるべきか
                - `EnvF.findModule`から必要なURLを作る関数があると良さそうだ。ってことで書いた
            - 2024/05/29: これで動くか、と思いきや、昨日作った`modulePathAndUrl`が返すURLが、絶対パスをあらぬところから解決してしまっていて、食い違ってしまうらしい。URLじゃなくて相対パスの方がいいのかな？あるいはsymlinkを解決するとか？
                - どこか、決まった箇所からの相対パスにするのが無難なんだろう
            - 2024/05/30: 折衷案として、`npm:`とか元々フルであろうURLを使う場合はそのまま使い、それ以外は絶対パスにしよう
            - 2024/05/31: 方針の通りにほぼ実装できた模様
            - 2024/06/01: `meta`モジュールがどう`import`されるかを調べる機能はできた。依然としてエラーになるので原因を調べたところ、`findThisModuleAsJsId`の結果を`await`してないからだった。ESLintが検出してくれるはずの問題だけど、どうやらflat configに移してから拾うべきファイルを拾えていないらしい
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/06/01

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/77ebd1e60fe361fb4906ab27f15b0beb2cc4ca4c/yesterday.md)
