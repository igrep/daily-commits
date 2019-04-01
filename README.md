<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2019/04/07までの目標

- asteriusでigrep-cashbookを動かす:
    - primitiveパッケージのビルド
    - <https://github.com/tweag/asterius/issues/98>の回避方法を探す。

# 2019/03/31までの目標

- asteriusでigrep-cashbookを動かす:
    - tweag.ioが作ったサンプルを、スマホとWindowsのブラウザで試す。
        - 結果: 達成
    - igrep-cashbookからtemplate-haskellの依存をなくす
        - 結果: 達成

# 2019/03/25 - 2019/04/01

- asteriusでigrep-cashbookを動かす:
    - 2019/03/25: 仮想マシンのセットアップ。同期の設定までできた。
    - 2019/03/26: TodoMVCとjsffiのサンプルを動かしてみた。TodoMVCの方は残念ながら非常に不安定だったがjsffiの方はスマホでも動いた。
    - 2019/03/27: igrep-cashbookをGHC 8.6.4でも動くよう修正したり、ahc-cabalのみでビルドできるようhpackから新しいcabalに移植したり。
    - 2019/03/28: igrep-cashbookがmonoidal-containersに依存してる関係で、asteriusでビルドできない => 自前で必要な箇所だけ実装しよう => その前に依存してる箇所のテストを書こう => ついでにテストに必要なライブラリーを書くか、という、恐ろしいyak shavingに陥る。
    - 2019/03/29: 昨日書いたテスト用ライブラリーをリリース。その後すぐにもっとシンプルな実装にできることに気づいた...。 <http://hackage.haskell.org/package/fakefs>
    - 2019/03/30: テスト用ライブラリーでテストを書いて、template-haskellの依存を取り除けたが、依存パッケージのビルドでasteriusのバグを踏んでしまった模様。ビルドできない。
    - 2019/03/31: asteriusにバグレポート。 <https://github.com/tweag/asterius/issues/98> どうやらasterius自体のバグと言うより、cabalがなぜか意図しないコマンドラインオプションで実行されていることに問題らしい。
    - 2019/04/01:
        - [関係がありそうなcabalのissueを見つけた](https://github.com/haskell/cabal/issues/4651)ので、軽く調査。`Cabal/Distribution/Simple/Configure.hs`というファイルをいじることになると思われる。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- ドイツ語


# 2019/03/24までの目標

- igreque.infoの移行:
    - lovely-communeの移行を完了
        - 結果: 完了
    - igreque.infoの移行を完了
        - 結果: 完了
    - DNS設定の書き換え・lovely-communeのURLの移行を通知
- keep-me-contributing:
    - Netlifyで公開
        - 結果: 完了
    - エラー処理を少し改善。せめてエラーの際の通知が出るようにはする。
        - 結果: 完了
    - DNS設定
        - 結果: 完了
    - Qiitaで成果を共有
        - 結果: 完了

# 2019/03/24

- keep-me-contributing:
    - 2019/03/24:
        - Qiitaの記事書けた: <https://qiita.com/igrep/items/253f8b4f91ef8a252030>。
- asterius試す:
    - 仮想マシンのセットアップ
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/03/22 - 2019/03/23

- keep-me-contributing:
    - 2019/03/22 - 2019/03/23:
        - Qiitaの記事の執筆。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/03/20 - 2019/03/21

- igreque.infoの移行
    - 2019/03/20:
        - igreque.infoをGitLab Pagesにデプロイできた。
    - 2019/03/21:
        - DNSの書き換えをし、もろもろ発覚した問題も修正。 <https://the.igreque.info/>
- keep-me-contributing:
    - 2019/03/20:
        - Netlifyで公開できた。
    - 2019/03/21:
        - DNSの書き換え完了。公開。<https://keep-me-contributing.igreque.info/>
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/03/17までの目標

- keep-me-contributing:
    - KotlinJS版のその他の処理を実装
        - 結果: 達成

# 2019/03/17 - 2019/03/19

- igreque.infoの移行
    - 2019/03/17: 試しにlovely-communeをGitLab Pagesに置いてみた。反映までに時間がかかるのが気になるが、あっさりできたっぽい。反映時間が気になるようだったらその時Netlifyを併用する方向で。
    - 2019/03/19:
        - lovely-communeが参照しているJavaScriptなどのパスがおかしいため表示されなかったのを修正
        - [hakyll向けのテンプレート](https://gitlab.com/pages/hakyll/blob/99a1d7fbb50c28d6eee87544db9779d185bd66b1/.gitlab-ci.yml)を参考に、igreque.infoに.gitlab-ci.ymlを追加してみた。
    - 2019/03/20:
        - igreque.infoをGitLab CI上でビルドできるよう修正中。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/03/16

- igreque.infoの移行
    - GitLab Pagesの仕様を調査


# 2019/03/13 - 2019/03/15

- keep-me-contributing:
    - 2019/03/13:
        - JS版の主要な部分が完成。残りは以下の3つの機能を実装すれば完成のはず。
            - チェック結果に応じて見た目が変わるfavicon
            - チェック結果に応じて見た目が変わるヘッダー
    - 2019/03/14:
        - チェック結果に応じて見た目が変わるfaviconまで実装するも、一部うまく動かない。
    - 2019/03/15:
        - いろいろバグを見つけたので直したり、残りの機能を一通り実装したりした。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/03/10までの目標

- keep-me-contributing:
    - KotlinJS版GitHub Clientの実装
        - 結果: 達成
    - KotlinJS版のその他の処理を実装
        - 結果: 未達

# 2019/03/10 - 2019/03/12

- タイプセーフプリキュア！:
    - 2019/03/10: スター☆トゥインクルプリキュアのキャラ追加。後は浄化技の台詞を確認するだけ。
    - 2019/03/11: 浄化技の台詞を追加して、全体を確認・修正。
    - 2019/03/12: `nonItemPurifications`をcure-index.jsonに載せるのを忘れていたので修正して、リリース。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/03/09

- keep-me-contributing:
    - 2019/03/09:
        - GitHub Client JS版とりあえず完成。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/03/06 - 2019/03/08

- Haskell-jp:
    - 2019/03/06 - 2019/03/08: SlackArchive廃止に対応するために発言をバックアップするソフト作り:
        - 2019/03/06 - 2019/03/08: index.htmlを生成する処理を少しずつ進めた。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版

# 2019/03/04 - 2019/03/05

- keep-me-contributing:
    - 2019/03/04: GitHub Clientを途中まで実装してみたが、共通ライブラリーに依存した途端、KotlinJSでのビルド時に`Exception`などのクラスがないというエラーに。
    - 2019/03/05:
        - 昨日のエラーは、共通ライブラリーのJSターゲットに対してbuild.gradleにKotlinの標準ライブラリーを書いてないからだった。あさり解決。
        - その後、KotlinJS版GitHub Clientを途中まで実装。あとはレスポンスをパースするところ。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- 中国語

# 2019/03/03までの目標

- keep-me-contributing:
    - KotlinJSとAndroid版両方で使えるようにライブラリーの分割
        - 結果: 達成
    - KotlinJS版GitHub Clientの実装
        - 結果: 未達
    - 実機でなぜかAndroid OS起動時にチェックが動作しない問題を修正
        - 結果: 達成

# 2019/03/02 - 2019/03/03

- Haskell-jp:
    - 2019/03/02: SlackArchive廃止に対応するために発言をバックアップするソフト作り:
        - HTMLファイルとして書き出す処理のコアが完成。
        - 既存のJSONファイルをHTMLとして書き出すバッチを途中まで実装。設定ファイルを共有する必要があることに気づいたのをきっかけに、またQuickCheckでオーバーエンジニアリングしてしまって時間を浪費。
    - 2019/03/03: SlackArchive廃止に対応するために発言をバックアップするソフト作り:
        - 既存のJSONファイルをHTMLとして書き出すバッチを実装。
        - その後、よく考えたらチャンネルの一覧を書き出す（index.htmlを作成する）処理ができていなかったので実装開始。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 詳説 正規表現 第3版
- 中国語

# 2019/02/25 - 2019/03/01

- keep-me-contributing:
    - 2019/02/25: Android OS起動時にチェックが動作しない問題について調査。これといったログもないし、よくわからん。自分で`BootReceiver`を追加して適当にワークアラウンドしよう。
    - 2019/02/26: Android OS起動時にチェックが動作しない問題を修正。普通に`BootReceiver`を追加して対応した。
    - 2019/02/27: Android版とブラウザー版で共有するライブラリーを切り出し、Android版で動作できる状態にした。
    - 2019/02/28: ブラウザー版GitHubクライアント作成開始。
    - 2019/03/01: いろいろ方法を考えたが、Android版のApolloで作ったGraphQLファイルを、GradleでWebサーバーが配信するディレクトリーにコピーするよう設定して、JavaScriptで取得してfetchに渡せばいいことに気づいた。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/02/24

- keep-me-contributing:
    - タイムゾーン絡みのバグを修正。
    - kotlin-dce-js を使ってKotlinJSのランタイムなどを小さくする設定を追加。
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: HTMLファイルとして書き出す処理のテストと、書き出す処理が大体完成。あとタイムゾーン関連の設定を追加した。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/02/24までの目標

- keep-me-contributing:
    - 内部のModelのテストを作成
        - 結果: 達成
    - 内部のModelの実装を作成
        - 結果: 達成

# 2019/02/24

- keep-me-contributing:
    - 2019/02/24:
        - タイムゾーン絡みのバグを修正。
        - kotlin-dce-js を使ってKotlinJSのランタイムなどを小さくする設定を追加。
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: HTMLファイルとして書き出す処理のコアのテストと、書き出す処理のコアが大体完成。あとタイムゾーン関連の設定を追加した。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/02/18 - 2019/02/23

- keep-me-contributing:
    - 2019/02/18: 内部のModelのテストケースの実装中。
    - 2019/02/19: 内部のModelのテストケースを一つ実装できたので一つパスした。二つ目のテストケースも書いた。
    - 2019/02/20: 内部のModelの3つめのテストケースを書いて実装。もっと書いても良かったが、面倒なのでここまでにすることにした。
    - 2019/02/21: これまでの実装を見直して、整理しつつ、足りないところを実装中。
    - 2019/02/22: JavaScriptとAndroidで同じ実装を使い回せるよう、自前でDIコンテナーを整備。
    - 2019/02/23:
        - アイコンの設定とかバグ修正とかバックアップの設定とか。
        - KotlinJSを軽く試してみたり。
        - ついに実機にインストールしてみた。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/02/17までの目標

- keep-me-contributing:
    - 内部のModelのテストを作成
        - 結果: 未達。
    - 内部のModelの実装を作成
        - 結果: 未達。
- 「【交流会】12卒 & 13卒エンジニア限定 "ぼくたち三十路リーチ組"」の資料作り
    - 結果: 達成。

# 2019/02/17

- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: HTMLファイルとして書き出す処理のテストを書いてる。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/02/16

- keep-me-contributing:
    - 2019/02/16: 内部のModelのテストケースの実装中。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/02/13 - 2019/02/15

- 「【交流会】12卒 & 13卒エンジニア限定 "ぼくたち三十路リーチ組"」の資料作り
    - 2019/02/13: 一通り資料完成。
    - 2019/02/14: 見直して一部修正。
    - 2019/02/15: さらに修正。今日発表のはずが、参加者減でイベントごと中止になってしまった...。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/02/10までの目標

- keep-me-contributing:
    - Android起動時にServiceを立ち上げるところまで
        - 結果: 達成。
    - GitHubにリクエストを送るサンプル用のリクエストを作成
        - 結果: 達成。
    - 内部のModelのテストを作成
        - 結果: 未達。順番を間違えた。代わりに、アプリからGitHubのAPIにリクエストを送る処理を実装してた。

# 2019/02/09 - 2019/02/12

- keep-me-contributing:
    - 2019/02/09: Apolloで生成したコードを使おうとしているところ。
    - 2019/02/10: GitHubにリクエストを送る処理まで実装できた。
    - 2019/02/11: 内部のModelのテストを書いてる。
    - 2019/02/12: 内部のModelのテストケースから仕様を考えていたら、いろいろ足りないことに気づいて依存するオブジェクトを増やしたりしてた。
- 「【交流会】12卒 & 13卒エンジニア限定 "ぼくたち三十路リーチ組"」の資料作り
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/02/03までの目標

- keep-me-contributing:
    - ボタンを押したら設定を更新して、Notificationを更新するところまで
        - 結果: 達成。
    - Android起動時にServiceを立ち上げるところまで
        - 結果: 未達。最初に取り組んだ方法が当アプリのアプローチに好ましくないことに気づいたためできず。`JobScheduler`を使った実装もできたものの、確認ができず。

# 2019/01/27までの目標

- keep-me-contributing:
    - ボタンを押したらServiceを立ち上げてNotificationを送るところまで
        - 結果: 未達。設定ファイルを更新するところまで、書いた方が適切だったかも。

# 2019/01/27 - 2019/02/10

- keep-me-contributing:
    - 2019/01/27: アプリがクラッシュしてしまうのを直し、Notificationを更新できるところまで実装。
    - 2019/01/28: 1日休んだのでServiceを作るところまで実装できた。
    - 2019/01/29: Android OS起動時にServiceを起動する処理を追加しつつ、気になった点をリファクタリング。
    - 2019/01/30: 昨日直したものを動かしてみたが、うまく動かず。
    - 2019/01/31: うまく動かないのは、単に設定ファイルのキーの名前を変更したからだった。しかし、まだOS起動時にServiceが起動しない問題は解決していない。
    - 2019/02/01: ServiceがOS起動時に動かない問題解決。権限が1個足りてなかった。しかしあとあと調べてみたら、`JobScheduler`を使うと、今後実装しようとしている定期実行と同時に、OS再起動時の自動起動もまかなえるらしい...。完全に無駄になってしまった。
    - 2019/02/02: `JobScheduler`を使ったやり方に切り替え中。
    - 2019/02/03: `JobScheduler`を使ったやり方に切り替えをしたものの、未テスト。
    - 2019/02/04:
        - `JobScheduler`を使ったやり方に切り替えの確認が終了。
        - GitHub APIでコミット履歴を取得するクエリーの作成。
    - 2019/02/05: GitHub APIでコミット履歴を取得するクエリーのサンプルができた。
    - 2019/02/06: Apolloをインストールして設定。
    - 2019/02/07: ApolloのGradleプラグインでコード生成するところまで。
    - 2019/02/08: GitHubに渡すPersonal Access Tokenを入力・保存する処理の実装。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/01/26

- keep-me-contributing:
    - 2019/01/26: Notificationを介してモデルの状態を表示するViewの実装ができたのでNotificationを送ってみるも、なんかNotificationの内容を修正しようとしたところでアプリがクラッシュしてしまう。恐らく、[StackOverflowで見かけた、Notificationの内容を上書きする方法](https://stackoverflow.com/questions/14885368/update-text-of-notification-not-entire-notification)をなにか勘違いして使用してしまったと思われる。
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: HTMLファイルとして書き出す処理を実装し始めた。
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/01/21 - 2019/01/25

- keep-me-contributing:
    - 2019/01/21 - 2019/01/22: 引き続き内部のモデルの実装。
    - 2019/01/23 - 2019/01/25: Notificationを介してモデルの状態を表示するViewの実装
- [Pharo by Example 50](https://books.pharo.org/updated-pharo-by-example/)
- 中国語

# 2019/01/20までの目標

- keep-me-contributing:
    - 設定画面からボタンを押してNotificationのテストをするところまで実装。
        - 達成。もっと難しい課題にして良かったかも。
- [サポーターズ新年会](https://supporterzcolab.com/event/671/)の資料作り
    - 未達。体調不良のためキャンセル。
- Haskell-jp Blog: TidalCyclesをインストールする記事を書く
    - 達成。公開できた。

# 2019/01/20

- keep-me-contributing: 引き続き内部のモデルを考えていた。
- 中国語

# 2019/01/19

- keep-me-contributing: 内部のモデルを考えていた。
- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- 中国語

# 2019/01/18

- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- 中国語

# 2019/01/13までの目標

- keep-me-contributing:
    - 設定画面からボタンを押してNotificationのテストをするところまで実装。
        - 結果: 未達

# 2019/01/09 - 2019/01/17

- Haskell-jp Blog:
    - 2019/01/09 - 2019/01/14: 予定を変えて、[teratailにあった質問](https://teratail.com/questions/167461)に回答するための記事を書き始めた。残念ながら質問者本人が自己回答してしまったが、知見は得られたのでよしとしよう。
    - 2019/01/15: [TidalCyclesの記事が書けたのでPull requestを送った](https://github.com/haskell-jp/blog/pull/150)。残念ながらもう時間もないのでいろいろはしょることにしたが、まぁいいだろう。
    - 2019/01/16: Pull request送信後の諸々の修正
    - 2019/01/17: 公開
- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- 中国語

# 2019/01/06までの目標

- 失敗しながら学ぶHaskell入門:
    - Issueを1つ以上解決する
        - 結果: 達成
- keep-me-contributing:
    - Kotlinで少しでも進める
        - 結果: 達成

# 2019/01/06 - 2019/01/08

- keep-me-contributing:
    - 2019/01/06: ActivityからNotificationを出すもNotificationChannelが設定されてないので警告が出るところまで実装。
    - 2019/01/07: NotificationChannelを設定してNotificationが出るところまで実装。アイコンがうまく表示されない...。
    - 2019/01/08: アイコンのことは一旦忘れて、文字列を入力する箇所を追加中。
- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- 中国語

# 2019/01/05

- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- 中国語
- その他: [Evernoteのexportを日付ごとに行うスクリプト](https://gist.github.com/igrep/843098ca14cf6fb918a7c9d4ce95a594)を書いた。気が向いたらQiitaにでも載せようかな。

# 2019/01/04

- keep-me-contributing:
    - 久々なのでとりあえずAndroid Studioの動作確認をするためにいろいろセットアップ。AMDのCPUでエミュレーターを立ち上げるにはHyper-Vじゃないとダメだそうで、やむなくVirtualBoxをアンインストール。新しいPCではHyper-Vとお別れしたかったのに、つらい。
- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- 中国語

# 2019/01/03

- 失敗しながら学ぶHaskell入門:
    - 課題6の続き。
- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- 中国語

# 2019/01/01 - 2019/01/02

- 失敗しながら学ぶHaskell入門:
    - 2019/01/01: 課題5に`let`の説明を追加できたっぽい。
    - 2019/01/02: 年末からまとめて作っていた[Pull request](https://github.com/haskell-jp/makeMistakesToLearnHaskell/pull/95)をようやく送ってマージできた。いろいろIssueを一気にcloseできてすっきり。
- 中国語
