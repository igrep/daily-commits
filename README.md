<!--
Execute this vim command to push updates of this file:

:execute "!" . expand('%:p:h') . "/update.sh"
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

# 2015-06-23

- chrome-mysql-adminの環境整備。package.jsonをいじって適当にバージョンあげたら例のエラーがなくなった。もう遅いのでPRはまた明日...。
- 会社の環境にも`grunt`コマンドをインストール。`npm install -g grunt-cli`すればよかったのね。
- ホッとしつつchrome-mysql-adminのディレクトリで`grunt`を実行するもまたエラー... どうもproxyをうまく扱えていないらしい。

    ```
    Running "bower:install" (bower) task
    /home/yu/Dropbox/prg/foreign/chrome_mysql_admin/node_modules/grunt-contrib-compass/node_modules/tmp/lib/tmp.js:261
      throw err;
              ^
    TypeError: Request path contains unescaped characters.
        at new ClientRequest (_http_client.js:73:11)
        at TunnelingAgent.exports.request (http.js:49:10)
        at TunnelingAgent.createSocket (/home/yu/Dropbox/prg/foreign/chrome_mysql_admin/node_modules/grunt-bower-task/node_modules/bower/node_modules/request/node_modules/tunnel-agent/index.js:117:25)
        at TunnelingAgent.createSecureSocket [as createSocket] (/home/yu/Dropbox/prg/foreign/chrome_mysql_admin/node_modules/grunt-bower-task/node_modules/bower/node_modules/request/node_modules/tunnel-agent/index.js:184:41)
        at TunnelingAgent.addRequest (/home/yu/Dropbox/prg/foreign/chrome_mysql_admin/node_modules/grunt-bower-task/node_modules/bower/node_modules/request/node_modules/tunnel-agent/index.js:80:8)
        at new ClientRequest (_http_client.js:154:16)
        at Object.exports.request (http.js:49:10)
        at Object.exports.request (https.js:136:15)
        at Request.start (/home/yu/Dropbox/prg/foreign/chrome_mysql_admin/node_modules/grunt-bower-task/node_modules/bower/node_modules/request/request.js:584:30)
        at Request.end (/home/yu/Dropbox/prg/foreign/chrome_mysql_admin/node_modules/grunt-bower-task/node_modules/bower/node_modules/request/request.js:1212:28)
    ```


# 2015-06-22

- 空き時間に会社のPCにもchrome-mysql-adminを開発する環境を整えようとするも、今度は`npm install -g`したはずのgruntの実行ファイルが見当たらない。findコマンドでも全然ヒットしなかった。自宅ではpacmanで入れたからだろうか？しかし昨日はそれでエラーになったぽいんだけど...。どこで入れるのがいいんだ...。

# 2015-06-21

- 社内LT大会の資料完成。
- 仕事で使うかもしれなくなったので<a href="http://www.amazon.co.jp/gp/product/4873117097/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4873117097&linkCode=as2&tag=poe02-22">Serverspecの本</a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=poe02-22&l=as2&o=9&a=4873117097" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />を一昨日から購入して読んでる。割と読みやすくてこれなら1周間もかからないだろう。
- 前から気になっていた[Chrome MySQL Admin](https://github.com/yoichiro/chrome_mysql_admin)をfork。これを私のフロントエンド道の第一歩にしたい。
    - まだnpmもbowerもgruntも入れてなかったので両方共`sudo npm install -g`した。globalにインストールするからsudoが要るのね...。
    - `grunt`してみるも`Fatal error: Arguments to path.join must be strings`なるエラーが出て辛い。どうやら依存しているツール群のバージョンが古いのが問題らしい。オプションでスタックトレース出したり出来ないのかな...。

# 2015-06-20

社内LT大会の資料作り、と言いつつQiita記事書く。結局またRuby、しかもRSpecなんですけどね。

# 2015-06-19

- beatupのテストがだいたい書け、だいたいアイディアのプロトタイプになるようなコードは書けた。  
  例外や結果の扱いなど、まだまだ実際にリリースする前に考えるべきケースはあるものの、一旦放置したい。  
  なんだか他のことをしたくなった。Rubyに飽きた飽きたと言いつつ結局書いてるのも悲しい。

# 2015-06-16 - 2015-06-18

- beatupのテストを書いてる途中。

# 2015-06-15

- beatupのテストを書いてる途中。
- [googleauthというgemに小さなPull Request](https://github.com/google/google-auth-library-ruby/pull/30)
- [Lens&Prism勉強会まとめ記事における、誤った表現の修正](https://github.com/igrep/igreque.info/commit/0ecae48777ec73ae948710bd0420568f9d723f3a)

# 2015-06-14

- beatupのテストを書いてる途中。

# 2015-06-13

- beatupのテストを書いてる途中。
- みなとRuby会議02 スピーカーへの応募。

# 2015-06-12

- [LambdaConf 2015私的まとめの日本語訳](http://the.igreque.info/posts/2015-06-12-lambdaconf-ja.html)完成。
    - それに合わせて英語版も微修正。

# 2015-06-10 - 2015-06-11

- LambdaConf 2015私的まとめの日本語訳
- 仕事で使うことになった[legato](https://github.com/tpitale/legato)にいくつかIssueやPRを送った。相変わらずしょうもないところだけど。。。
    - [Correct weird use of lambda](https://github.com/tpitale/legato/pull/96)
    - [Correct numbering by indenting code blocks](https://github.com/tpitale/legato/pull/95)
    - [Why not Legato::User#segments and Legato::User#goals?](https://github.com/tpitale/legato/issues/97)
    - [add Legato::User#segments and Legato::User#goals](https://github.com/tpitale/legato/pull/98)

# 2015-06-09

- [Lens&Prism勉強会私的まとめ完成](http://the.igreque.info/posts/2015-06-09-lens-prism.html)

# 2015-06-08

- 引き続きLens&Prism勉強会私的まとめ
- [全角アルファベットやひらがな・カタカナを入力しても（ちょっと）いい感じに解釈してくれるvimrc](http://qiita.com/igrep/items/2c0dae6242eed5baf172)を書き、[そこからふらっと思いついたvimプラグイン](https://github.com/igrep/sokuon.vim)を作ってみるも、動かんorz。

# 2015-06-06 - 2015-06-07

- Lens&Prism勉強会私的まとめ

# 2015-06-05

- 表参道.rb #1 にて発表時に気づいた諸々の修正など。

# 2015-06-04

- [表参道.rb #1 にて発表](http://the.igreque.info/posts/2015-06-04-omotesandorb.html)。

# 2015-06-03

- [Finished writing entry about LambdaConf 2015 (in English)](http://the.igreque.info/posts/2015-05-26-lambdaconf-en.html).
- 表参道.rb #1 のLTの資料作り。

# 2015-06-02

- Still writing entry about LambdaConf 2015.
- Reported issue: https://github.com/azu/github-reader/issues/5

# 2015-05-31 - 2015-06-01

Still writing entry about LambdaConf 2015.

# 2015-05-30

Lens&Prism勉強会に出席。  
この手の勉強会は自分の興味に合う発表がなかなかなく、発表したほうが面白いことが多いと感じていたが、
今回は流石にトピックを絞っただけであってか、面白かったし楽しかった。  
感想エントリ書いてる暇あるか？

Still writing entry about LambdaConf 2015.

# 2015-05-26 - 2015-05-29

Writing entry about LambdaConf 2015.

# 2015-05-25

predefを完成させた。あとは適当なタイミングでリリースするだけ。
Writing entry about LambdaConf 2015.

# 2015-05-24

LambdaConf 2015 Day 3 today! I took part in these activities and workshops:

- Hiking (lot of fun!)
- Write Adventure Game in Elm.


# 2015-05-23

Haskell環境をAWSに構築するスクリプト作成中。
itamaeのrecipe.rbを作成。

LambdaConf 2015 Day 2 today! I watched these presentations:

- Missed! ~~The Abstract Method, In General~~
- Pattern Functors: Wandering Around Fix-points, Free Monads and Generics
- Give me Freedom or Forgeddaboutit: What Does "Free" Really Mean?
- Finally Tagless DSLs and MTL
- Accelerating Haskell: GPGPU Programming with Haskell
- In Rust We Trust
- Introduction to Intuitionistic Type Theory
- Missed! ~~Type Theory and its Meaning Explanations~~
- Introducing Emily: Simplifying Functional Programming
- The Next Great Functional Programming Language

# 2015-05-22

Haskell環境をAWSに構築するスクリプト作成中。
beatupやpredefのtest caseを途中まで書いた。

LambdaConf 2015 Day 1 today! I took part in these workshops:

- [Write Some Idris](https://github.com/degoes-consulting/lambdaconf-2015/tree/master/speakers/puffnfresh)
- [Developing Web Applications with Haskell](https://github.com/serras/lambdaconf-2015-web)

I was planning to take part in, but I missed most of these because I felt bad by jet lag during them:

- [A Practical Introduction to Haskell GADTs](https://github.com/degoes-consulting/lambdaconf-2015/tree/master/speakers/goldfirere)
- [LiquidHaskell: Refinement Types for Haskell](http://ucsd-progsys.github.io/liquidhaskell-tutorial/)

# 2015-05-19 - 2015-05-21

Haskell環境をAWSに構築する方法模索中。  
Arch Linuxで行う方向からDebianでやることに。  
全部スクリプトでやらなくても、とりあえず試して体感速度を測ってみるのを優先しよう。

# 2015-05-18

[使用しているgem jbuilderの最新版がバグっていたので報告](https://github.com/rails/jbuilder/issues/269)。

『「やらなければならないこと」としてのHaskellのMonad』を翻訳完了。

あと、Haskellをビルドする用のCI環境をAWSかなんかに構築する計画を再び妄想し出したり。  
ホントはLambdaConf前にちゃんとやっておくべきだったんだろうけど、ちょっと時間ないなー。

# 2015-05-17

『「やらなければならないこと」としてのHaskellのMonad』を翻訳ほぼ完了。  
あとは細かいところ直したり。

# 2015-05-15 - 2015-05-16

引き続き『「やらなければならないこと」としてのHaskellのMonad』を英語に翻訳中。

# 2015-05-14

引き続き『「やらなければならないこと」としてのHaskellのMonad』を英語に翻訳中。  
あと、fujimuraさんの[日本語訳リポジトリにちょっとPR送ったり](https://github.com/fujimura/learnhaskell/pull/1)。

# 2015-05-13

引き続き『「やらなければならないこと」としてのHaskellのMonad』を英語に翻訳中。  
すごい細かいところでは[Chrome MySQL AdminのWebサイトのtypoを報告したり](https://github.com/yoichiro/chrome_mysql_admin/issues/24)。  
このリポジトリには真面目に自分で手を加えたい。

# 2015-05-07 - 2015-05-12

引き続き『「やらなければならないこと」としてのHaskellのMonad』を英語に翻訳中。  
引っ越しのためあまり時間を割けないorz

# 2015-05-06

『「やらなければならないこと」としてのHaskellのMonad』を英語に翻訳中。  
LambdaConf 2015のunconferenceあたりで発表できたらなあ、なんて淡い期待による。  
ダメなら記事にしてHaskell CafeかReddit辺りに流してみるといい感じに斧が投げられるかも。  
準備だけしてすぐ終えるつもりが、昨日igreque.infoのhakyllの設定を速い方のPCで変えまくったおかげで遅い方のPC(Chromebook)でrebuildが必要になり、終わらない。  
やっぱりChromebook上でのビルドはCIサーバーを別に用意してやらせたいな...。

# License

This work is licensed under the Creative Commons Attribution 4.0 International License.  
To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/.
