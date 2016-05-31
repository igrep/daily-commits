<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

# 2016-05-28 - 2016-05-31

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
