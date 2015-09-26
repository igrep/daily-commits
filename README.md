<!--
Execute this vim command to push updates of this file:

:w | execute "!" . expand('%:p:h') . "/update.sh"
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

# 2015-09-26

- 次回表参道.rbに備えた資料の修正。次回かその次で最後の参加にできるか。
- Workerがnotifyするタイミングを管理するフォームのテストの作成。  
  実装が先に思い浮かんだり、実装を書きながらいろいろ考えつくので、
  ついついテストファーストするのをためらってしまう。

# 2015-09-25

社内LT大会発表。  
概ね想定したとおりに発表でき、受けも良かった。  
ただ、当日になっていろいろ間違いがあることに気づいたため、表参道.rbの発表前にはちゃんと直さねば。  
新しいAPI触るのは難しいなぁ。

# 2015-09-24

社内LT大会向け資料作り。表参道.rbでも使用する予定。  
Service Workerをネタにすることにした。  
作成中に今更気づいたのだが、どうやらkeep-me-contributingの目的には、
Service Workerは（少なくとも今の仕様では）使えないらしい。。。  
自分なりにスケジューラーを書いて工夫したが、
結局、決まった時間に処理を実行するAPIが出来ない限りどうしようもないのだ。  
調べて気づかなかったのが痛い...。仕方ないのでAndroid版は諦めて、
当面はPC版でのDedicated Workerを使ったバージョンのみサポートすることとしよう。。。

# 2015-09-23

`goog.ui.Component`や`goog.ui.Control`と一日中挌闘して、
Workerがnotifyするタイミングを管理するフォームの作成。  
改めてclosure libraryの難しさを思い知った。  
個々の抽象度の高いライブラリが何のためにあるのか、何に便利なのか理解するのにすごく手こずった。  
closure libraryのdemosに入っているファイルを開くと結構イメージが湧いてありがたかった。

# 2015-09-22

- Workerで使用するライブラリ完成。  
  昨日不安に感じた点をテストするスクリプトを書いたりした。
  随分カバー領域が奇妙なテストがいくつも出来てしまったが、
  まぁ僕自身の不安を取り除くことに役立っているのでよいでしょう。
- 先週見なおしたWorkerのScheduleを管理するControllerの設計をさらに見直し、
  よりMVCっぽく洗練させた。  
  やっぱり実際に使用するシーンを考えて作ってみるといろいろ見えてくる。
- [このへん](http://googledevjp.blogspot.jp/2015/04/service-worker-google-developers-summit.html)を
  参考に、各所で使用するアイコンを作成した。
- あとはWorkerのScheduleを設定する画面と、
  それをlocalStorageあたりに保存する処理の実装だけ。
  やっぱり[#4](https://github.com/igrep/keep-me-contributing/issues/4)
  ぐらいは簡単に実装しようかなぁ。

# 2015-09-21

Workerで使用するライブラリ概ね完成。  
最後の方テストを一切書いていないのが痛い。
ただ直接動かして動作確認しないと確信が持てない場所でもあるが...。

# 2015-09-20

Workerで使用するライブラリ作成中。  
まだ設定した時刻に関数を実行するライブラリの途中。

# 2015-09-19

Haskellもくもく会なんでHaskellでコマンドを作ろうと思ったが、`stack new`するところでハマり、stackのソースを読むことに。
原因は単にstackのバージョンが古いだけだったが、まぁちょっと勉強になったし無事解決して記事も書けたしよかった。

http://qiita.com/igrep/items/42130f58fb18da55e8c3

# 2015-09-17 - 2015-09-18

Workerで使用するライブラリ作成中。  
ちょっとClosure Libraryに足りないものが見つかったため、初めてPull Requestを送ってみた。  
https://github.com/google/closure-library/pull/561

追記: 結局、他の関数で充分やりたいことはできるだろってことでcloseした。  
まぁ、よく考えたらそんなに頻繁に使う処理ではないしなぁ。  
CPS変換したらかなり汎用的な関数になると思うんだけど、まぁCPS変換してないし、仰々しすぎるし。

# 2015-09-16

Workerで使用するライブラリ作成中。

# 2015-09-15

Service Workerの設計をもう一度見直し、13日にやったことをほぼすべて取り消した。  
先週やったことの大半が無駄となってしまって残念だが、
何はともあれようやく形になりそうなイメージが湧いてきた。

もっと早く実装にとりかかるべきだったのか、図を描いて頭を整理すべきだったのか、
先週あまり時間を取れなかったせいもあったとはいえ、とにかくちゃんと整理できていなかったのが痛い。

# 2015-09-13

Service Workerで使用するライブラリのテスト作り。  
テスト用のWorkerを作ったり、なんか面倒なことをしてしまっていて、進みが悪い。。。

# 2015-09-10

Service Workerを直接動かしての単体テストは諦め、
Service Workerで使用する予定のライブラリ群をテストするよう別のファイルにビルドすることとした。  
アプリケーションで実際に動かすコードとは分けたいため、workerのテスト専用ファイルとしてビルドすることとした。

Service Workerでクライアントと通信する仕組みはそれはそれで気になるので調べているが、
今回はテストでもアプリケーションでも必要がないため、これでいいだろう。
最低限、postMessageとかの振る舞いは昨日書いたコードで充分確認できたし。  
結果的に嫌でもService WorkerのAPIから分離した設計にできるのも良いかも。

# 2015-09-09

Service Workerのテストを書くのに挑戦するも、うまく行かず。  
worker側から呼び出したWindowのコード（`navigator.serviceWorker.register`したコード）に対して
messageを送る方法がわからないため、ブラウザに結果を送れない。
てっきりWeb Workerと同じような感覚で`postMessage`を呼べばいいのかと思いきや、どうも違うらしい。  
Service Workerは呼び出したWindowが閉じていても動くものであるため、
Service Workerの趣旨に合わないのはなんとなくわかる気がするのだが、
さてどうテストしたものだろうか？

# 2015-09-07

keep-me-contributing, faviconを追加。  
やっぱりいざ使ってみると寂しく見えるものだ。  
Androidのホーム画面に追加した時に使用されるかな？と思ったけどアイコンだけだった。
やっぱり[この辺に書いてあるように、Web Manifestを使わんと](http://googledevjp.blogspot.jp/2015/04/service-worker-google-developers-summit.html)ダメなのね。  
Service Workerができたら同時に対応しよう。

また、workerとブラウザクライアントで使用する予定のvalue objectを追加。敢えてそこだけボトムアップに作ってみた。  
次はこれをSchedulerに転送するところから。

# 2015-09-06

keep-me-contributing, 今日はService Worker関連の機能に集中するつもりだったが、
やめてherokuへのデプロイとweb pageの見た目の修正を中心に行った。   
ふと考えてみればService Workerを使わなくとも、
ただ単にweb pageを開いた時に、その日contributeしたかを教えてくれるだけでも欲しい機能なのだ。  
それは当初から計画していた機能だし、充分に有用なので、優先順位を変えた。

# 2015-09-05

keep-me-contributing, 期間が空いたことが原因なのか、思うように進まず。  
Service Workerの中でやることを考え、必要なクラスを検討したり、
ライブラリのアップデートやCSSの設定など、放置していたタスクに取り組んだりした。
まだまだやることは多いけど、ここでダレてしまったら全て終わりだ。
気を引き締め直そう。

# 2015-09-04

Haskellポエムめいたものをちょっと進めた。

# 2015-09-03

表参道.rbの発表を行うも、イマイチ。  
[Yokohama.rb #50 の時](http://the.igreque.info/posts/2014-11-16-yokohama.rb-50.html)の時ほどではなかったが、
発表時に結構緊張してしまい、面白く喋れず。  
どうすればこうした現象を防げるのか。  
事前に自分の中で楽なムードを無理に保とうとするのが原因なんだろうか？  
前の発表者のテンションに引きずられてしまうのが原因なんだろうか？  

僕自身の発表の時を含め、Twitterも会場もすこぶる盛り上がりが悪かった。
企画自体もわかりづらいしみんな発表しにくいものだったのかもしれない。

# 2015-09-02

有給明けながら体調を崩し、午後休をいただきつつ久々に「関数プログラミング実践入門」の続きを読んだり
東京Node学園で聞いていた[co](https://github.com/tj/co)について復習。
なんか\@teppeisさんのWEB/DB PRESSの記事で聞いた時と随分APIが違うような気がするけど同じライブラリなのか...?

あと、表参道.rbのスライドを微調整。ボスにも認めて頂けてよかった。

# 2015-09-01

会社からの有給2日目。  
随分ダラダラ過ごしてしまったが、ノルマである次回表参道.rbの資料は完成。  
後はボスの許可を得るだけ。

# License

This work is licensed under the Creative Commons Attribution 4.0 International License.  
To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.
