<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2018/08/05までの目標

- Haskell入門コンテンツ: テストケースの抽象化用関数を既存の箇所に適用し終え、4問目のテストケースを一部終える。
- タイプセーフプリキュアの更新: 魔法つかいプリキュア！以前のシリーズをcure-index.jsonに含めるべく、古い形式のファイルのパーサーを書く。
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: 既存のJSONファイルも含め、N件ごとに1ファイル出力するよう修正する <https://github.com/haskell-jp/slack-log/issues/5>。

# 2018/07/29までの目標

- Haskell入門コンテンツ: テストケースの抽象化用関数を書く。
    - 結果: 達成。
- タイプセーフプリキュアの更新: 魔法つかいプリキュア！以前のシリーズをcure-index.jsonに含めるべく、古い形式のファイルのパーサーを書く。
    - 結果: 未達。想像以上に面倒なことがわかった...。
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: type-of-htmlを使ったHTMLの書き出しを半分くらい実装
    - 結果: 未達。Haskell-jpもくもく会で行うことを検討していたが、slack-logの、私以外のメンバーに依頼したIssueの解決がまだだったり、Haskell-jpもくもく会を今回は中止にしたため、今回はタイプセーフプリキュア！に集中することにした。

# 2018/07/28 - 2018/07/29

- タイプセーフプリキュアの更新:
    - 2018/07/28: 既存の`Types.hs`のパーサーを少しずつ書いている。
    - 2018/07/29:
        - 引き続きパーサーを進めていたところ、ミルキィローズやシャイニールミナス、フレッシュプリキュアのキュアエンジェルなどの情報が欠けていたり、transformedGroupについての仕様が間違っていることなどに気づいたため、いろいろ修正して時間がかかった。
        - あとデバッグに便利かと思って色つきで出力してくれるパッケージを探したのも時間かかった。なかったし。
        - 来週中にパーサー全部書けるかな...。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/23 - 2018/07/27

- Haskell入門コンテンツ:
    - テストケースの抽象化用関数を作って適用している
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/22までの目標

- Haskell入門コンテンツ: 4問目のテストケース
    - 結果: 未達。ここでちょっと腰を据えてコピペだらけのテストコードを抽象化することにした。
- タイプセーフプリキュアの更新: キラキラ☆プリキュアアラモードとHUGっと！プリキュア以外のプリキュアの情報もJSONにまとめるべく、まずは魔法つかいプリキュア！にターゲットを絞って移行スクリプトを試しに書いてみる。
    - 結果: 達成。移行スクリプトを少し書いた。簡単に書けるところだけ実装。それから移行の方法に大体当たりをつけた。魔法つかいプリキュア！の移行云々はできてないけどとりあえず達成と言うことに。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話:
    - 関数型プログラミングバージョンをちょっとだけでも進める。
        - 結果: 達成。Ruby製パーサーの関数型プログラミングスタイルバージョンを書けた。 <https://gist.github.com/igrep/521ee36b1e005c20bbdeedcb9de06ec7>

# 2018/07/22

- keep-me-contributing:
    - いよいよClojureでの開発は諦めて、Kotlinで作るべくとりあえずプロジェクトを初期化した。
    - Clojureはまた別の、ブラウザベースのアプリでClojureScriptを試そうかな...
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/21

- keep-me-contributing:
    - [Example using Clojure from Java](https://gist.github.com/RichardHightower/3bf9a3fcccf9d0389aad5e97d082db11)に書いてあった方法を参考にしてみたが、AndroidアプリからClojureのAPIを呼ぶのは難しそうだ。 👇 のような、謎のエラーが出る。
        ```
        java.lang.UnsupportedOperationException: can't load this type of class file, compiling:(clojure/core/specs/alpha.clj:1:1)
        ```
    - Etaの時そうしていたように、Leiningenでjarを作ってそれを`libs`ディレクトリーに含める、というやり方ではダメだろうか。
        - 改めて[ClojureをAndroid StudioでビルドしてAndroidで動かす - Qiita](https://qiita.com/anolivetree/items/2da36088a8083ff23a93)を読むに、やっぱダメなんだろうなぁ...。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話:
    - 関数型プログラミングバージョンが書けた。 <https://gist.github.com/igrep/521ee36b1e005c20bbdeedcb9de06ec7>
    - 全然関数型プログラミングっぽくないところがあるので再帰を使って書き換えようかねぇ。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/18 - 2018/07/20

- Haskell入門コンテンツ:
    - 2018/07/18: NoTraceパッケージがLTS 12.0でもビルドできるよう修正。リリースはまだらしいけど...。
    - 2018/07/19: テストの半自動生成に向け、既存のテストのリファクタリングを試みるも、やっぱり難しそう。素直に既存のもののとおり生成するか...。
    - 2018/07/20: 自動生成ではなく、まとめて実行する関数を書けばよいのではないか、と考え方針を検討した。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/17

- Haskell入門コンテンツ: LTS 12.0 ではビルドが通らなくなっていたことを確認。もくもく温泉中は通ったと思ってたんだけどなぁ。
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/16までの目標

※3連休なので、月曜日まで含めてしまう。

- Haskell入門コンテンツ: 3問目のテスト・実装。
    - 結果: 達成。また目標が軽すぎたね...。
- タイプセーフプリキュアの更新: えみるとルールーに関する修正のリリース。
    - 結果: 達成。予定通り。

# 2018/07/16

- Haskell入門コンテンツ: 4問目のテストケースをざっくり生成したり。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/15

- Haskell入門コンテンツ: 4問目の課題文完成。その他、チェシャ猫氏との議論や指摘を受けて細かい修正。
- タイプセーフプリキュアの更新: えみるとルールーに関する修正のリリース。
- 中国語

# 2018/07/14

- Haskell入門コンテンツ: 4問目の課題文の執筆。6割ぐらいできたかな？
- 中国語

# 2018/07/12 - 2018/07/13

- Haskell入門コンテンツ: 3問目の診断の実装。意外とあっさりできた。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/11

- keep-me-contributing:
    - Clojureのソースを呼ぶのを試してみたが、うまくいかず。どうも<https://dzone.com/articles/java-clojure-interop>に書いてあった方法は、内部のunstableなAPIを呼び出してしまっているらしく、恐らくAndroid関係なく今のClojureではうまくいかないものと思われる。ドキュメントを読む限り`clojure.java.api.Clojure`に書かれた方法ならうまくいきそうだ。
- Haskell入門コンテンツ: 3問目の診断の実装開始。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/10

- keep-me-contributing:
    - ついついまたやってしまった。Androidアプリのコードから、Clojureのコードを読む処理を追加して、コンパイルするところまで進めた。まだ試してない...。
- Haskell入門コンテンツ: 3問目のテストケースを作成。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/09

- keep-me-contributing:
    - 昨日思いついた、AndroidアプリにClojureを埋め込むというアイディアをどうしても少し進めたくなったので、Androidアプリを一から作り始めた。早速ハマってどうしたものかと途方に暮れていたら、[前職の同僚にIDEAは使わずAndroid Studioを使えと言われ](https://twitter.com/fei_kome/status/1016117190624284672)、乗り換えてとりあえずプロジェクトの生成ができた。まぁ、実際にアイディアを試すのはいつ頃かなあ。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/08までの目標

- Haskell入門コンテンツ: 3問目の問題文・解説文作成
    - 結果: 達成。文章だけなら先週からできてたし、ちょっと目標を軽くしすぎたかも。

# 2018/07/08

- keep-me-contributing: 引き続き環境構築。どうも私はemulator運がないらしく、HAXMはRyzenだからインストールすらできないし、Visual Studio Emulator for Androidは起動するだけでOSごとフリーズしてしまうので、またも実機でやることに。最低限、`appc new`しただけのアプリが動いた。次に取り組めるのはいつ頃かなあ。
    - 一方、 <https://dzone.com/articles/java-clojure-interop> なんかを参考に、AndroidアプリにClojureを埋め込むことはできないかと考えている。問題はAndroidがそうした動的な呼び出しをサポートしたり、埋め込んだClojureからAndroidのAPIが呼べるかどうかわからない、というところだけど。[Java N-IDE](https://github.com/tranleduy2000/javaide)なんてアプリができるぐらいなんで、できるのではないかと思っている。いずれにしても試す価値はありそう。
- タイプセーフプリキュアの更新: ほんの少しずつルールーやえみる周りの修正を加えている。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/07

- keep-me-contributing: 気が向いたのでTitanium MobileとClojureで作れるかためしてみるも、開発環境の設定でハマる。Androidしんどい...。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/05 - 2018/07/06

- Haskell入門コンテンツ:
    - 2018/07/05: 3問目の誤答例を作成。
    - 2018/07/06: 3問目の誤答例からエラーメッセージを作成。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/01までの目標

- Haskell入門コンテンツ: 3問目の問題文・解説文作成
    - 結果: 未達。今週はSlackArchiveの件に集中した。楽しかった。
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り。
        - 毎日バッチを走らせればJSONファイルをアップロードできる状態にする。
            - 結果: 達成。

# 2018/07/02 - 2018/07/04

- Haskell入門コンテンツ: 3問目の問題文・解説文作成
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/07/01

- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り。毎日私のPCで実行するよう設定したので、一安心。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/30

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/24までの目標

- Haskell入門コンテンツ: 再分割した上で、今後のゴールを示す文を作る。
    - 結果: 達成
- Haskell Day:
    - 日付を決める。
        - 結果: 達成
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り。
        - JSONをアップロードする処理まで実装する。
            - 結果: 達成
        - GHCJSで共通して使うライブラリーを検討する。misoも使う？
            - 結果: 未達。とりあえずHTMLを書き出すことに集中するため、後回しに。

# 2018/06/25 - 2018/06/29

- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/24

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/23

- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り。
        - Haskell-jpもくもく会でJSONをアップロードする処理まで実装した。まだいろいろ足りてないけど。
 - [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/17までの目標

- Haskell入門コンテンツ: 数当てゲームの代わりに合計問題の回答例を作り、それをゴールとした問題の再分割。
    - 結果: 未達。ほぼできたけど月曜日に改めて見直したら穴が。
- Haskell入門コンテンツ: 再分割した上で、今後のゴールを示す文を作る。
    - 結果: 未達。
- Haskell Day:
    - 概ねタスクは洗い出せているはずなので、優先順位を決めて取りかかる。適宜他の人に依頼する。
        - 結果: 達成。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話:
    - オブジェクト指向で書かれたバージョンをもっと分かりやすく書き換える。
        - 結果: 達成。

# 2018/06/17 - 2018/06/22

- Haskell入門コンテンツ:
    - 2018/06/17: 数の合計を計算する問題の解答例作成完了。それを元にカリキュラムも見直した。
    - 2018/06/18: カリキュラムに不足分があったので整理していくつか追加。
    - 2018/06/19: 合計問題やカリキュラムの説明
    - 2018/06/20 - 2018/06/22: 第3問目の文章を作成中
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/16

- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話:
    - Rubyで書いたバージョンを今度は関数型プログラミングスタイルで書いてみてる。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/12 - 2018/06/15

- Haskell入門コンテンツ: 数の合計を計算する問題の解答例を作成中。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/11

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/10までの目標

- Haskell入門コンテンツ: FizzBuzzをゴールとした問題の再分割。
    - 結果: 達成。
    - 実際にはFizzBuzzではなく従来の数当てゲームでやっていた。しかし実際のところ、もっと関数型プログラミングらしい課題にした方がいいことに気づいた。特に数当てゲームでは模範解答で再帰をしてしまっているところがイマイチ。
- Haskell入門コンテンツ: 再分割した上で、今後のゴールを示す文を作る。
    - 結果: 未達。
- Haskell Day: 概ねタスクは洗い出せているはずなので、優先順位を決めて取りかかる。適宜他の人に依頼する。
    - 結果: 未達。

# 2018/06/10

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/09

- Haskell-jp:
    - タスク整理のためにGoogleスプレッドシートを作り、そのために便利な関数を書いてた。
        - <https://twitter.com/igrep/status/1005460198037680128>
- 中国語

# 2018/06/08

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/07

- Haskell入門コンテンツ:
    - 新しい課題作成開始
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/04 - 2018/06/06

- Haskell入門コンテンツ:
    - 試しに書いた ~~FizzBuzz~~ 数当てゲームのソースを見ながら、課題を分割。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/06/03までの目標

いい加減Haskell入門コンテンツに集中しよう

- Haskell入門コンテンツ: 2問目の実装。
    - 結果: 達成。
    - ようやくペースを取り戻せてきた感じ。
- Haskell入門コンテンツ: FizzBuzzをゴールとした問題の再分割
    - 結果: 未達。
- Haskell Day: 概ねタスクは洗い出せているはずなので、優先順位を決めて取りかかる。適宜他の人に依頼する。
    - 結果: 未達。月曜日にやる。

# 2018/05/28 - 2018/06/03

- Haskell入門コンテンツ: 2問目の実装。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/27までの目標

- Haskell入門コンテンツ: 2問目の実装。
    - 結果: 未達
- Haskell入門コンテンツ: FizzBuzzをゴールとした問題の再分割
    - 結果: 未達
- Haskell-jp: 翻訳記事の公開。
    - 結果: 達成

# 2018/05/27

- Haskell-jp:
    - SlackArchive廃止に対応するため、発言をバックアップするソフトを作っていた。
- Haskell入門コンテンツ: 2問目の実装をちょっとだけ。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/26

- Haskell-jp:
    - Haskell-jp Blogをいろいろ修正。
        - [Modify English](https://github.com/haskell-jp/blog/pull/124)
        - [Fix カンマやシングルクォートなどの前後にはスペースを入れない #119](https://github.com/haskell-jp/blog/pull/122)
        - [Fix #6 lang metadata](https://github.com/haskell-jp/blog/pull/123)
- Haskell入門コンテンツ: 2問目の実装をちょっとだけ。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/22 - 2018/05/25

- Haskell-jp:
    - 2018/05/22 - 2018/05/24: 記事の修正中。
    - 2018/05/25: [記事の公開](https://haskell.jp/blog/posts/2018/windows-gotchas-en.html)。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/20までの目標

- Haskell入門コンテンツ: 2問目の実装。
    - 結果: 未達。どうも朝の時間に集中できなかったりであまり進められず。
- Haskell入門コンテンツ: FizzBuzzをゴールとした問題の再分割
    - 結果: 未達。どうも朝の時間に集中できなかったりであまり進められず。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: 久々に進める。バグを直そう。
    - 結果: 達成。
- Haskell-jp: CircleCI 2.0への移行とそれを試すための記事の完成・リリース。
    - 結果: 達成。記事は[mizunashi\_manaさんに書いていただいた](https://haskell.jp/blog/posts/2018/about-ghc-exts-1.html)。

# 2018/05/20 - 2018/05/21

- Haskell-jp:
    - 2018/05/20: もともとCircleCI 2.0への移行を試すために書いていた翻訳記事があらかたできた。
    - 2018/05/21: 記事の[翻訳のPull request](https://github.com/haskell-jp/blog/pull/118)を送った。
- Haskell入門コンテンツ:
    - 2018/05/21: 2問目をほんの少しずつ進めてる。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/19

- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: 久々に進める。バグを直そう。
    - [直せたのでアップロードした](https://gist.github.com/igrep/526ba501f89f83ba68b5058e830478b8)。バグを作った原因から考えても、普通のパーサーと同じように、保持している文字列を消費するような実装に変えよう。もともとは少しでも文字列を生成する回数を減らすために`String#index`メソッドを使って比較していたが、その使い方を間違えたためにバグっていた。そもそも別にパフォーマンスを気にするようなプログラムではないし。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/15 - 2018/05/18

- Haskell入門コンテンツ: 2問目の実装を少しずつ。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/14

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/12 - 2018/05/13

- Haskell-jp: CircleCI 2.0への移行を本格的に試すために、新しい記事を書いていた。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/13までの目標

- Haskell入門コンテンツ: 2問目の実装。
    - 結果: 未達。いろいろ用事でバタバタしてたね...。
- Haskell入門コンテンツ: FizzBuzzをゴールとした問題の再分割
    - 結果: 未達。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - RustのコードとHaskellのコードとPython 3.3のコードでどうhashを計算しているか読んで比較して、なんで食い違ったか調べようかな... あるいは、元記事を参考にしつつ自分でもHaskellで作れないだろうか...。元記事曰くxorは下位ビットを除けば実質的に単調増加する関数なので、その性質を利用して2分探索したりとか...？
    - 結果: 未達。いったん脇に置いて、ソースコードやら元のアルゴリズムの解説文書やらを寝るときに読んでみようと思う。

# 2018/05/12 - 2018/05/13

- Haskell-jp: CircleCI 2.0への移行を本格的に試すために、新しい記事を書いていた。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/11

- Haskell入門コンテンツ: 2問目を少しずつ作っている
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/10

- Haskell-jp: CircleCI 2.0への移行。もう少しでできそう。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/09

- Haskell入門コンテンツ
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/07 - 2018/05/08

- Haskell入門コンテンツ
- Haskell-jp:
    - 2018/05/07 - 2018/05/08: 引き続きCircleCI 2.0への移行
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/05/06までの目標

ほとんど全部引き続きで！  
多分全部は無理だろうな...。

- Haskell入門コンテンツ: 2問目のテストケースを完成。
    - 結果: 未達。ゴールデンウィークは結構だらけてしまって、ほとんど手を着けなかったな...。
- Haskell入門コンテンツ: FizzBuzzをゴールとした問題の再分割？
    - 結果: 未達
- タイプセーフプリキュアの更新
    - 結果: 達成
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - [せっかく元ネタの人からアドバイスもいただいた](https://medium.com/@robertgrosse/pinv-is-simply-the-modular-inverse-of-p-the-multiplicative-constant-used-in-pythons-fnv-a4a4855ba5)ので、落ち着いて時間をとれたらやってみる。
    - 結果: 未達。まだまだ落とし穴が多い...

# 2018/05/04 - 2018/05/06

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 2018/05/04: いただいたアドバイスを元に、HaskellのhashableにおけるPINVを計算することができたのでfnv-colliderを実行してみたものの、メモリ不足で死んだ...。
    - 2018/05/05: パラメーターを変えたり使うCPUの数を減らすことで、なんとかメモリ不足は避けられた。が、なかなか計算が終わらず。
    - 2018/05/06: 計算終わったものの、全然ハッシュ値が一致しない...。ByteStringにしてもStringにしてもTextにしても衝突しない。こりゃHaskell用にもうちょっと工夫が要るんだろうな... でもTextはともかくByteStringでダメな理由がわからない...
- Haskell-jp:
    - 2018/05/05: Haskell Day 2018の企画案をちょっと考えた。
    - 2018/05/06: Haskell Day 2018の企画案をちょっと考えた。
    - 2018/05/06: 計算を待ってる間に、と思ってHaskell-jp BlogのCircleCI 2.0への移行を試みた。まだまだ苦戦しそうだ。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/05/03

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/05/02

- タイプセーフプリキュアの更新: 更新完了。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/05/01

- タイプセーフプリキュアの更新: [Pull requestを作るところまでできた](https://github.com/igrep/typesafe-precure/pull/22)
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/04/30

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語
- なんかIISでWebDAVの設定を行おうとして失敗していた...。

# 2018/04/29 までの目標

ほとんど全部引き続きで！  
多分全部は無理だろうな...。

- Haskell入門コンテンツ: 2問目の問題と誤回答例を作成
    - 結果: 達成。
- Haskell入門コンテンツ: FizzBuzzをゴールとした問題の再分割？
    - 結果: 未達。これは2問目ができるまで後回しでよし。
- Haskell-jp: 新ロゴができたので各所に適用
    - 結果: 達成。
- タイプセーフプリキュアの更新
    - 結果: 未達
- cmd.exeの脆弱性についての記事
    - 結果: 未達
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - [せっかく元ネタの人からアドバイスもいただいた](https://medium.com/@robertgrosse/pinv-is-simply-the-modular-inverse-of-p-the-multiplicative-constant-used-in-pythons-fnv-a4a4855ba5)ので、落ち着いて時間をとれたらやってみる。
    - 結果: 未達

# 2018/04/29

- Haskell-jpの活動: ロゴの更新続き。これで一旦一区切り。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/04/28

- Haskell-jpの活動: ロゴの更新を中心に行った。
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/04/23 - 2018/04/27

- Haskell入門コンテンツ:
    - 2018/04/23: 2問目の問題完成。
    - 2018/04/24: 2問目の誤答例を作成。
    - 2018/04/25 - 2018/04/26: 誤答例からエラーメッセージを自動生成するスクリプトを作成。
    - 2018/04/27: 2問目のテストケースを書き始め
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/04/22 までの目標

- Haskell入門コンテンツ: 2問目の問題と誤回答例を作成
    - 結果: 未達。結構雑務が多かったしなぁ...。
- Haskell入門コンテンツ: FizzBuzzをゴールとした問題の再分割？
    - 結果: 未達。
- Haskell-jp: 新ロゴができたので各所に適用
    - 結果: 未達。
- keep-me-contributing: [もくもく.lisp #2](https://connpass.com/event/84333/)にてClojureで書くための環境を構築して、少し書いてみる
    - 結果: 未達。

# 2018/04/22

- Haskell-jp: 各所に適用。疲れたので残りは次のHaskell-jpもくもく会でやろうかな。
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/04/21

- keep-me-contributing: Leiningenのエラーがわかりづらくて苦戦するも、[もくもく.lisp #2](https://connpass.com/event/84333/)に参加していたみなさんに親切に教えていただいたおかげで、ようやくReact Nativeに「Android SDKが見つからないんだけど！」という分かりやすいエラーが出るところまでたどり着けた。ある程度まとまったらQiitaに書こうかな？
- Haskell-jp: 新ロゴを書き出してリポジトリーにアップロードするだけにとどまる
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/04/16 - 2018/04/20

- Haskell入門コンテンツ
    - 2018/04/16 - 2018/04/20: ちょっとだけ第2問目の続きを書いた。
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- 中国語

# 2018/04/15 までの目標

- Haskell入門コンテンツ: main-testerを使ってテストコードの改善
    - 結果: 達成。以外とすんなり移植できた。main-tester自体のデバッグを頑張ったおかげだろう。
- Haskell入門コンテンツ: 数当てゲームをゴールとした問題の再分割
    - 結果: 未達。数当てゲーム以外の方向も検討しつついろいろ考えたり、中途半端にしていた問題の続きを書いたりしていた。
- 中国語: [自作スピードラーニング](https://twitter.com/igrep/status/973926127671521280)をするための例文作りを定着させる。
    - 結果: 達成。とりあえず少なくとも平日は1日1文以上の登録ができた。

# 2018/04/15

- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/04/14

- Haskell入門コンテンツ
    - main-testerを使ってテストコードの改善ができた。あっさりうまくいってよかった。

# 2018/04/13

- Haskell入門コンテンツ
    - RAM DISKの設定をしたので試しにビルド。想像以上に速くなったので職場でもやろう。
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/04/09 - 2018/04/12

- Haskell入門コンテンツ
    - 2018/04/09: 次をどうするか考えるところで止まってしまうなぁ...。
    - 2018/04/10: とりあえず、書きかけの、BMIを求める問題を続けることに。
    - 2018/04/11: 改めて`stack test`したら案の定パスが長すぎることによるエラーが。テストコード以前に、前から考えてた、RAM DISKに移行するのが先かなぁ...。
    - 2018/04/12: RAM DISKの設定
    - 2018/04/13: RAM DISKの設定をしたので試しにビルド。想像以上に速くなったので職場でもやろう。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/04/08 までの目標

- Haskell入門コンテンツ: 脱線になってしまうが、新しいテスト用のライブラリーを作る。リリースしてHaskell-jp Blogに記事を上げるまで。
    - 結果: ほぼ達成。記事の公開には至らなかったが、Pull requestを送ってレビューしてもらうまでできたのでよしとしよう。 <https://github.com/haskell-jp/blog/pull/107>
- 中国語: [自作スピードラーニング](https://twitter.com/igrep/status/973926127671521280)をするための最初の一歩のため、例文をひたすら作ってHello Talkに上げる。
    - 結果: 未達。Hello Talkに上げるのは面倒なので諦める。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成。[Robertの返事](https://medium.com/@robertgrosse/pinv-is-simply-the-modular-inverse-of-p-the-multiplicative-constant-used-in-pythons-fnv-a4a4855ba5)に従い`PINV`定数を設定し、衝突する文字列を集める。
    - 結果: 未達。main-testerのCIを通すのに思いのほか時間がかかったりして、今回は時間をとれず。

# 2018/04/08

- Haskell入門コンテンツ
    - main-testerについて、Haskell-jp BlogにPull requestを送った。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/04/07

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/04/02 - 2018/04/06

- Haskell入門コンテンツ
    - 2018/04/03: テスト用のライブラリーのドキュメント書き書き
    - 2018/04/05: [とりあえずリリースしてみた](https://hackage.haskell.org/package/main-tester)ものの、CIでテストがこける...。
    - 2018/04/06: CIでテストがこける現象、doctestを実行しないようにしたら回避できたので一安心。<https://twitter.com/igrep/status/982026138913464321>
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語
    - 2018/04/04: ようやく例文のメモを作り始めた。

# 2018/04/01 までの目標

- Haskell入門コンテンツ: 脱線になってしまうが、新しいテスト用のライブラリーを作る。リリースして、できればHaskell-jp Blogに記事を上げるまで。
    - 結果: 未達。想像以上にバグに苦しんだね...。
- 中国語: [自作スピードラーニング](https://twitter.com/igrep/status/973926127671521280)をするための最初の一歩のため、例文を作りGoogle翻訳へのリンクを張る（読み上げのため）
    - 結果: 未達。これも手を着けず...。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成。[Rustのコード](https://github.com/Storyyeller/fnv-collider)をデバッグすることで[元ネタの記事](https://medium.com/@robertgrosse/generating-64-bit-hash-collisions-to-dos-python-5b21404a5306)の理解を再度試みる。
    - 結果: 未達。例のRustのコードで書き換える定数について[返事が来た](https://medium.com/@robertgrosse/pinv-is-simply-the-modular-inverse-of-p-the-multiplicative-constant-used-in-pythons-fnv-a4a4855ba5)ものの、手を着けられず。
- 土日は控えようと言いながら神姫PROJECTをやってしまったものの、まぁ先週に比べてバランスはとれていたと思う。

# 2018/03/26 - 2018/04/01

- Haskell入門コンテンツ:
    - 2018/03/26: テスト用のライブラリー、なんだか書きにくいので[継続モナドによるリソース管理](https://qiita.com/tanakh/items/81fc1a0d9ae0af3865cb)で知った[managedパッケージ](http://hackage.haskell.org/package/managed-1.0.6)を使ってみてる。
    - 2018/03/28: ようやくstdoutとstderrを書き換えるライブラリーも書いたけど、なんだか動かない。
    - 2018/03/30: どうもmanagedパッケージの使い方が悪いのが原因のような気がしてきた。直し方もわからないしそのままナイーヴな`bracket`に変えるかな...。
    - 2018/03/31: `bracket`に変えてみてもやっぱり動かず。Windowsの問題かと思って元ネタのsilentlyのテストを実行してみたところ、あっさりうまくいった。次はStringに変えたり、組み合わせ問題と仮定してLinuxでもやってみるか...。
    - 2018/04/01: ようやく動いた...。どうやら`hFlush`する`Handle`を間違えていたらしい。これは直感に反するわ...。未だに文字コードの統一がうまくいってるのか行ってないのかバグるものの、とりあえずリリースしちゃおう。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/25 までの目標

- Haskell入門コンテンツ: 脱線になってしまうが、新しいテスト用のライブラリーを作る。半分ぐらいまでが目標。
    - 結果: 達成。
- 中国語: [自作スピードラーニング](https://twitter.com/igrep/status/973926127671521280)をするための最初の一歩のため、例文を作りGoogle翻訳へのリンクを張る（読み上げのため）
    - 結果: 未達。やり方自体どうしようか迷っちゃうね...。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - そう言えば忘れていた。PCも戻ってきたので続きをやろう。
    - 結果: 未達。自分で考えるのを諦めて[以前読んだ記事に書いてあったプログラム](https://github.com/Storyyeller/fnv-collider)をそのまま使おうと思ったが、`PINV`という定数の設定方法がわからず。[作者に聞いてみたけど](https://medium.com/@whosekiteneverfly/thanks-for-the-source-code-cc0d0cac2184)多分反応は来ないだろう。

内視鏡検査もあったりしたけど、どう考えても神姫PROJECTのやり過ぎなので、Weeky missionを達成できていないときを除いて今後は土日は控えよう...。

# 2018/03/25

- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/19 - 2018/03/24

- Haskell入門コンテンツ:
    - 2018/03/19: テスト用のライブラリー作りはじめ。
    - 2018/03/20: 久々にdoctestの使うよう挑戦してみる。
    - 2018/03/21: doctestを使った部分が書けた。
    - 2018/03/22: Hspecも書けた。
    - 2018/03/23: stdinを差し替える処理を書けた。stdoutやstderrと勝手が違ったらどうしようかと思ったけど、そんなことはなかったのでほっとする。
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/18 までの目標

- Haskell入門コンテンツ
    - 引き続き、Windowsの長いパス問題を回避できるようunisonで同期する設定を書いたり、unisonの設定ファイルの管理を改善したり
    - 結果: 達成。unisonファイルをmustacheで共通化するよう設定した。
- タイプセーフプリキュア！:
    - 引き続き、HUGっと！プリキュアのサポート
    - 結果: 達成。
- Haskell-jp Blog:
    - 先週やりかけたWindowsの長いパスについての記事の公開
    - 結果: 達成。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: いろいろバグっているのでひたすら直す
    - 結果: 未達。最速上映で疲れてたためかあまり集中してできず...。

# 2018/03/18

- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: デバッグコードをいろいろ仕込んだものの、仕込むだけでわからず。ちなみに、「`StringScanner`を使ったバージョンにも別のバグができていた」と思いきや、実際には入力が間違っていた。
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/17

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Programming Clojure, Third Edition](https://pragprog.com/book/shcloj3/programming-clojure-third-edition)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/16

- Haskell入門コンテンツ
    - 遅い遅いと思っていたテストを高速化する方法を思いついたけど、既存のライブラリーがそれでは不足していることに気づいたので、新しく作ることに。ついついYak shavingしてしまうな…。

# 2018/03/14 - 2018/03/15

- Haskell入門コンテンツ
    - 2018/03/14: 作成したunisonの設定ファイルで、Dropboxに入れたプロジェクトディレクトリーをよりルートに近い場所に移すことに成功。移した先のディレクトリーでようやくビルドができた。
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/13

- Haskell-jp Blog:
    - [公開完了](https://haskell.jp/blog/posts/2018/windows-long-path.html)
- Haskell入門コンテンツ
    - unisonの設定ファイルをmustacheで共通化するよう設定。
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/11 までの目標

- Haskell入門コンテンツ
    - とりあえず、Windowsの長いパス問題を回避できるようunisonで同期する設定を書いたり、unisonの設定ファイルの管理を改善したり
    - 結果: 未達。途中でグループポリシーの話とか試してもうまくいかなかったなぁ。
- タイプセーフプリキュア！:
    - HUGっと！プリキュアのサポート
    - 結果: 未達。こちらも惜しくも至らず。

# 2018/03/10 - 2018/03/12

- Haskell-jp Blog:
    - 2018/03/10: ここまでハマったWindowsの長いパスについての記事。明日仕上げる。
    - 2018/03/11: ほぼ完成。公開までは至らず。
    - 2018/03/12: [Pull request](https://github.com/haskell-jp/blog/pull/96)を送って諸々修正。
- タイプセーフプリキュア！:
    - 2018/03/11: 「HUGっと！プリキュア」のサポートほぼ完了。あとは映像で確認するだけ。
    - 2018/03/12: 公開完了
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/09

- Haskell入門コンテンツ
    - 短いパスのディレクトリーとDropboxのディレクトリーを同期するためのunisonプロファイル作成
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- 中国語

# 2018/03/08

- Haskell入門コンテンツ
    - Windowsの長いパス問題の回避方法として、グループポリシーを編集するといいみたいなことを聞いて試してみたが、うまくいかず。
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/07

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/06

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/03/05

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/03/04 までの目標

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - [衝突を探す方法の記事](https://medium.com/@robertgrosse/generating-64-bit-hash-collisions-to-dos-python-5b21404a5306)を読んでもうちょっと勉強してみるか、壊れていたPCが帰ってきたらLinuxでのhashableが何ビットのハッシュ値を出しているか調べる。
    - 未達: 体調不良に加えてPCも結局復活せず。。。
- Haskell入門コンテンツ
    - 余力があれば少しでも進める。
    - 未達: やっぱり体調不良のため何もせず。

# 2018/03/04

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/02/26 - 2018/03/05

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)

# 2018/02/25 までの目標

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - [衝突を探す方法の記事](https://medium.com/@robertgrosse/generating-64-bit-hash-collisions-to-dos-python-5b21404a5306)を読んでもうちょっと勉強してみるか、壊れていたPCが帰ってきたらLinuxでのhashableが何ビットのハッシュ値を出しているか調べる。
    - 結果: 未達。PCも帰ってきたのに結局まだ起動しないし、風邪を引いてしまったのでLinuxのことを調べる気も起きず。
- Haskell入門コンテンツ
    - Stackのおかしな挙動についてバグ報告。できれば直す。
    - 結果: 未達。stackというよりGHCの問題として直した方が良さそうなのはわかった。[8.4で直すプラン](https://ghc.haskell.org/trac/ghc/wiki/Status/GHC-8.4.1)もあるみたいだし。[Redditで聞いてみたら](https://www.reddit.com/r/haskell_jp/comments/7zb7ao/ghc%E3%81%AE%E7%89%B9%E5%AE%9A%E3%81%AE%E6%A9%9F%E8%83%BD%E3%81%AE%E9%96%8B%E7%99%BA%E7%8A%B6%E6%B3%81%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/)まだ直ってないみたいだけど...。
- 探索的な状態だと目標をちゃんと決めるの難しいなぁ...。

# 2018/02/25

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- 中国語

# 2018/02/24

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)

# 2018/02/23

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- 中国語

# 2018/02/21 - 2018/02/22

- Haskell入門コンテンツ
    - 2018/02/21: stackを最新版に上げても直ってなかった...。[このIssue](https://github.com/commercialhaskell/stack/issues/3285)で議論されている模様。
    - 2018/02/22: バグの詳細を調べていた
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- 中国語

# 2018/02/19 - 2018/02/20

- Haskell入門コンテンツ
    - 2018/02/19: Stackのバグについて、最小ケースを作っていた。おそらく私の環境固有の問題で、回避は難しいかも。
    - 2018/02/20: 再現するプロジェクトと再現しないプロジェクト両方作れたものの、違いがよくわからない。もしかしてstackの最新版で直ったらしい、Windowsのパス文字制限のバグだったりするのだろうか。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/02/18 までの目標

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 結果: 未達。まだ難航するかも...。
- Haskell入門コンテンツ
    - 少しでも進める。
    - 結果: 未達。ちょっとビルドしようとしてみただけ。一度環境をきれいにしたから依存関係のインストールに時間がかかる...。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: Rubyの`StringScanner`を使わないバージョンを作る。
    - 結果: 未達。実装はできたけどまだバグってる。

# 2018/02/12 - 2018/02/18

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 2018/02/12: あれこれ考えたけど、結局「少しでも効率のいいブルートフォース」でやることになった。まぁ少しはいい経験になると思う。
    - 2018/02/16: あとは生成したハッシュを保存する処理を実装するところだけというところまでやっときた。
    - 2018/02/17: 保存する処理までとりあえず実装。LevelDBを使うことにしたので、Windowsでビルドするのが面倒だなぁと思ってそのままにしてる。あとどうせ最終的にはLinuxで動かすしね。しかし、同時に偶然気づいたのは、32bitのハッシュを計算していたのは、MSYS2のGHCだからでは...という気がしてきた。そうだとすると、今の実装では多分ディスク容量が足りなくなる。
    - 2018/02/18: [池袋プリキュアオフ会](http://mixi.jp/view_event.pl?comment_count=56&comm_id=5372&id=84776155)に参加しながらも、気が向いたときに改めて[衝突を探す方法の記事](https://medium.com/@robertgrosse/generating-64-bit-hash-collisions-to-dos-python-5b21404a5306)を読んでいた。読む度に、またコードを書いてから読む度に、少しずつぼんやりとだけど理解が深まっていて、面白い。結局この件長い時間を費やしてしまいそうだなぁ...。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: Rubyの`StringScanner`を使わないバージョンをとりあえず作ったが、バグっている模様。あと`StringScanner`を使ったバージョンにも別のバグがあることが発覚。
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/02/11 までの目標

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - ようやく興が乗ってきたので一旦この一週間はこれに集中しよう。
    - 未達。結局よく方法もわからないので、brute force attackするためのコードを書いてみて、適当なクラウドのサーバーで実行することにした。

# 2018/02/05 までの目標

- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
    - 数当てゲームを作り、そこに至るまでの全体像を策定
        - 今後は、ひとまずマイルストーンとして、数当てゲームを作るまでのチュートリアルを作る
        - そこから、ユーザーの任意で間違いについての情報収集する仕組みを作ろう。話が大きくなってしまったが、「エラーメッセージを強くする」のが目標なので、方針からはずれていない。
    - 結果: 上記の通り一応達成。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 結果: 未達。

# 2018/02/03 - 2018/02/11

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 2018/02/03: レインボーテーブルの構築を試みるも、やっぱ時間かかるね...。
    - 2018/02/04: あれこれ文書を探っているうちにやっと解決の糸口っぽいものが見えてきた
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/29 - 2018/02/02

- Haskell入門コンテンツ
    - 2018/02/01: stackのバグかもしれない挙動に悩まされる。
    ```
    [1 of 5] Compiling Paths_makeMistakesToLearnHaskell ( .stack-work\dist\5c8418a7\build\makeMistakesToLearnHaskell-test\autogen\Paths_makeMistakesToLearnHaskell.hs, .stack-work\dist\5c8418a7\build\makeMistakesToLearnHaskell-test\makeMistakesToLearnHaskell-test-tmp\Paths_makeMistakesToLearnHaskell.o )
.stack-work\dist\5c8418a7\build\makeMistakesToLearnHaskell-test\makeMistakesToLearnHaskell-test-tmp\.stack-work\dist\5c8418a7\build\makeMistakesToLearnHaskell-test\autogen\Paths_makeMistakesToLearnHaskell.dump-hi: openFile: does not exist (No such file or directory)

--  While building custom Setup.hs for package makeMistakesToLearnHaskell-0.1.0.0 using:
      C:\sr\setup-exe-cache\x86_64-windows\Cabal-simple_Z6RU0evB_2.0.1.0_ghc-8.2.2.exe --builddir=.stack-work\dist\5c8418a7 build lib:makeMistakesToLearnHaskell exe:mmlh test:makeMistakesToLearnHaskell-test --ghc-options " -ddump-hi -ddump-to-file -fdiagnostics-color=always"
  ```
  - 2018/02/02: 改めて設定を確認して実行して、やっぱり再現するので、バグではないかという思いが強まる
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/28 までの目標

今度から週を月曜日で切り替えよう。

- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
    - 2つめの課題まで作成
    - 未達: テストコードの改善に時間がかかってしまった。よく考えたらあとで削除する可能性が高いコードなんで、ちょっと時間をかけすぎなのかな...。新しい方針が思いついてきたので、それとの兼ね合いに悩む。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 未達: やっぱり慣れないことなんで難しいね...。デスクトップPCが故障して手元にないのも痛い。

# 2018/01/27 - 2018/01/28

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 2018/01/27: hashdos脆弱性を利用して攻撃するためのアルゴリズムについて調査
        - <https://events.ccc.de/congress/2011/Fahrplan/attachments/2007_28C3_Effective_DoS_on_web_application_platforms.pdf>
    - 2018/01/28: よく調べたらhashableが使っているのはFNV Hashだったので、衝突する文字列を調べる方法を考えるも、難しい。[この辺](https://medium.com/@robertgrosse/generating-64-bit-hash-collisions-to-dos-python-5b21404a5306)に方法を解説している記事があったものの、ぱっと読んで理解できるかわからない分量だったので断念。代わりにレインボーテーブルの作成を試みるも、メモリ不足で死ぬ。
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/23 - 2018/01/26

- Haskell入門コンテンツ
    - 2018/01/25: もうちょっとでやっと一つ目の課題のテストが書き終わる
    - 2018/01/26: 冷静に考えたら今の実装は近い将来捨てるも同然のものなのに、テストを真面目に書きすぎたな。。。
何でこんなことしちゃったんだろう。。。。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/22

- Haskell入門コンテンツ
- unordered-containersのhashdos脆弱性についての記事
    - 公開完了。割とよい反応を得られた。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/20 までの目標

- unordered-containersのhashdos脆弱性についての記事
    - 結果: 達成: 記事の公開までは至らなかったけどPull request出せたしほぼ完成だしいいことにしよう。
- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
        - 結果: 未達。まだ小さいのにリファクタリングとかいろいろ周辺的なものに時間がかかってしまった。
    - 2つめの課題まで作成
        - 結果: 未達。
- Megaparsecの`Text.Megaparsec.Expr`を使ってみた感想
    - 結果: 未達。これはやっぱり後回し。igrep-cashbookがもうちょっとできてからでいいや。

# 2018/01/20 - 2018/01/21

- unordered-containersのhashdos脆弱性についての記事
    - [Pull request出すところまで達成](https://github.com/haskell-jp/blog/pull/72)
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/16 - 2018/01/19

- Haskell入門コンテンツ
    - 2018/01/16: テストが遅い問題がなかなかしぶとい。実行しているマシンがより遅いせいもあるだろうけどいずれにしても耐えがたい速度だ。やっぱりゴールデンテストとほかのテストを分ける手立てが必要そう
    - 2018/01/17: テストが遅い原因を調べたら、やっぱり子プロセス、つまり`stack exec`とかの実行が時間の大半を占めていた。それにしても[stack, 前からこんなだったか忘れたけどプロファイリング楽になったなぁ。stack test --profile ってしただけでprofファイルが作られた。](https://twitter.com/igrep/status/953602925284048896)
    - 2018/01/18: リファクタリングで思わぬ時間を使ってしまった。
    - 2018/01/19: テストの分割開始
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [1日1分・ざっくり学べる中国語文法](https://www.amazon.co.jp/dp/B00LZ1YLIA/)

# 2018/01/15

- タイプセーフプリキュア: キュアペコリンの実装・リリース。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [1日1分・ざっくり学べる中国語文法](https://www.amazon.co.jp/dp/B00LZ1YLIA/)

# 2018/01/14

- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: [Rubyの`StringScanner`を使ったバージョン](https://gist.github.com/igrep/702cad632782c9dd88b3c115f7d9f40a)ができた。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [1日1分・ざっくり学べる中国語文法](https://www.amazon.co.jp/dp/B00LZ1YLIA/)

# 2018/01/13 までの目標

- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
    - 2つめの課題まで作成
    - 引き続き先週と同じく。
    - 結果: 未達。思ったより時間がとれず...。
- Haskell開発環境再整備: HIEのバグを調べる
    - 結果: 未達。
- igrep-cashbook再び: GHCJSを試して移植を試みる
    - 結果: 未達。
- Megaparsecの`Text.Megaparsec.Expr`を使ってみた感想
    - 結果: 未達。

PCが日曜日に壊れるトラブルもあり、どれも達成できず。  
まぁ、それでなくても欲張りすぎたね。

# 2018/01/13

- igrep-cashbook再び: GHCJSへの移植開始。とりあえずビルドを試みただけだけど。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: ちょっとずつYokohama.rbで進めている件。Ruby版がだいぶできた。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/09 - 2018/01/12

- Haskell入門コンテンツ
    - 2018/01/10: ようやくWindowsの文字コード周りのバグを回避できた。
    - 2018/01/11: ここまでやったことをコミットしだだけ
    - 2018/01/12: テストが異様に遅い原因を探っていた。やはり`stack path`が遅いのが原因らしい。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/08

- igrep-cashbook再び: 四則演算機能のテストを書いてみたらやっぱり通らず、想像以上に直すのに苦戦した。直せてよかった。最終的に[こんな1コミット](https://github.com/igrep/igrep-cashbook/commit/cedf8acbef14f7cef29fd7f304329420ab736dc6)にまとまった。気が向いたら記事にして`Text.Megaparsec.Expr`と一緒に紹介しよう。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/07

- igrep-cashbook再び: CLI版をとりあえず動かすところまでと、四則演算機能を実装するところまでやった。四則演算機能は[Text.Megaparsec.Expr](https://hackage.haskell.org/package/megaparsec-6.4.0/docs/Text-Megaparsec-Expr.html)のおかげでめちゃくちゃ簡単にできたっぽいけどちゃんと動くかわからんのでテストも書く。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/06 までの目標

- Haskell開発環境再整備
    - Haskell IDE EngineをWindowsでも動かす
    - 結果: 未達。Linuxでもどうも動いたり動かなかったりしている模様。HIEのバグの詳細を調べて報告（多分既出）するのは来週と言うことで。
- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
    - 2つめの課題まで作成
    - 結果: 未達。Windowsの文字コード周りのエラーに苦戦。[この間書いた記事](https://haskell.jp/blog/posts/2017/windows-gotchas.html)に追記するネタが増えそう。

# 2018/01/06

- igrep-cashbook再び: [もくもく温泉　開発合宿 #10](https://mokumoku-onsen.connpass.com/event/74011/)中の課題として、予定を変えてやっていた。Haskellで改めて書き直し、四則演算機能を追加するところまでできればやりたい。とりあえずファイル形式のパーサーまで書いた。テストしていないのでどうなるかわからんけど...。

# 2018/01/03 - 2018/01/05

- Haskell開発環境再整備:
    - 2018/01/03: 昨日まで苦戦していたエラーは回避できたが、今度はエラーメッセージが出ないがどうもghc-modeやhlintによるエラーが出ない問題に苦しむ。
    - 2018/01/04: VS CodeでもHaskell IDE Engineを試してみることで、エラーメッセージが明らかになった。[この問題](https://github.com/haskell/haskell-ide-engine/issues/355)と似て、ghc-modのバグを踏んでしまっている模様。ついでに、デバッグログの出し方も明確になった。
- Haskell入門コンテンツ
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/01 - 2018/01/02

- Haskell開発環境再整備:
    - 2018/01/01: WindowsでのHIEがうまく動いていないらしい。Pythonとの連携でエラーがあるご様子。
    - 2018/01/02: どうも詳しい原因が分からず。
- Haskell入門コンテンツ:
    - 2018/01/01: いきなりゴールデンテストなんて書くもんだから、標準出力と標準エラー出力をテストに使ってしまって、デバッグがしづらい。いずれにしてもデバッグ用のログをどこかに出すよう作った方がよさげ。
    - 2018/01/01: ユーザーが書いたプログラムに間違いがあった場合のエラーの出し方に悩む。標準出力か標準エラー出力か...。
- [Total Haskell is Reasonable Coq](https://arxiv.org/abs/1711.09286)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
