# 2024/05/27 - 2024/06/02

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/05/27: ちょっとだけ
            - 2024/05/28: `importedModuleJsIds`の仕様がちょっと難しい。必ず`file://`なURLを仕込むべきか、あるいは`npm:`なパッケージを意識して使い分けるべきか
                - `EnvF.findModule`から必要なURLを作る関数があると良さそうだ。ってことで書いた
            - 2024/05/29: これで動くか、と思いきや、昨日作った`modulePathAndUrl`が返すURLが、絶対パスをあらぬところから解決してしまっていて、食い違ってしまうらしい。URLじゃなくて相対パスの方がいいのかな？あるいはsymlinkを解決するとか？
                - どこか、決まった箇所からの相対パスにするのが無難なんだろう
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/05/29

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/77ebd1e60fe361fb4906ab27f15b0beb2cc4ca4c/yesterday.md)
