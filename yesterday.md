# 2022/10/17 - 2022/10/23

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] `recursive`
                - 2022/10/17: `EnvF.set`するとき、その関数が当該のscopeより外のスコープで定義済みであれば必ずエラーにするような仕様にしたいけど、現状エラーを無視していることを静的解析で検出できないし、いい加減ルールを作ろうかしら...
                    - <https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-ignored-return.md> がいいらしい。
                    - そういえば今までESLintの設定を全然してなかったので慌てて設定中
                - 2022/10/18: `.eslintrc.cjs`が書けたはず...。が、肝心の`sonarjs/no-ignored-return`が意図したとおりに動いてくれていない...。想定していたのと仕様が違うのだろうか。やっぱり自分でルール書くしかないのかなぁ
                    - <https://github.com/SonarSource/eslint-plugin-sonarjs/issues/279> の報告とかを聞いているとやっぱり私が望んだものではなさそう...
            - [ ] 末尾再帰の最適化
                - よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] cabalファイルのパース
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/10/17 - 2022/10/18

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/923f8b6fba585a2d910d61254248da69d2d29ed0/yesterday.md)
