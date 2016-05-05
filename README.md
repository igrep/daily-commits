<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

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

JavaでMonadを説明する記事も引き続き。

# 2016-05-01

haskell-relational-recordでOracleを動かす実験続き。  
どういうわけか[vimプラグインの一部が消えてエラーが大量発生](https://twitter.com/igrep/status/726688242083328000)する、という事態に見舞われ苦戦。  
ようやくスキーマの作成までできたはず。  
やっと肝心のHaskell書くところに行けそう...。
