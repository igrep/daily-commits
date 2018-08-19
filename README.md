<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2018/08/26までの目標

- [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)での発表を詳しくしたブログ記事の作成
- Haskell-jp: Haskell Day 2018のスケジュール作り
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: 既存のJSONファイルも含め、N件ごとに1ファイル出力するよう修正する <https://github.com/haskell-jp/slack-log/issues/5>。
- Haskell入門コンテンツ: 少しだけでも続きに着手したい

# 2018/08/19までの目標

- [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)で、新しいタイプセーフプリキュアについての発表
    - 結果: 達成
- [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)での発表を詳しくしたブログ記事の作成
    - 結果: 未達
- タイプセーフプリキュアの更新: 魔法つかいプリキュア！以前のシリーズをcure-index.jsonに含める修正の完了
    - 結果: 達成

# 2018/08/190

- [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)での発表を詳しくしたブログ記事の作成
    - 途中まで書いた。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/08/12までの目標

サマータイムの件が気になるし、先週も結局タイプセーフプリキュアのことしかできなかったため、絞る。

- タイプセーフプリキュアの更新: 魔法つかいプリキュア！以前のシリーズをcure-index.jsonに含める修正の完了
    - 結果: 未達。あと手で修正するところだけなんだけどねー。もうちょっと。サマータイムの件がなければなぁ。

# 2018/08/12 - 2018/08/18

- タイプセーフプリキュアの更新:
    - 2018/08/12: ようやく変換スクリプトを書き上げ、実際に変換した。スクリプトにバグがあったりしてまだ手で修正するところはあるが、今後は全部手で直そう。
    - 2018/08/13 - 2018/08/14: 変換後のソースの修正引き続き
    - 2018/08/15: とりあえずコンパイルが通せた。コンパイルエラーにならない細かい間違いの修正かな。
    - 2018/08/16: もろもろ細かいところも修正できたので、あとはCircleCI 2.0への移行だけのはず...!
    - 2018/08/17: CircleCI 2.0への移行も難なくクリア。夜にちょっと大きな問題が見つかったものの解決した。あとはリリースと発表資料作り！
    - 2018/08/18: [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)での発表が無事できた！
        - [substring-parserでcure-index.jsonを移行した話](http://the.igreque.info/slides/2018-08-18-substring-parser.html)
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/08/11

サマータイムの件をやっていたら時間をとれず。

- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/08/05までの目標

- Haskell入門コンテンツ: テストケースの抽象化用関数を既存の箇所に適用し終え、4問目のテストケースを一部終える。
    - 結果: 未達。
- タイプセーフプリキュアの更新: 魔法つかいプリキュア！以前のシリーズをcure-index.jsonに含めるべく、古い形式のファイルのパーサーを書く。
    - 結果: 達成。
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: 既存のJSONファイルも含め、N件ごとに1ファイル出力するよう修正する <https://github.com/haskell-jp/slack-log/issues/5>。
        - 結果: 未達。

# 2018/07/29までの目標

- Haskell入門コンテンツ: テストケースの抽象化用関数を書く。
    - 結果: 達成。
- タイプセーフプリキュアの更新: 魔法つかいプリキュア！以前のシリーズをcure-index.jsonに含めるべく、古い形式のファイルのパーサーを書く。
    - 結果: 未達。想像以上に面倒なことがわかった...。
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: type-of-htmlを使ったHTMLの書き出しを半分くらい実装
    - 結果: 未達。Haskell-jpもくもく会で行うことを検討していたが、slack-logの、私以外のメンバーに依頼したIssueの解決がまだだったり、Haskell-jpもくもく会を今回は中止にしたため、今回はタイプセーフプリキュア！に集中することにした。

# 2018/07/28 - 2018/08/10

- タイプセーフプリキュアの更新:
    - 2018/07/28: 既存の`Types.hs`のパーサーを少しずつ書いている。
    - 2018/07/29:
        - 引き続きパーサーを進めていたところ、ミルキィローズやシャイニールミナス、フレッシュプリキュアのキュアエンジェルなどの情報が欠けていたり、transformedGroupについての仕様が間違っていることなどに気づいたため、いろいろ修正して時間がかかった。
        - あとデバッグに便利かと思って色つきで出力してくれるパッケージを探したのも時間かかった。なかったし。
        - 来週中にパーサー全部書けるかな...。
    - 2018/07/30:
        - transformedGroupのパーサーが書けた（はず）
    - 2018/07/31:
        - transformedGroupのパーサーが書けていたことだけ確認
    - 2018/08/01 - 2018/08/02:
        - transformationのパーサーが書いている途中
    - 2018/08/03:
        - transformationのパーサーが書けたかと思いきや、動いてない。
    - 2018/08/04:
        - transformationのパーサーの修正、purificationのパーサーの実装、nonItemPurificationのパーサーの実装の開始など
    - 2018/08/05:
        - すべてのパーサーを書けた。
    - 2018/08/06:
        - .hs ファイルとして出力する処理の実装開始。
    - 2018/08/07 - 2018/08/10:
        - .hs ファイルとして出力する処理の実装。途中で、より最終的なコードがシンプルになる方法を思いついたのでいろいろ検討してた。
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
