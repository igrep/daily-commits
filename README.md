<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

# 2016-03-06

昨日に引き続き、xlsxパッケージのデバッグ。ようやく原因が見つかった。  
xlsxファイルの中には、`sharedStrings.xml`という、xlsxファイル内で使用している、
セルに書かれた文字列の辞書みたいなファイルが有るのだけど、問題のファイルでは、
その`sharedStrings.xml`の中で、

```xml
<si>
    <t/>
</si>
```

と、何故か子要素のない`<t>`タグが混ざっていたのだ。  
これを適切に処理していなかったのが原因と判明。  
中身が空のセルにはこの`sharedStrings.xml`の番号は割り当てられないはずななので、
どういう条件でできるのか全くわからないが、とりあえず直すのはできそう。

# 2016-03-05

この間作ったopen-msys2-minttyの若干の改善。  
ウィンドウのタイトルに指定したディレクトリを入れることで、複数のプロジェクトを開いた時に見やすくなった。

https://github.com/igrep/open-msys2-mintty/pull/2

また、この間からこの日記には書かずに進めていた、仕事で使うxlsxファイルから情報を吸い出すプログラムの続き。  
処理したいxlsxファイルをxlsxパッケージでパースすると、
なぜかいくつかのセルの位置が変な位置にずれてしまう、怪奇現象に出くわしてしまった。  
そのため、xlsxパッケージをデバッグするために小さな再現ケースを作れないか作れないかと悪戦苦闘するも、全くうまく行かず。

# 2016-03-01 - 2016-03-04

JavaでMonadを説明する記事継続して執筆中。

# 2016-02-29

keep-me-contributingの、Chromeプラグイン版作りちょっと進めた。  

# 2016-02-26 - 2016-02-28

JavaでMonadを説明する記事継続して執筆中。  
Xperia Z4 Tabletのキーボードのおかげで電車で座れたときは捗る捗る。

# 2016-02-25

Tokyo Elm Programming Meetupのレポート記事を書き始めたが、その日中には間に合わず。

# 2016-02-24

[Tokyo Elm Programming Meetup](http://www.meetup.com/Tokyo-Elm-Programming-Meetup/events/228097244/)に参加・発表。

# 2016-02-23

明日の[Tokyo Elm Programming Meetup](http://www.meetup.com/Tokyo-Elm-Programming-Meetup/events/228097244/)
第1回に向けてスライド作り。

# 2016-02-22

思いつきでころころ変わるが、keep-me-contributingの、Android版よりChromeプラグイン版を先に作る方針に変更。  
GitHubのFaviconを変える、という実装が思いついた。  
そのためにあれこれ脱線して設定などいじっていたらそれで時間を使い果たしてしまったorz。

# 2016-02-21

Tokyo Haskell Meetupにてstackのソースをバリバリ読んだ。  
現在問題となっている、S3から何かをダウンロードする箇所は特定できなかったが、
平行並列本で読んだことの復習になったりしてまぁまぁ参考になった。

NixOSについては一緒に来ていたEricさんにも聞いたが、
どうも今のstackの仕様上、nixにすでにあるHaskellのパッケージと協調して動くことはできないらしい。  
辛い。 https://github.com/commercialhaskell/stack/issues/1683

# 2016-02-20

https://github.com/igrep/open-msys2-mintty のリファクタリング。  
最初に試した方法が全然うまく行かなかったのでいろいろ試行錯誤していたら汚くなったので。

Qiitaに今朝ハマったので書いた記事を投稿。
http://qiita.com/igrep/items/c50b3d119dd7bba2ef7f

Haskellもくもく会ではNixOSに悪戦苦闘。  
stackのソースを読む予定だったがあまり取り組めず。

# 2016-02-16 - 2016-02-19

keep-me-contributingでもGitHubのIssue改善フォーム、でもなくMSYS2のbashをワンクリックで立ち上げるためのスクリプト書いてた。速く仕上げちゃおう。

https://github.com/igrep/open-msys2-mintty

# 2016-02-15

keep-me-contributingをAndroidアプリ化する準備。  
既存のプロジェクトディレクトリにそのままAndroidのビルド情報を流せるかやってみてる。

# 2016-02-14

GitHubのIssueを改善するフォーム作り、冷静に考えてやっぱり今作っても即使えるわけじゃないしなぁ、
と思って一旦開発を中断しようかと思い、他のタスクの見直しをしてた。
それで、Elmも置いといて再びAndroid開発をしようということで
keep-me-contributingをIntelliJで開発できるよういろいろ整備しているところ。
また途中で放り投げてしまい情けない。

GitHubのIssueを改善するフォームについては、
自前で作ったIssue登録用フォームをGitHubに置けるようにしよう、
というのが趣旨だが、
そもそもそんな提案を受け入れてもらえるかどうか、セキュリティ的にどうなのよ、
と思ったことや、
[GitHub自身が改善に乗り出している](https://github.com/dear-github/dear-github/pull/115)
そうなのでその結果をある程度見てからでもよいかな、と思ったことが理由にある。  
いずれも開発開始前に十分分かりそうなことなので情けない。

あ、あと、今のうちにもうちょっとAndroidアプリ作りに慣れておけば
[今度のハッカソン](http://www.bk.mufg.jp/innovation/fintech2016/)で少し幅の広いことができるかな、
と思ったこともある。  
これもまだ参加できるか分からんけどね。

# 2016-02-13

GitHubのIssueを改善するフォーム作りの続き。

# 2016-02-12

JavaでMonadを説明する話を前から書いているのでその続き。

# 2016-02-11

GitHubのIssueを改善するフォーム作りの続き。

# 2016-02-09

JavaでMonadを説明する話を前から書いているのでその続き。

# 2016-02-08

GitHubのIssueを改善するフォーム作りの続き。

# 2016-02-07

[Shinjuku.hs](https://shinjukuhs.doorkeeper.jp/events/37998)にて
Qiitaに前から書こうと思っていた[Rubyの記事の英語版](http://the.igreque.info/posts/2016/01-object-send-considered-harmful-en.html)を投稿。  

退職エントリーなんぞに時間をかけているうちにHaskellのことはあんまりできなかったものの、
Thunderbirdのフィルターを自動作成するスクリプトの作成開始。できるだけ簡単に済まそう。

あと、Haskellもくもく会のことを共有したり、ちょっと他のメンバーをサポート。

# 2016-02-06

[Qiitaにこの前Unisonをビルドした話](http://qiita.com/igrep/items/28eb343879aba91cf260)を投稿。

# 2016-02-04 - 2016-02-05

Qiitaに前から書こうと思っていたRubyの記事の英語版作成中。

# 2016-02-03

Qiitaに前から書こうと思っていたRubyの記事を投稿。  
http://qiita.com/igrep/items/b2fed2d467f8a16f5eb0
Rubyの記事はこれの英語版ができたら当分書かないつもり。

GitHubのIssue報告を改善するためのフォーム作成続き。  
オートコンプリートの候補が表示されないバグは直した。  
やっぱりmodelの更新しそこねが多いなぁ。Stateモナドに変わる何かがほしい。
今度は入力してもオートコンプリートの候補が更新されないバグが...

# 2016-02-02

GitHubのIssue報告を改善するためのフォーム作成続き。
入力しても文字列がすぐ消えちゃう問題は解決するも、テキストエリアにフォーカスしてもオートコンプリートの候補が表示されない問題は直せず。

# 2016-01-31

[HRRコードリーディング会](http://connpass.com/event/25191/)で日比野さんのhaskell-relational-recordについて学びつつ、前から書こうと思っていたRubyの記事を書き始めた。

# 2016-01-30

Haskellもくもく会にて、この間のTokyo Haskell MeetupでインストールしたNixOSの設定。  
Dropboxに入れていたファイルをUnison経由でやりとりできるところまでできたので、
それだけで大分今のArch Linuxに近い環境にできたはず。  
当面はOK。

あと、lotz氏に https://github.com/alpmestan/taggy-lens や https://github.com/bos/wreq を教わった。  
xml-lensよりも高機能にLensでスクレイピングできそう。

# 2016-01-29

Sansan最後の社内勉強会として、Chrome DevToolsの勉強会を開いた。  
その準備のため試しにいろいろ触ってた。

# 2016-01-27 - 2016-01-28

GitHubのIssue報告を改善するためのフォーム作成続き。
フォームの要素をテストするためのサンプルを作るもバグってたorz.  
[このへん](https://groups.google.com/forum/#!topic/elm-discuss/gqugcpzw91g)でも触れている通り、
Auto complete付きのフォーム作りは結構むずそう。  
帰り道で多分出来るであろうアプローチが思いついたので、次試す。

# 2016-01-26

GitHubのIssue報告を改善するためのフォーム作成続き。  
[以前から気になっていた、viewがTaskを返すアーキテクチャ](https://groups.google.com/forum/#!searchin/elm-discuss/view$20altapp/elm-discuss/UxhEOnJE4LE/hZy4GDA6BgAJ)だったり、自分が考えた別案を試してみたりするも、
やっぱり元のelm-architectureでよくね？とか思うだけで終わり。  
「アクション実行 =\> ローディング画面表示 =\> 結果表示」という流れを表現するのが煩わしい問題を解決するのはやはり難しいなぁ。  
アニメーションがめんどいのと根っこは同じなんだろう。

# 2016-01-25

JavaとSMLのお勉強。SMLのmodule機構が前からちょっと気になってた。

# 2016-01-24

GitHubのIssue報告を改善するためのフォーム作成ちょっと進めた。

# 2016-01-23

Javaのお勉強。パーフェクトJavaのリフレクションの章まで読んでアノテーションの途中。

# 2016-01-22

[vim-addon-local-vimrcについて気になっていた最後の問題を解決するPR](https://github.com/MarcWeber/vim-addon-local-vimrc/pull/13)を送った。  
設定項目の名前など、つまらないことで悩んでしまったと思う。  
無理に設定項目を追加しなくても、自前のvimrcで工夫すれば十分な問題という気もするが、
問題になるケースはありふれていると思うので、提案してみた。  
やっぱり人様のソフトを修正するのは難しいなぁ。

GitHubのIssue報告を改善するためのフォーム作成開始。  
とりあえずElmで使えるものを想定して作成中。

# 2016-01-18 - 2016-01-21

Javaのお勉強。パーフェクトJavaの非同期処理の話まで読んだ。

# 2016-01-17

以前からこっそり作成して使っていた、vimで開いたファイルをbatファイルとして保存して、後で開きやすくする小さなvim pluginのバグを直して公開。
https://gist.github.com/igrep/ad5acc8ca4b0e51bd122

# 2016-01-16

[vim-addon-local-vimrcに、読み込もうとしているvimrcファイルの中身を確認する機能を追加したPull Request](https://github.com/MarcWeber/vim-addon-local-vimrc/pull/12)。

# 2016-01-12 - 2016-01-15

Javaのお勉強や、keep-me-contributingのAndroidアプリ化に向けてのお勉強。

# 2016-01-11

vimの設定の改善、スマホからでもこのリポジトリに書き込めるよう設定するなどの雑務、Javaの勉強。  
体調を崩してしまいほとんどPCを触れず。

# 2016-01-10

前々から気になっていた、[vim-addon-local-vimrcのバグを直すPull Request](https://github.com/MarcWeber/vim-addon-local-vimrc/pull/11)。  
他にもいろいろ改善したいね。

# 2016-01-09

パーフェクトJavaを読んでJavaの学習を開始。

# 2016-01-07 - 2016-01-08

かねてからやろうと思っていたChrome Developer Tools勉強会のために、Developer Toolsの素振り。

# 2016-01-04

- 問題なく動いているようだったのでElmでの小遣い帳アプリを携帯にデプロイ。  
  してすぐ気づいた。スマホ向けに画面のサイズを調整してなかった...。

# 2016-01-03

- Elmでの小遣い帳アプリ開発。昨日詰まってしまったバグはどうやら直った模様。  
  念のための細かい確認は明日やろう。思いの外あっさり直せた。

# 2016-01-03

- [Add elm.snip to Shougo/neosnippet-snippets](https://github.com/Shougo/neosnippet-snippets/pull/93)
- Elmでの小遣い帳アプリ開発。エラーメッセージを更に詳しくした。ファイルを選ぶ機能についてはできた、と思ったら結構バグってしまってできなかった...。

# 2016-01-02

Elmでの小遣い帳アプリ開発。  
ようやく取得した小遣い帳ファイルから集計する処理とエラー処理を実装。  
あとはエラーメッセージをもうちょい優しくして、ファイルを選ぶ機能だ。

# License

This work is licensed under the Creative Commons Attribution 4.0 International License.  
To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.
