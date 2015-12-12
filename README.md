<!--
Execute this vim command to push updates of this file:

:w | execute "!bash " . expand('%:p:h') . "/update.sh"
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

# 2015-12-12

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  
マウスポインターが指している要素を検出するmoduleを作成。  
まだテスト出来ていないのですでに出来ている実装になんとか統合するかサンプルを作らなきゃ。

# 2015-12-08 - 2015-12-11

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタのための調査、
ちょっとだけコーディング。
SVGの要素内でマウスや指の座標を取得する方法については、  
http://stackoverflow.com/questions/9627005/svg-getting-the-position-of-an-element-relative-to-the-page  
が回答っぽい。試してないけど。。。

# 2015-12-07

[html-to-elmにバグ報告](https://github.com/mbylstra/html-to-elm/issues/1)した。

# 2015-12-06

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタのため、新たなモデルの作成。  
概ねどうするか検討はついた。あとはマウスや指の座標をどう扱うかが問題か。

# 2015-12-03 - 2015-12-05

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタのため、[実験用のコード](https://github.com/igrep/elm-touchmove-mousemove-sample)を書いているとこ。  
概ねなぞる部分の実装方法はわかった。`touchend`は`mouseleave`のように、特定の要素から指が離れたことは教えてくれないらしい。[HTML5 ROCKS](http://www.html5rocks.com/ja/mobile/touch/)いわく`touchleave`イベントがそれっぽく見えるんだが、実装されていないらしい。
https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint を使って自前で検出するしかなさそう。

# 2015-12-02

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタのため、[実験用のコード](https://github.com/igrep/elm-touchmove-mousemove-sample)を書いているとこ。

昨日[Elmコミュニティー送った提案](https://groups.google.com/forum/#!topic/elm-discuss/kVCn7vE1qZo)にもろもろ反応が来たので更に詳しくした。  
意外とRubyの`if`が知られていなくてヘコむ。まぁ海外では言うほどメジャーじゃないとは聞いてたけどさ！

立て続けに[関連して思っていた提案](https://groups.google.com/forum/#!topic/elm-discuss/gJKYRmjKlZc)もした。  
今回は思わず言っちゃったけど、やっぱりパッチ書いてから意見したほうが主張しやすいよなぁ。  
この件は流石に難しそうな気もするけど...。

# 2015-12-01

- [「Vim scriptの名前はVim scriptです。」](https://gist.github.com/ujihisa/128a90a5555b77a21958)と聞いて[GitHubのリポジトリーの言語を解析するアレにissueを送る](https://github.com/github/linguist/issues/2752)も、
  敢えなくclose。名前の変更は現状技術的に難しいらしい。。。
- [プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタのため、[実験用のコード](https://github.com/igrep/elm-touchmove-mousemove-sample)を書いているとこ。
  やっぱりelm-mousetouchは要らなさそう...。
- その他、調子に乗って[Elmコミュニティーに前から思っていたツッコミ](https://groups.google.com/forum/#!topic/elm-discuss/kVCn7vE1qZo)を入れたり
  Evanが「誰かやってくれねぇかなあ」とぼやいていた[ChangeLogを書いたり](https://github.com/elm-lang/elm-compiler/pull/1215)、細々したことを。

# 2015-11-30

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタのため、
https://github.com/Pisys/elm-mousetouch とか http://www.w3schools.com/jsref/event_onmousemove.asp を調べたり。  
残念ながら非常に完成度が低いライブラリなので理解に苦しむ。  
自前で書くのと大して変わらんかもしれないけど、まぁいいか。

# 2015-11-29

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタを初めて
スマホで実行するも、思うとおりにイベントを処理してくれず。  
やはり一筋縄ではいかないようだ。。。

# 2015-11-28

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタをWebサーバーで
動かしてスマホから見るために[この辺](https://github.com/elm-lang/elm-reactor/issues/76#issuecomment-122573958)
を参考にelm-reactorのデバッグモードを試したりelm makeしたりするも、どうもうまく行かず。  
バグ報告を検討しつつelm-reactorのドキュメントを読んでいたところ、
[elm-examples](https://github.com/evancz/elm-examples)にたどり着く。  
じゃあこれを動かしてみようと思って動かそうとしたところ、まだElm 0.16に対応していなかったらしく、
[サポートするためのPull Request](https://github.com/evancz/elm-examples/pull/1)を送るはめに。  
肝心の問題はやはりelm-examplesでも発生する模様。  
いろいろな現象に悩まされたりいつの間にか直ったりしたが、
どうやら、依然として https://github.com/elm-lang/elm-reactor/issues/157 の問題にぶつかる模様。  
多分ソースからコンパイルしないとダメなんだろうね。

とりあえず、デバッグモードを使わないで動かす方法には辿りつけたっぽい。  
http://elm-lang.org/guide/interop に書いてあった。。。

# 2015-11-27

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  
ようやくなぞって描けるところまで。

# 2015-11-26

lensのお勉強

# 2015-11-24

- [elm-testに報告していたバグ](https://github.com/deadfoxygrandpa/elm-test/issues/32)が
直ったのでigrep-cashbookのelm-testを更新して確認。
- [プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  

# 2015-11-23

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  
まだバグっているがイベントに応じて見た目が変えられるよう実装。

# 2015-11-22

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  
素のSVGをelm-svgに書き換える作業を手でやったり、更新のロジックを実装したり。  
もうすぐ試作第1弾的なのができるが、Elmのバグにハマってしまったようだ...。とりあえず0.16にあげようかなぁ。

# 2015-11-21

[第26回Haskellもくもく会 @ 朝日ネット](http://haskellmokumoku.connpass.com/event/22213/)にてHaskellポエムも忘れず少しずつ進める。  
疲れていた + ACアダプターを忘れた割には進められたほうかな。

# 2015-11-20

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  
核となるモデルの更新ロジックやviewを作る。
素のSVGをelm-svgに書き換えるの面倒なんで、何回もやるようだったら書き換え用のスクリプトを書かないとなぁ。

Haskellポエムも忘れず少しずつ進める。

# 2015-11-19

[Elm 0.16のpre-releaseを出した](https://groups.google.com/forum/#!topic/elm-dev/7daC5GV_wao)との情報を受け、
[igrep-cashbookでも試してみた](https://github.com/igrep/igrep-cashbook/commit/33488c7a068fca2b41ae2a884bc13822fe33dea0)。  
まだ0.16の新機能の恩恵は受けられなかったものの、とりあえず普通に動いてるっぽい。  
[Windows版でのバグも報告できた](https://github.com/elm-lang/elm-reactor/issues/155)のでえがったえがった。

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタも
Elmで作っているが、こちらは一段落してから0.16に上げよう。

# 2015-11-16 - 2015-11-18

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  
核となるモデルの作成。

# 2015-11-15

[Tokyo Haskell Meetup](http://www.meetup.com/Tokyo-Haskell-Meetup/events/225892018/)にて
ほかの人としゃべりつつ、[A Little Lens Starter Tutorial](https://www.fpcomplete.com/school/to-infinity-and-beyond/pick-of-the-week/a-little-lens-starter-tutorial)
を読みつつLensのお勉強。

あと、[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  
いろいろ試したけど結局スキャンした画像の傾きを直してInkscapeで手でトレースするのが一番確実かつ簡単だった。
ベジエ曲線ってすごい。

# 2015-11-12・2015-11-14

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  
参考画像をSVGとして再利用できるよう、GIMPで切り出してみる。難しい。

# 2015-11-11

[プリキュア Advent Calendar 2015](http://www.adventar.org/calendars/728)のネタ作り。  
昨日届いたアレの使用感を確かめたり、参考画像を集めたり。

# 2015-11-09 - 2015-11-10

Elm版, igrep-cashbookの続き。

# 2015-11-07

Elm版, igrep-cashbookの続きを少しやりつつ、
[東京Node学園祭2015](http://nodejs.connpass.com/event/20741/)にてworkshopperを使ってlearnyoureactをやったり。  
そういえば仕事でなんとなしにレビューしてるけどちゃんと勉強してなかったもんね...。  
workshopper、便利なんでElm版も作りたいなぁ。  
個人的には今のElmではElmを始めてもその先で実践に向けるのが大変そうなので、後回しにするけど。

# 2015-11-06

Elm版, igrep-cashbookの続き。

# 2015-11-05

[表参道.rb](http://omotesandorb.connpass.com/event/21811/)当日。  
また緊張しすぎてうまく喋れないんじゃないかという懸念はあったものの、登壇者の協力もあり、
なかなか盛り上がった会に出来たと思う。  
大きな反省点は、記録するものを一切用意していなかったことだろう。  
おかげでどこが参考になったとかならなかったとか、どこが冗長だったとか、全然振り返れない。

# 2015-11-04

[表参道.rb](http://omotesandorb.connpass.com/event/21811/)の準備。  
特に適しているとは思っていなかったが、[テーマを並べるのにPreziを使ってみた](https://prezi.com/a_hd91iinhb1/rails/)。
まぁまぁ楽しい。

Haskellポエムをさらに進めた。後1セクション書けたら第2章を終わりにしたい。

# 2015-11-02 - 2015-11-03

Elm版, igrep-cashbookの続き。  

# 2015-11-01

Elm版, igrep-cashbookの続き。  
必要なファイルを見なおして、大雑把な設計をイメージ出来た。

# 2015-10-30 - 2015-10-31

Elm版, igrep-cashbookの続き。  
リファクタリングしたり、エラー処理を改善したり。

[WEB+DB PRESS Vol.89](http://gihyo.jp/magazine/wdpress/archive/2015/vol89)の
Chrome特集を読んでみたり。やっぱりDev Toolsを触りながらじゃないと覚えられなさそう。
ちょっとハンズオンで勉強会やりたいなぁ。

# 2015-10-29

igrep-cashbookをElmで書き換える件、
[elm-architecture-tutorialの7番目](https://github.com/evancz/elm-architecture-tutorial/tree/master/examples/7)をパクりつつ、
何も入力がない、最も単純なバージョンを書いてみた。

# 2015-10-28

[昨日Railsに送ったPull Request](https://github.com/rails/rails/pull/22086)がcloseされて悔しかったので、
せめてベンチマークやメモリプロファイリングの成績でもよくならないかな、と思って測ってみるも、ダメダメだった :sob:

# 2015-10-27

[Sent a pull request to rails for the first time!](https://github.com/rails/rails/pull/22086)

# 2015-10-25

Haskellもくもく会でvimのHaskell編集用環境整備続き。  
記事にして公開した: http://qiita.com/igrep/items/278316669fbbd6dd124d

Elmでの小遣い帳アプリ開発開始。  

# 2015-10-24

Haskellもくもく会でvimのHaskell編集用環境整備。

# 2015-10-23

- Haskellポエム続き。もう少しで第2章が終わるけど、まとめて読んで欲しいので、第3章まで書いてからまとめて公開する予定。
- 仕事中に見つかった[`secureheaders` gemのバグ報告](https://github.com/twitter/secureheaders/issues/187)。
  アドバイスもらって自分で直そうかな、と思ったけどすぐに直してもらえた。

# 2015-10-22

ようやく初めてElmを書いてみた。  
想像以上に周辺のツールチェインが未発達でびっくりした。
elm-compilerもelm-replも、テスティングフレームワークも、HaskellもElmも書くチャンスらだけだ。  
とりあえず早く小遣い帳アプリを適当に形にしたらElm自体に貢献する方向で行きたい。

# 2015-10-21

ElmやPureScriptの勉強。  
どうしてもELmでやりたいので、ひとまずElmでCLIベースの実装は諦め、
データは適当なWebサーバーなりDropboxのAPIなりで共有することに決定。

# 2015-10-20

Elmで https://github.com/igrep/igrep-cashbook のCLI版の実装が出来ないかと試してみるも、やっぱり厳しそう。
Node.jsのIOを使うpackageが2つ見つかるも、
[一つはまだEOFすらろくに扱えないし、](https://github.com/laszlopandy/elm-console)
[一つはelm-packageに公開されてすらいない](https://github.com/ElmCast/elm-oracle)。  
流石に無理があるかなぁ。。。

# 2015-10-19

Elmの勉強の続きと、久々にHaskellポエムの続き。変更しっぱなしだった箇所を整理してまとめてコミットした。

# 2015-10-18

[次世代 Web カンファレンス](http://nextwebconf.connpass.com/event/19699/)に参加。  
体調不良もあり、全くメモも取らずひたすら話だけ聞いてみんなすげーなーと思っていた。  
共通して感じたのはやっぱり何かしら特化しないとこういう領域には辿りつけないと思うので、
改めてElmやHaskellの方に向き直していきたいと思った。  
それが本当に自分にとって最良かはともかく。

# 2015-10-17

- ElmとPureScriptについてお勉強。
- keep-me-contributing, よくよく考えたら今一番必要な機能であろう、
  ContributionStatusに応じたfaviconの変換機能を作った。  
  同じ要領でAndroidのウィジェットも作りたくなったら作ろう。  
  ほとんど全部Javaで作り直しになるんだろうけど、まぁしょうがないね。  
  サーバー側をJavaで作っていたのが唯一の救いか。

# 2015-10-15 - 2015-10-16

keep-me-contributingにWaffle.ioを導入したりもろもろのbadgeを入れたり、ESLintの設定を見なおしたり。
しかしCircleCIもそうだけどもうほとんど開発終わってるんで今更感はあるな。。。何やってるんだろ。。。

# 2015-10-14

keep-me-contributing, CircleCIの導入。想像以上に導入が簡単でびっくりした。  
まだブラウザ上で実行していた自動テストの実行はできていないけど、
とりあえず、まっさらな環境からビルドできることが確認できたので満足。

# 2015-10-13

keep-me-contributing, ドキュメントが古くなっていたので更新したり、
GruntfileでJavaScriptを一度に全てコンパイルできない問題を修正したり。

# 2015-10-12

keep-me-contributing, 今日はUIの大幅な修正。  
ようやく自分で納得のできる完成度のものに出来たと思うので、ここで一段落つけたい。  
デザインがやっぱりダサいし、CSSも汚いけど、まぁそれは次以降の課題で。

# 2015-10-11

keep-me-contributing, [cordova-plugin-local-notifications](https://github.com/katzer/cordova-plugin-local-notifications)を利用してAndroid版でもNotificationが出せるようにしてみた。  
残念ながら僕の端末では持っている2台ともうまく動かず。  
設定した時刻通りNotificationは表示してくれるのだが、表示内容を表示する時に変えることが出来ない。  
なので、Notificationを表示した時点では、肝心の「Contributionしたかどうか」がわからないのだ。  
それらしきサンプルがあったのでその通りに試したつもりだけど、やはり動いていないように見える。

他のプラグインを試す時間もないし、見た感じ一番メンテされてるんだよなぁ。

# 2015-10-10

keep-me-contributingのバグ修正と、Cordovaへの対応。  
ようやく手持ちのスマホとタブレット両方で、通知を出す機能以外は動かすことが出来た。

# 2015-10-09

風邪をひいて仕事を休んだのでPureScriptの本を読んだだけ。

# 2015-10-08

Node学園第18回に参加。Node.js 4.0について。  
JSをほぼブラウザでしか使わない自分にはちょっと肩身の狭いテーマだった。。。  
みんな本当にサーバーサイドで使ってるんやね。。。

# 2015-10-07

keep-me-contributingのバグ修正・スケジュール入力欄を削除する機能を追加。  
修正前でも空文字列にして更新したら削除されるが、実際やってみたらComboBoxが邪魔してやりづらいし、
そもそもわかりづらいし。

あと、関係ないところでバグを見つけた...。

# 2015-10-06

keep-me-contributingのeslintrcを整理したり、
スケジュール入力フォームに閉じるボタンを追加したり。  
Cordovaの件をあまり進めなかったのは、
実機でしかデバッグしにくい状態にあるため、実機を充電している時に外したくなかった、
というケチ臭い理由でもある。

# 2015-10-05

[java-ja.OSS](http://connpass.com/event/19690/)すごく面白かった（小並感）。  
少し感化されて自分もcrispyを作って失敗したことを発表したくなったが、
まぁここに今更感じた反省点を書いておくに留めておこう。

## ドッグフーディングをほとんど全くしていなかった。

ver 0.1をリリースしてからも、仕事で使う機会に出会えず
（当時何をしてたか忘れたが、なんやかんや言ってやっぱり
test doubleには極力頼らないほうがいいよね、という考えているせいでもある。
それに、なぜか完成度にこだわっていたと思うし。）、
そして趣味ではcrispy以外にRubyを書く気が全く起きなかった。  
純粋にcrispy自体の開発を楽しんでいたと思う。

## ActiveRecordなどと組み合わせた時に起こるバグに気づくのが遅すぎた。

上記が原因で結構欲しい機能を作り終えた時になってから面倒な問題に気づいてしまった。  
確信は持てないが、もっと早くこの面倒な問題に気づいていれば、
まだ対処する気にもなったかもしれない（完全にたらればだけど）。

## 結論

- やっぱりRuby書く気が薄れてるのにやるもんじゃないよね。ライバルは強力だもんね。
- できたらとにかく早めに使って試そう。なんであんなに仕事で使うのをためらってしまったんだろう。
  全然アジャイルじゃない。

# 2015-10-04

keep-me-contributingをCordovaに対応させる途中。

# 2015-10-03

社内ハッカソンにて、keep-me-contributingをCordovaに移植するよう試みる。  
結局Gruntfileのリファクタリングに大部分の時間を使ってしまい、
実機にdeployするところまでしかできず。  
動かしてみたものの、権限の設定の問題なのか、もともとCordova（というかWebView）がサポートしていないのか、
Notificationを参照したところで即刻エラーで死んでいた。  
Notificationとかalarm周りを移植するのにもうちょっとかかりそう。

# 2015-10-02

明日の社内ハッカソンに備え、自宅の環境で自分の端末にアプリをデプロイするのを試してる。  
keep-me-contributingは今の時点でもまぁまぁ便利だが、
やっぱりそもそものモチベーションはスマホから簡単にcontributeしたかどうか確認できるようにすることにあるので、
ちゃんとモバイルに対応させたい。

# 2015-10-01

表参道.rbで発表。

[Service WorkerとFacebookに遊ばれてました (1)](http://the.igreque.info/slides/2015-10-01-service-worker.html#(1))

仕事が忙しくてほとんど飛び入り参加みたいな形になってしまったためか、また緊張してうまく喋れず。  
LTの時間以内に喋りきれなかったorz。

# 2015-09-28 - 2015-09-29

もろもろバグを直しつつ、Apache Cordovaへの移植を検討中。  
今週末の社内ハッカソンで実施するために環境整備したり。

# 2015-09-27

Workerがnotifyするタイミングを管理するフォームのテストの作成続き。  
とりあえず今出来ている機能は一通りテストできた。  
まだ必要な機能が一部不足しているものの、
一旦一通りのコンポーネントを繋いでアプリとして形にしてみた。  
なぜかworkerが全く動いていないように見えるんだけどなぜだろう...。  
=> worker.jsをwoker.jsにtypoしてただけだった畜生なんでエラーメッセージ出さないんだよ！

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
