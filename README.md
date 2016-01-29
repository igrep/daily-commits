<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

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
