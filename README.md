<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

# 2017/01/21

- [Category Theory (Oxford Logic Guides)](https://people.mpi-sws.org/~dreyer/courses/catlogic/awodey.pdf): :star:
- ファイルの重複を見つけるツール: :star:
    - プロファイルをとって、ボトルネックを確認した。
        - 意外にもZipperとして使っているSeqを読む処理が、全体の18%も占めていることがわかってびっくり。fumievalさんいわくSeqは扱いが難しいらしく、リストの便利なバージョンとして使うには向かないらしい。
        - あと、案の定Rose Treeの子ノードとして使っているリストの処理に時間がかかっていた。
            - これもfumievalさんに聞いたことだが、「Cofree」がRose Treeの子ノードの部分を抽象化したものになっているので、使うといいかもしれない。
        - それから、lens-familyが内部で実行しているfmapにもなぜか時間がかかっている。lens使いたくなくてlens-familyにしたけどやっぱりあまり高速な実装ではないらしい...。
            - やっぱりおいおいlensに切り替えよう。

# 2017/01/20

- [Category Theory (Oxford Logic Guides)](https://people.mpi-sws.org/~dreyer/courses/catlogic/awodey.pdf): :star:
- 筋トレ: :muscle:
- その他、[Qiitaに記事公開](http://qiita.com/igrep/items/f2e927a31e826766b8c0)

# 2017/01/16 - 2017/01/19

- [Category Theory (Oxford Logic Guides)](https://people.mpi-sws.org/~dreyer/courses/catlogic/awodey.pdf): :star:
- ソースパッケージからPDFを作るツール :star:

# 2017/01/15

- [Category Theory (Oxford Logic Guides)](https://people.mpi-sws.org/~dreyer/courses/catlogic/awodey.pdf): :star:
- ソースパッケージからPDFを作るツール :star:
- ファイルの重複を見つけるツール: :star:
    - ようやく、ランタイムエラーを起こさずに中間データを作れるよう実装できた。しかし実行速度が非常に遅い。
- 筋トレ: :muscle:
- 股割: :muscle:
- その他、[Rustハンズオン](https://rust.connpass.com/event/43893/)に参加。なるほど噂通り書きにくいが、よくできた言語だ。
    - 関係ないけど席で一緒になった人が自分のtwitterアカウントを知っていてちょっとうれしかった。

# 2017/01/14

- [Category Theory (Oxford Logic Guides)](https://people.mpi-sws.org/~dreyer/courses/catlogic/awodey.pdf): :star:
- igrep-cashbook: :star:
    - 一旦完了
- ファイルの重複を見つけるツール: :star:

# 2017/01/13

- [Category Theory (Oxford Logic Guides)](https://people.mpi-sws.org/~dreyer/courses/catlogic/awodey.pdf): :star:
- igrep-cashbook: :star:
- 筋トレ: :muscle:
- 股割: :muscle:
- 英語動画: [Category Theories for Working Hackers](https://www.infoq.com/presentations/category-theory-propositions-principle?utm_source=infoqEmail&utm_medium=SpecialNL_EditorialContent&utm_campaign=01052017_SpecialNL): :uk:

# 2017/01/12

- Idrisのチュートリアル: :star:
    - 完了
- igrep-cashbook: :star:
- 筋トレ: :muscle:
- 股割: :muscle:
- 英語動画: [Category Theories for Working Hackers](https://www.infoq.com/presentations/category-theory-propositions-principle?utm_source=infoqEmail&utm_medium=SpecialNL_EditorialContent&utm_campaign=01052017_SpecialNL): :uk:

# 2017/01/11

- Idrisのチュートリアル: :star:
- igrep-cashbook: :star:
- 筋トレ: :muscle:
- 股割: :muscle:

# 2017/01/10

- Idrisのチュートリアル: :star:
- ファイルの重複を見つけるツール: :star: :star:
    - 中間データの構築ができたかと思いきや、今日の編集方針を大幅に間違えてしまったせいで多くの箇所を手でrevertしなければいかなくなってしまった...。
    - しかも別の箇所もバグっている模様。
    - 中間データから結果を取り出すアルゴリズムも難しそうなので、やっぱりまだまだかかりそう...。
- 筋トレ: :muscle:
- 股割: :muscle:

# 2017/01/09

- Idrisのチュートリアル: :star:
- ファイルの重複を見つけるツール: :star: :star: :star:
    - もう少しで中間データの構築ができる？
- 筋トレ: :muscle:

# 2017/01/08

- Idrisのチュートリアル: :star:
- ファイルの重複を見つけるツール: :star:
- 筋トレ: :muscle:

# 2017/01/07

- Idrisのチュートリアル: :star:
- JavaでHaskellのIOを解説する記事: :star:
- 筋トレ: :muscle: :muscle:

# 2017/01/06

- Idrisのチュートリアル: :star:
- igrep-cashbook: :star:
- JavaでHaskellのIOを解説する記事: :star:
- 筋トレ: :muscle:
- ファイルの重複を見つけるツール: :star:
- 英語動画: [Category Theories for Working Hackers](https://www.infoq.com/presentations/category-theory-propositions-principle?utm_source=infoqEmail&utm_medium=SpecialNL_EditorialContent&utm_campaign=01052017_SpecialNL): :uk:

# 2017/01/05

- Idrisのチュートリアル: :star:
- igrep-cashbook: :star:
- 筋トレ: :muscle:
- ファイルの重複を見つけるツール: :star:
- 英語動画: Compilerの授業: :uk:

# 2017/01/04

- Idrisのチュートリアル: :star:
- igrep-cashbook: :star:
- 筋トレ: :muscle:

# 2017/01/03

- Idrisのチュートリアル: :star:
- [intellij-haskell](https://github.com/rikvdkleij/intellij-haskell)をWindowsで動かす挑戦。 :star:
    - [haddockのバグ修正](https://github.com/haskell/haddock/pull/566)。`hGetContents`でエラーになっている箇所を特定するのに想像以上に苦戦した。遅延IOのせいなのか、スタックトレースを出しても、原因となる`hGetContents`とは全然違う場所を指していることが多かった...。

# 2017/01/02

- Idrisのチュートリアル: :star:
- [intellij-haskell](https://github.com/rikvdkleij/intellij-haskell)をWindowsで動かす挑戦。 :star:
    - 引き続き、haddockのバグを追いかけた。結論として、どうも標準エラー出力のエンコーディングがいつの間にかCP932になってしまっていることが原因らしい。`chcp 65001`していようとしていまいとそうなっていた。ほかにも`hGetContents`を実行したときにエラーが起きているケースもあるが、似たようなものだろう。試しにエンコーディングを設定して明日動作確認。
- 筋トレ: :muscle: :muscle:

# 2017/01/01

- Idrisのチュートリアル: :star:
- [intellij-haskell](https://github.com/rikvdkleij/intellij-haskell)をWindowsで動かす挑戦。 :star:
    - 引き続き、haddockのバグを追いかけた。幸い、stackやcabalを使わずhaddock単体で再現できるケースが見つかったので、stack traceをonにしてひたすら追いかけた。
        - どうやら、haddockで直接起きているわけではなく、[ghcというパッケージのparseModule](https://www.stackage.org/haddock/lts-7.14/ghc-8.0.1/GHC.html#v:parseModule)という関数で起きているらしい。GHC添付のパッケージだからなのか、`stack build --profile`でビルドしてもstack traceに載らないようだ...。
