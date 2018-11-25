<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2018/12/02までの目標

- 「タイプセーフプリキュア！」:
    - Super PreCure Monadの実装
    - HUGっと！プリキュアの新しい技を追加

# 2018/11/25までの目標

- 「タイプセーフプリキュア！」:
    - Super PreCure Monadの実装
        - 結果: 未達。

# 2018/11/18までの目標

- Haskell入門コンテンツ:
    - 課題6の課題文を作成。
        - 結果: 未達
- 「タイプセーフプリキュア！」:
    - Super PreCure Monadの実装
        - 結果: 未達

# 2018/11/23 - 2018/11/25

- 「タイプセーフプリキュア！」:
    - 2018/11/23:
        - [Member型クラス](https://hackage.haskell.org/package/extensible-0.4.10.1/docs/Data-Extensible-Class.html#t:Member)だけで十分っぽい
        - その前に、indexed-extraが更新されない問題をどうにかしないとね...。
            - GitHubでメンションしても反応がなかったので、作者にメールした。仕方なく一時的にGitHubのリポジトリーに直接依存することに。
        - あとはIndexed Monadが持っている状態を書き換えるための型族と対応するアクションができれば概ね完成なはず。
    - 2018/11/24:
        - 状態を書き換える関数をわかる範囲内で適当に書いた。
    - 2018/11/25:
        - 昨日書いた関数を完全なものにする方法を考えていた。
- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)

# 2018/11/20 - 2018/11/22

- 「タイプセーフプリキュア！」:
    - 2018/11/20: 土曜日思いついたアイディアの実装中。
    - 2018/11/21: 型定義を少し修正。
    - 2018/11/22: 次にやることを考えていた。`Data.Type.Equality`とextensibleの`Member`高階型族を使って、「`AsGirl g'`が`enter`していて変身前（または後）だったら」みたいな制約を着ければよいはず。
- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/11/18 - 2018/11/19

- [Programming Android, 2nd Edition](http://shop.oreilly.com/product/0636920023005.do)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/11/17

- 「タイプセーフプリキュア！」:
    - だいたいの内部仕様が思い浮かんだ。recordのkeyとして変身前の女の子の型を、valueとして変身しているか否かを含み、登場(`enter`)している女の子(`Character`)に対して`transform`や`purify`関数を実行できるようにする。変身している女の子が`enter`した場合は、変身前の女の子に型族`BeforeTransformed`に変換した上で`Character a`として返す。
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/11/11までの目標

- Haskell入門コンテンツ:
    - 課題にCSSを適用
        - 結果: 達成
    - 課題6の課題文を作成。
        - 結果: 未達
- Haskell Dayの準備: 「Haskellの歩き方」
    - 結果: 達成

# 2018/11/11 - 2018/11/16

- 「タイプセーフプリキュア！」:
    - 2018/11/11: Super PreCure Monadの実装に向け、軽く調査。typerepmapとextensibleを検討した。keyとvalue両方の情報が型宣言に現れる、extensibleの方が都合が良さそうだ。今回はケースが違うとして、typerepmapはどういうケースに使うのがいいんだろう。
    - 2018/11/12: とりあえずファイルだけ作った
    - 2018/11/13: importとかだけでも
    - 2018/11/14: 普通のPreCure Monadから実装すべきものをコピペ
    - 2018/11/15 - 2018/11/16: 手の付くところから実装を少しずつ
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/11/10

- Haskell Dayの準備: 「Haskellの歩き方」
    - 2018/11/10: 軽い修正・公開。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/11/09

- Haskell Dayの準備: 「Haskellの歩き方」
    - 2018/11/09: 一通り完成
- Haskell入門コンテンツ:
    - CSSの追加
    - 課題6をちょっとだけ（終わらなかったのが悔しい）
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語


# 2018/11/05 - 2018/11/08

- Haskell Dayの準備: 「Haskellの歩き方」
    - 2018/11/05: Monadについて解説したり、大体書く内容を決めたり。
    - 2018/11/06: 情報収集の方法や、ドキュメントの調べ方など。
    - 2018/11/07 - 2018/11/08: パッケージとの使い方
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/11/04までの目標

- Haskell入門コンテンツ:
    - Haskell Day当日のインストール手順案内
        - 達成
    - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/issues/33>
        - ビルドの高速化？
        - 未達
    - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/issues/37>
        - 達成（やったのは私じゃないけど）
    - 課題6の課題文を作成。
        - 未達
- HCAR 2018 Nov. の提出
    - 達成

# 2018/11/04

- Haskell Dayの準備: 「Haskellの歩き方」
- HCAR 2018 Nov. の提出
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/10/28までの目標

- Haskell入門コンテンツ:
    - 課題5の課題文を作成。
        - 結果: 達成
    - 課題6の課題文を作成。
        - 結果: 未達
    - 課題7の課題文を作成。
        - 結果: 未達

# 2018/10/21までの目標

- Haskell入門コンテンツ:
    - 課題4のテストを通すところまで完成。
        - 結果: 達成
    - [runhaskellを実行する前にmmlh verifyを実行する導線を作る · Issue #4 · haskell-jp/makeMistakesToLearnHaskell](https://github.com/haskell-jp/makeMistakesToLearnHaskell/issues/4) の解決
        - 結果: 達成
    - 課題5の課題文を作成。
        - 結果: 未達

# 2018/10/14までの目標

- Haskell入門コンテンツ:
    - 課題4のテストを通すところまで完成。
        - 結果: 未達
    - [runhaskellを実行する前にmmlh verifyを実行する導線を作る · Issue #4 · haskell-jp/makeMistakesToLearnHaskell](https://github.com/haskell-jp/makeMistakesToLearnHaskell/issues/4) の解決
        - 結果: 未達
    - 課題5の課題文を作成。
        - 結果: 未達
- タイプセーフプリキュア！: HUGっと！プリキュアの新しい浄化技に対応
    - 結果: 達成

# 2018/10/14 - 2018/11/03

- Haskell入門コンテンツ:
    - 2018/10/14: pretty-simpleでのデバッグコードがなんだかうまく動かないのでおかしいと思ったら`seq`の使い方が間違っているせいで遅延評価の罠にはまっていた...
    - 2018/10/15: 改めてregex-applicativeによるパース結果を見ると、間違えが見つかった。興味深い間違え方だ。
    - 2018/10/16: 昨日見つけた間違いを修正中。やっぱりmegaparsecなりパーサーコンビネーターで書いた方が楽だったんじゃないかって気がしてきたな。。。
    - 2018/10/17: 修正してみたがまだ間違えていたのでさらに修正。想像以上に苦戦してしまった。
    - 2018/10/18: ようやくカッコの対応をとる処理を実装できた。あとはカッコの対応状況に応じてヒントのメッセージを組み立てるだけのはず...。
    - 2018/10/19: メッセージを組み立てる処理書き始め
    - 2018/10/20: メッセージを組み立てる処理もできた。あとはテストを適当に書き換えて通る状態にしたらpushしよう。
    - 2018/10/21: ようやく課題4が完了。そのほかいくつか細かい問題を解消しつつ、課題5に取り組み始めた。
    - 2018/10/22: 課題5の模範解答がビルド・実行できたので問題文も書いた。あとは必要な知識を解説するだけ。
    - 2018/10/23 - 2018/10/24: 課題5の必要な知識の解説中。
    - 2018/10/25: 課題5の解説完了。Pull request送って確認中。 <https://github.com/haskell-jp/makeMistakesToLearnHaskell/pull/24/>
    - 2018/10/26: 課題5の細かい修正をしてPull requestをマージ。続けて課題6も書こうかと思ったが、その前に課題5で思い切って型についての説明を加えることにした。
    - 2018/10/27: 課題5に加えた型の修正だいたい終わり。
    - 2018/10/28: 束縛と代入の区別について指摘されたので対応。おかげでちょっといい勉強になった。
    - 2018/10/29: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/issues/9> への対応開始。でも代わりにwaddlawくんがやってくれそうだ。
    - 2018/10/30: Issue 22の修正: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/pull/41>
    - 2018/10/31:
        - wadoくんのPRをレビュー: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/pull/42>
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/pull/43>
        - 課題6以降の、型の説明方法を検討。
    - 2018/11/01: 課題6の必要な知識を整理。
    - 2018/11/02: wadoくんのPRのレビュー
    - 2018/11/03: 細かい改善をいろいろしたり、ハンズオンに向けてインストール方法などのドキュメントを書いたり。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/10/13

- Haskell入門コンテンツ:
    - regex-applicativeでパースした結果を見るためにpretty-simpleでデバッグコードを追加
- Haskell-jp:
    - Haskell Dayのセッションのスライドをレビュー
    - [第45回【フリースタイル】PORTもくもく会【学生歓迎！】](https://freestyle-mokumoku.connpass.com/event/100994/)にての紹介を目標に、資料を作った。もちろん発表もした。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/10/09 - 2018/10/12

- Haskell入門コンテンツ:
    - 2018/10/09 - 2018/10/10: 第4問目のカッコに関わる処理の実装中。
    - 2018/10/11: 実装できたのでとりあえず動かしてみるも、無限ループ。
    - 2018/10/12: regex-applicativeの仕様上無限ループになってしまうのは仕方ないっぽいので、深さを制限することで回避。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/10/08

- Haskell入門コンテンツ: matsubaraくんに指摘されたREADMEの誤りを修正
- タイプセーフプリキュア！: HUGっと！プリキュアの新しい浄化技に対応
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/10/07までの目標

- Haskell入門コンテンツ:
    - 課題4のテストを通すところまで完成。
        - 結果: 未達。
    - 仕事の分担方法の検討。
        - 結果: 達成。[ここ](https://github.com/haskell-jp/makeMistakesToLearnHaskell/blob/master/README.md)にドキュメントを書いた。

# 2018/10/02 - 2018/10/07

- Haskell入門コンテンツ:
    - 2018/10/02 - 2018/10/03: そろそろtextパッケージのAPIだけではユーザーが入力したソースの解析がつらくなってきたので、方法を検討。regex-applicative, 以前使ったときあまりAPIが好きになれなかったけど、今回の用途にはぴったりっぽいので使おう。
    - 2018/10/04: regex-applicativeをラップしたモジュールの作成。
    - 2018/10/05: 問題の解決方法にちょっと悩む。
    - 2018/10/06: 紹介用のドキュメントを書きはじめ
    - 2018/10/07: 開発用のドキュメントを書いた。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/10/01

- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/09/30までの目標

- Haskell入門コンテンツ:
    - 課題4のテストを通すところまで完成。
        - 結果: 未達。
    - 仕事の分担方法の検討。

# 2018/09/23までの目標

- Haskell入門コンテンツ:
    - 課題4のテストを通すところまで完成。
    - 仕事の分担方法の検討。
    - 結果: 未達
- HIW 2018のLT資料
    - 結果: 未達

# 2018/09/22 - 2018/09/30

- Haskell入門コンテンツ:
    - 2018/09/22: main-testerの修正したけど、旅行中のためネットにつながらず、コンパイルもテストもできてないorz
    - 2018/09/23: 空港のFree WiFiでネットにつながったのでビルドしてテスト。直した。
    - 2018/09/25: main-testerの新しいバージョンをリリース。
    - 2018/09/26 - 2018/09/27: 新しいmain-testerでmakeMistakesToLearnHaskellのテストを書き換えてる
    - 2018/09/28: [NoTraceのbase4.11対応版を出してもらった](https://github.com/CindyLinz/Haskell-NoTrace/pull/1#issuecomment-424753828)ので使用するよう修正。
    - 2018/09/29 - 2018/09/30: 4問目の実装中。

# 2018/09/17 - 2018/09/21

- Haskell入門コンテンツ:
    - 2018/09/17: 課題4の判定ロジック実装に向けて、QuickCheckを利用して、ユーザーが書いたプログラムにテスト用の入力を渡す処理を実装。かなりダーティーなことをしたけどこれで動くだろうか...。
    - 2018/09/18: 昨日書いたダーティー実装方法でうまくいきそうなことをintegration testで確認。まだコンパイルが通るケースしか試してないので通らなかったり、出力が間違っている場合のケースもテストしようかな。`runhaskell`を何回も立ち上げるので遅いのが悩ましいけど。。。
    - 2018/09/19: コンパイルエラーが起こるケースについてもintegration testを書いてみたが、どうも失敗する。
    - 2018/09/20: 昨日の問題はごく単純な間違いによるものだった。main-testerの機能不足を感じたので修正しておこうかなぁ。今後もintegration testを書くかどうかというと微妙だけど。
    - 2018/09/21: main-testerの修正開始。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/09/16までの目標

- [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)での発表を詳しくしたブログ記事の公開
    - 結果: 達成: <https://haskell.jp/blog/posts/2018/substring-parser.html>
- Haskell-jp: Haskell Day 2018のイベントページ公開
    - 結果: 達成: <https://haskell-jp.connpass.com/event/92617/>
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: 既存のJSONファイルも含め、N件ごとに1ファイル出力するよう修正する <https://github.com/haskell-jp/slack-log/issues/5>。
        - 結果: 達成 <https://github.com/haskell-jp/slack-log/pull/11>
- Haskell入門コンテンツ: 少しだけでも続きに着手したい
    - 結果: 達成

# 2018/09/16

- Haskell入門コンテンツ:
    - 2018/09/16: 課題4の判定ロジック実装に向けて、runhaskellコマンドに標準入力の値を渡せるようにした。
- タイプセーフプリキュア！: HUGっと！プリキュアの新しい技の仕様を追加開始。まだ台詞がぶれているようなので次回に先送り。
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/09/11 - 2018/09/15

- Haskell入門コンテンツ:
    - 2018/09/11: 今までやってきたことやこれからすることの確認
    - 2018/09/12: 第4問目のテストケースを抽象化したが、よく考えたら並べたテストケースだけでは不十分で、実際にはもっとたくさんのケースを上げていた。そこで、テスト用のファイルからテストケースを自動生成するスクリプトを書いた。恐らく、これをするつもりだったんだろう。
    - 2018/09/13: 昨日書いたスクリプトを使って4問目のテストケースを生成
    - 2018/09/14 - 2018/09/15: 生成した各テストケースにおける、期待されるエラーメッセージを設定
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/09/09までの目標

- [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)での発表を詳しくしたブログ記事の公開
    - 結果: 達成。
- Haskell-jp: Haskell Day 2018のイベントページ公開
    - 結果: 未達
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: 既存のJSONファイルも含め、N件ごとに1ファイル出力するよう修正する <https://github.com/haskell-jp/slack-log/issues/5>。
    - 結果: 未達。後はバグを修正するだけのはず...。
- Haskell入門コンテンツ: 少しだけでも続きに着手したい
    - 結果: 未達

# 2018/09/05 - 2018/09/10

- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り:
        - 2018/09/05: コアの部分の関数を考え、そのテストケースを作成開始
        - 2018/09/06: テストケース書けた
        - 2018/09/07: 実装開始
        - 2018/09/08: コアの部分の実装ができたのでそのまま移行スクリプトまで書いてみたが、どうも動作がおかしい
        - 2018/09/09: 移行スクリプトや移行後の保存処理も実装し、Pull requestを送った。
            - <https://github.com/haskell-jp/slack-log/pull/11>
        - 2018/09/10: 早速バグが見つかったので[修正](https://github.com/haskell-jp/slack-log/commit/ef89405d96c365538d6e5c1cf0ccd5f971f14013)...
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/09/02までの目標

- [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)での発表を詳しくしたブログ記事の作成
    - 結果: 達成。公開はまだだけど！
- Haskell-jp: Haskell Day 2018のスケジュール作り
    - 結果: 達成。たたき台とはいえとりあえずできたので。
- Haskell-jp:
    - SlackArchive廃止に対応するために発言をバックアップするソフト作り: 既存のJSONファイルも含め、N件ごとに1ファイル出力するよう修正する <https://github.com/haskell-jp/slack-log/issues/5>。
    - 結果: 未達。
- Haskell入門コンテンツ: 少しだけでも続きに着手したい
    - 結果: 未達。

# 2018/09/02 - 2018/09/04

- [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)での発表を詳しくしたブログ記事の作成
    - 2018/09/02: ようやくできたので、[Pull request](https://github.com/haskell-jp/blog/pull/135)を贈った
    - 2018/09/03: Pull requestを送ってから気づいた問題の修正。
    - 2018/09/04: ようやく公開 <https://haskell.jp/blog/posts/2018/substring-parser.html>
- [Getting Clojure](https://pragprog.com/book/roclojure/getting-clojure)
- [How to Bake Pi](https://en.wikipedia.org/wiki/How_to_Bake_Pi)
- 中国語

# 2018/09/01

- [プリキュアハッカソン NewStage](https://cure-hack.connpass.com/event/91157/)での発表を詳しくしたブログ記事の作成
    - もう少しでPull requestを送るところまで。
