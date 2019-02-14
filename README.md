<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2019/02/17までの目標

- keep-me-contributing:
    - 内部のModelのテストを作成
    - 内部のModelの実装を作成
- 「【交流会】12卒 & 13卒エンジニア限定 "ぼくたち三十路リーチ組"」の資料作り

# 2019/02/13 - 2019/02/14

- 「【交流会】12卒 & 13卒エンジニア限定 "ぼくたち三十路リーチ組"」の資料作り
    - 2019/02/13: 一通り資料完成。
    - 2019/02/14: 見直して一部修正。
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
