<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

# 2017/01/02

- Idrisのチュートリアル: :star:
- [intellij-haskell](https://github.com/rikvdkleij/intellij-haskell)をWindowsで動かす挑戦。 :star:
    - 引き続き、haddockのバグを追いかけた。結論として、どうも標準エラー出力のエンコーディングがいつの間にかCP932になってしまっていることが原因らしい。`chcp 65001`していようとしていまいとそうなっていた。ほかにも`hGetContents`を実行したときにエラーが起きているケースもあるが、似たようなものだろう。試しにエンコーディングを設定して明日動作確認。
- 筋トレ: :muscle:

# 2017/01/01

- Idrisのチュートリアル: :star:
- [intellij-haskell](https://github.com/rikvdkleij/intellij-haskell)をWindowsで動かす挑戦。 :star:
    - 引き続き、haddockのバグを追いかけた。幸い、stackやcabalを使わずhaddock単体で再現できるケースが見つかったので、stack traceをonにしてひたすら追いかけた。
        - どうやら、haddockで直接起きているわけではなく、[ghcというパッケージのparseModule](https://www.stackage.org/haddock/lts-7.14/ghc-8.0.1/GHC.html#v:parseModule)という関数で起きているらしい。GHC添付のパッケージだからなのか、`stack build --profile`でビルドしてもstack traceに載らないようだ...。
