<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

# 2016-08-28 - 2016-08-29

Haskell Day 2016の発表資料作成中。

# 2016-08-28

第34回Haskellもくもく会にてHaskell Day 2016の発表資料作成。眠気のせいかあまり進まず。

いよいよ[JavaでMonadを説明する話](http://the.igreque.info/posts/2016/04-monad-in-java.html)を公開。  
残念ながら今のところあまり反応は芳しくない...。  
とりあえずタイトルは目を引いたようだけど...。

# 2016-08-26 - 2016-08-27

Haskell Day 2016の発表資料作成中。

# 2016-08-23 - 2016-08-25

JavaでMonadの説明。修正箇所の読み返し。

# 2016-08-22

Haskell Day 2016の準備開始

# 2016-08-21

JavaでMonadの説明。フィードバックを受けての修正。  
一通り終わったのでそろそろ共有しよう。

# 2016-08-20

JavaでMonadの説明。フィードバックを受けての修正。

[プリキュアハッカソン 4](http://connpass.com/event/34307/)にてHaskell Dayの準備をしようと思うも、持ってきたPC(Chrome OS上でchrootしたDebian)でDockerが動かないという事実が発覚し、あえなくあきらめることに。  
代わりに以前からやろうと思っていた、かつ、時間的に可能そうだった、[プリキュアの名前をLensでリストアップする件](https://gitlab.com/igrep/list-precures-with-lens)をやってみた（特に公開できるような状態ではないのでprivateにしている）。  
発表もぐだぐだで残念な成果になってしまったけど、ちょっとだけLensへの理解が深まったのでいいか。

# 2016-08-19

JavaでMonadの説明。フィードバックを受けての修正。

# 2016-08-18

JavaでMonadの説明。フィードバックを受けての修正。

明後日のプリキュアハッカソンでやるネタの方向を転換すべく、relabellerの進捗を見直したりしてた。  
やっぱりDocker integrationネタがよさそう。

# 2016-08-17

JavaでMonadの説明。フィードバックを受けての修正。

lovely-communeのElm 0.17移植。Touchモジュールがなくなってしまったことで完全に元の機能を再現するのは困難であることが発覚。  
まあ、とりあえずはPCで動かすことだけ考えるか…。
それから、Signalが使えなくなったので、マウスカーソルの座標からカーソルが乗っている要素のIDへの変換をJSレベルで行わなければならないことまで分かった。  
やはり時間かかりそう…。

# 2016-08-11 - 2016-08-16

JavaでMonadの説明。フィードバックを受けての修正。

# 2016-08-10

lovely-communeのElm 0.17移植。

# 2016-08-09

lovely-communeのElm 0.17移植開始。  
igrep-cashbookの件は一旦置いといてプリキュアハッカソンに向けて準備。

JavaでMonadの説明。フィードバックを受けての修正。

# 2016-08-08

JavaでMonadの説明。フィードバックを受けての修正。

# 2016-08-07

JavaでMonadの説明。ありがたいことに知人から早くもフィードバックが来た。  
想像以上に厳しいものだったので、ちょっと戸惑いつつも早速対応。  
冒頭からずばずばと来てうれしい悲鳴が上がった。

Elm版igrep cashbookで見つけたElmのバグらしき挙動について、大体ドキュメントができた。  
いざメールを送ろうかと考えたところで、warpの代替サーバーとして選んでいた[http-server](https://www.npmjs.com/package/http-server)を正しくサポートできていないことに気づく。  
Elm版igrep cashbookはすべてクライアントサイドの機能だけで実装するという特殊な仕様のため、cashbookファイルの読み込みを外部のdirectory listingをサポートしたWebサーバーに依存しているのだ。  
なのでこれまで[wai-app-static](https://hackage.haskell.org/package/wai-app-static)にくっついたwarpで動かしていたところを、今回もっと導入が簡単であろうhttp-serverで動かすよう手順を書いたのだが、実はサポートできてなかった...。
うーん、本質的でないところで止まってしまったなぁ。どうしよう。

# 2016-08-06

JavaでMonadの説明。ここまでで修正したところを確認し、何人かの知人にレビューを依頼。

# 2016-08-05

JavaでMonadの説明。State Monadについて修正した箇所についての見直し。

Elm版igrep cashbookで見つけたElmのバグらしき挙動について、elm-discussで報告するため、ドキュメント記述中。

# 2016-08-01 - 2016-08-04

JavaでMonadの説明。State Monadについて修正した箇所についての見直しと修正。

# 2016-07-31

JavaでMonadの説明。State Monadの説明修正完了。

# 2016-07-30

Elm版igrep cashbookで見つけたElmのバグらしき挙動について、elm-discussで報告するため、ドキュメント記述中。

# 2016-07-28 - 2016-07-29

JavaでMonadの説明。レビューお願い前の最後の見直し。  
State Monadの説明で、Java 8の機能に依存しすぎな説明があったので修正中。

# 2016-07-25 - 2016-07-27

JavaでMonadの説明。レビューお願い前の最後の見直し。

Elm版igrep cashbookの機能追加、どうもelm-coreのバグっぽいものにぶち当たってしまったらしい。  
elm-discussで相談からかな…。  
と、言うわけで相談のための準備中。仕事がめちゃくちゃ忙しいのでなかなか時間をとれず。

# 2016-07-23 - 2016-07-24

Oracle アーキテクチャー読んでただけだった…

# 2016-07-22

JavaでMonadの説明。レビューお願い前の最後の見直し。

# 2016-07-19 - 2016-07-21

JavaでMonadの説明。レビューお願い前の最後の見直し。

自分用cashbookの引っ越しに向けた機能追加。

# 2016-07-18

JavaでMonadの説明仕上げ。後もう一度見直したらレビューを誰かにお願いしよう。

# 2016-07-17

ポートもくもく会にてJavaでMonadの説明仕上げ。ほぼほぼできた感じ。  
LTで概要の発表もしてきた。

# 2016-07-16

JavaでMonadの説明仕上げ中。明日のもくもく会までにどこまで行けるかしら。

# 2016-07-15

JavaでMonadの説明を完成させるため、サンプルコードをちょっとだけ修正したり、Monadの使い方解説の続きをちょっとだけ書いたり。

# 2016-07-14

JavaでMonadの説明を完成させるため、サンプルコードをコンパイル通すために書き換え中。

# 2016-07-13

JavaでMonadの説明を完成させるために、家のPCにブログを書く環境を再構築したり、サンプルコードの書き換えを行ったり。

# 2016-07-11 - 2016-07-12

HaskellのMonad使い方の解説続き。

# 2016-07-10

自分用cashbookのElm 0.17版完了。  
9日の時点で終わったと思いきや、テストとかを移植できてなかったり、elm-webpack-loaderのバージョンが古くてできてなかったりだった。

# 2016-07-07 - 2016-07-09

自分用cashbookのElm 0.17版続き。

# 2016-07-06

自分用cashbookのElm版をようやくElm 0.17に移植。  

HaskellのMonad使い方の解説続き。

# 2016-07-05

自分用cashbookのElm版をようやくElm 0.17に移植。

JavaでHaskellのMonadを解説する記事の続き。  
タブレットだけで書ける部分はもう終わってた。

# 2016-07-04

自分用cashbookのElm版をようやくElm 0.17に移植開始。

JavaでHaskellのMonadを解説する記事の続き。  
タブレットだけで書ける部分はもうすぐで終わりそう。

# 2016-07-02 - 2016-07-03

Haskell版FactoryGirl的なの続きをちょっとだけ。

# 2016-06-30 - 2016-07-01

JavaでHaskellのMonadを解説する記事の続き。  
来月中には終わる...かな？

# 2016-06-26 - 2016-06-29

Haskell版FactoryGirl的なの続き。

JavaでHaskellのMonadを解説する記事の続き。

# 2016-06-23 - 2016-06-25

Haskell版FactoryGirl的なの続き。

# 2016-06-21 - 2016-06-22

JavaでHaskellのMonadを解説する記事の続き。

# 2016-06-18 - 2016-06-20

Haskell版FactoryGirl的なの続き。設計にぐだぐだ悩んでしまう。

# 2016-06-12 - 2016-06-17

Haskell版FactoryGirl的なの続き。

JavaでHaskellのMonadを解説する記事の続き。

# 2016-06-11

ボスが「JavaにFactoryGirl的なものがない」とぼやいていたのでHaskellで作り始めた。

JavaでHaskellのMonadを解説する記事の続き。

# 2016-06-09 - 2016-06-10

monad-loggerに日付でのlog rotation機能を追加するパッケージの作成続き。

JavaでHaskellのMonadを解説する記事を再開。

# 2016-06-06 - 2016-06-08

monad-loggerに日付でのlog rotation機能を追加するパッケージの作成続き。

HaskellのMonadの解説続き。

# 2016-06-05

Haskellのレコードをちょっと使いやすくするライブラリの続き。

monad-loggerに日付でのlog rotation機能を追加するパッケージの作成続き。

それぞれちょっとずつ。

# 2016-06-04

第32回Haskellもくもく会にて、[Haskellのレコードをちょっと使いやすくするライブラリ](https://gitlab.com/igrep/haskell-relabeller)作成開始。  
日比野さんにもいろいろ助けていただいたのでhasmokuでやってよかった。

# 2016-06-03

HaskellのMonadの解説続き。

monad-loggerに日付でのlog rotation機能を追加するパッケージの作成続き。

# 2016-06-02

HaskellのMonadの解説続き

# 2016-05-28 - 2016-06-01

monad-loggerに日付でのlog rotation機能を追加するパッケージを作成。

あと、hubotでやってみた話の続き。  
ようやく自分のslackチームで動くことを確認できたので安心。

# 2016-05-27

HaskellのMonadの解説続き

# 2016-05-26

GCの本読んだだけで終わってしまった。

# 2016-05-23 - 2016-05-25

HaskellのMonadの解説続き

# 2016-05-22

Haskellで[resoutce-pool](https://hackage.haskell.org/package/resource-pool)というパッケージを試実験。  
とりあえず、コネクションを1個だけ作ってSQLを発行するコードを試した。

後はログ関係のライブラリをいろいろ調べたり。

# 2016-05-21

hubotでやってみた話の続き。  
CoffeeScript使いたくない一心でES6を使ったことが仇となったのか、
ローカルでは動くのにherokuにpushしても動かないorz  
どうもbabelでコンパイルできてないらしい。

直し方考えるのもめんどいし、大した量じゃないので敢えてES5に書きなおしちゃおうかなぁ。

# 2016-05-20

HaskellのMonadの解説続き

# 2016-05-19

haskell-relational-recordでOracleを動かす実験を再び進めた。  
前日に職場でうまく動かなかった箇所を直した。  
ハマった当時は超絶望で翌朝までそのことで頭がいっぱいだったが、実際には他愛ないことで、HDBCの`commit`を呼び忘れてるだけだった...。

# 2016-05-13 - 2016-05-18

HaskellのMonadの解説続き

# 2016-05-12

眠れなかったので突然思い立って、会社のチームメンバーに向けてHaskellのMonadの解説を書いてた。  
ある程度できたら公開する。

# 2016-05-11

haskell-relational-recordでOracleを動かす実験続き。  
Insert文を発行するコードを書いてた。

# 2016-05-10

haskell-relational-recordでOracleを動かす実験続き。  
やっとコンパイルできた...。linksの設定はやっぱりstackのオプションを都度設定するようスクリプトを書いて解決。

JavaでMonadを説明する記事引き続き。

# 2016-05-09

haskell-relational-recordでOracleを動かす実験続き。  
今度はコンパイル時にDBに繋げない現象に出くわした。Dockerのlinksが設定されていないからだ...。

JavaでMonadを説明する記事引き続き。  
こちらのモチベーションを維持するのがしんどくなっているので頑張らないと。

# 2016-05-08

haskell-relational-recordでOracleを動かす実験続き。  
今度はstackのdocker integrationの設定や、docker-composeとその兼ね合いに苦戦。  
よくわからないエラーに苦しむことはなかったものの、結局つなぐところまでで力を使い果たす。  
しかし、今度こそHaskellのプログラムからODBCでOracleに接続できたぞ...。  
明日からは今度こそもっとHaskellを書けるはず...。

# 2016-05-07

haskell-relational-recordでOracleを動かす実験続き。  
docker-composeを使い、DB用のimage・ビルド兼クライアント用のimageを動かす設定を書いたのだが、
ここでもなかなかつながらず、苦戦。ビルド兼クライアント用のimageからisqlでつなぐところまでで終わった。

息抜きに前からやろうと思っていたhubotもやってみた。

# 2016-05-06

JavaでMonadを説明する記事引き続き。  
そろそろ終わりにしたいのだがFutureをモナドにするところでつまずくなぁ。

# 2016-05-05

haskell-relational-recordでOracleを動かす実験続き。  
ようやくisqlでコンテナ上のOracleに接続できた。  
ODBCドライバーを積んだimageを作ることになったので、今後はその上で動くアプリを作ることになる。  
意図せずstackのdocker integrationを初めて使うことになったので嬉しいような悲しいような。  
またハマることにならないといいけど...。

[sshごしのvimからクリップボードにコピーする - Qiita](http://qiita.com/yuya_presto/items/fdb2436c23bf9f514c15)に書いてあったことを実践しようとするも、
[msys版のperlではうまく動かなかったので修正](https://github.com/yoshikaw/ClipboardTextListener/pull/1)。

# 2016-05-04

haskell-relational-recordでOracleを動かす実験続き。  
未だにisqlで接続結果を確認するところにすらたどり着けない...。

[前から書きたかったネタ](http://qiita.com/igrep/items/d482aa451af48e7e070f)をサクッと書いた。

# 2016-05-03

haskell-relational-recordでOracleを動かす実験続き。  
ODBCなるものを使わなければならないことを知るも、[早速hdbc-odbcのバグを踏んでしまった](https://github.com/hdbc/hdbc-odbc/issues/25)。  
先が思いやられる...。

# 2016-05-02

JavaでMonadを説明する記事引き続き。

# 2016-05-01

haskell-relational-recordでOracleを動かす実験続き。  
どういうわけか[vimプラグインの一部が消えてエラーが大量発生](https://twitter.com/igrep/status/726688242083328000)する、という事態に見舞われ苦戦。  
ようやくスキーマの作成までできたはず。  
やっと肝心のHaskell書くところに行けそう...。
