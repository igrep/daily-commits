<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2019/06/16までの目標

- Haskell入門コンテンツ:
    - [ヘルプ投稿に対して、間違いを指摘しやすくする #101](https://github.com/haskell-jp/makeMistakesToLearnHaskell/issues/101)
        - 結果: 未達
    - 課題18の整備
        - 結果: 未達
    - 課題19の整備
        - 結果: 未達
- Haskell-jp:
    - 必要な予算の見通しを立て、スポンサーに連絡
        - 結果: 達成
- VM接続設定の自動化
    - ホストのIPを調べる: `Get-NetIPAddress | where { $_.InterfaceAlias -eq 'vEthernet (Default Switch)' -and $_.AddressFamily -eq 'IPv4' } | foreach { $_.IPAddress }`
        - やっぱりやめよう。WSL2が出たらそもそも使わなくなりそうだし。
        - 結果: 未達

# 2019/06/09までの目標

- Haskell入門コンテンツ:
    - 課題17の整備
        - 結果: 達成
    - 課題18の整備
        - 結果: 未達
    - 課題19の整備
        - 結果: 未達
- Haskell-jp:
    - 時間割のたたき台を作成
        - 結果: 達成

# 2019/06/02までの目標

- Haskell入門コンテンツ:
    - 課題16の整備
        - 結果: 達成
    - 「次のゴール」に向けたカリキュラム策定
        - 結果: 達成
    - 課題17の整備
        - 結果: 未達
- Haskell-jp:
    - スポンサーと発表者へのお願い
        - 結果: 達成。まだ了承は得ていないけどいくつか依頼できた。

# 2019/05/26までの目標

- Haskell入門コンテンツ:
    - レポート機能追加
        - 結果: 達成
    - 課題15の整備
        - 結果: 達成
    - 課題16の整備
        - 結果: 未達。もうちょっと
    - 「次のゴール」に向けたカリキュラム策定
        - 結果: 未達
- Haskell-jp:
    - イベントページ作成・公開
        - 結果: 達成

# 2019/05/21 - 2019/06/16

- Haskell入門コンテンツ:
    - 2019/05/21: 課題15をちょっとだけ進めた。
    - 2019/05/22: 課題16の模範解答作り。
    - 2019/05/23: 課題16の模範解答作っているところで、いろいろ見落としに気づいたので、もっと単純な問題に変えることにした。
    - 2019/05/24: 課題16の模範解答再作成。
    - 2019/05/25 - 2019/05/26: 課題16の文章作成。サンプルコードは一通りできたのでとりあえず次の勉強会では使えそう。
    - 2019/05/27: 課題16をpushしただけ。
    - 2019/05/28 - 2019/05/29: 課題17以降のカリキュラム検討。
    - 2019/05/30: 課題16に、不足していた例を追加。
    - 2019/05/31: 課題17作成開始。
    - 2019/06/01: 課題17の模範解答作成。
    - 2019/06/02 - 2019/06/03: 課題17のサンプルコード書き出し。
    - 2019/06/04: 課題17のサンプルコード書き出し、本文もいろいろ足した。
    - 2019/06/05: 課題18作り始め
    - 2019/06/06 - 2019/06/07: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/issues/101> の実装方法を検討
    - 2019/06/08: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/issues/101>の、サーバー実装を半分以上終えた。
    - 2019/06/09: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/issues/101>の、サーバー実装とテスト用クライアントを実装し、手元で動作確認ができた。
    - 2019/06/10: デプロイするために必要な諸々のセットアップ。
    - 2019/06/11: Dockerイメージの作成。
    - 2019/06/12: Herokuへのデプロイ。ローカルで`docker run`すれば動くけど、Herokuではなぜかうまく動かない。
    - 2019/06/13: Herokuにデプロイできた。
    - 2019/06/14: ブランチをリクエストごとに作るよう修正。動作確認はまだ。
    - 2019/06/15: Dockerでの動作確認が不足だったため、全然動かなかった。いろいろ修正してようやくHeroku上で動くようにできた。
    - 2019/06/16: mmlh本体からサーバーにアクセスできるようにするために、クライアントをリファクタリング。
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/05/19までの目標

- Haskell入門コンテンツ:
    - レポート機能追加
        - 結果: 未達。こちらはあとちょっと。
    - 課題15の整備
        - 結果: 未達
    - 課題16の整備
        - 結果: 未達
- Haskell-jp:
    - イベントページ作成・公開
        - 結果: 未達。こちらはあとちょっと。

# 2019/05/19 - 2019/05/20

- Haskell入門コンテンツ:
    - 2019/05/19: リファクタリングしてPull requestを送った: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/pull/99>。動作確認はまだ。
    - 2019/05/20: 動作確認しつつあれこれ改善。
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- 詳説 正規表現 第3版

# 2019/05/18

- Haskell-jp:
    - イベントページ作成。

# 2019/05/17

- Haskell入門コンテンツ:
    - 2019/05/17: とりあえずテストを通すところまで書けた。あとは軽く動作確認。

# 2019/05/12までの目標

- Haskell入門コンテンツ:
    - レポート機能追加
        - 結果: 未達
    - 課題15の整備
        - 結果: 未達

# 2019/05/12 - 2019/05/16

- Haskell入門コンテンツ:
    - 2019/05/12: GhcEvaluatorを他の機能と一緒にリファクタリング。ついでに見つかったいろいろ古い箇所をリファクタリング
    - 2019/05/13: GhcEvaluatorの実装。
    - 2019/05/14: GitHubのURLを生成する際に必要になりそうな情報のピックアップ。
    - 2019/05/15: GitHubのURLに挿入するメッセージのテンプレートを作成。
    - 2019/05/16: 報告用のURLを開くか否か尋ねる処理。ついでにIO周りを分離するようリファクタリング
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/05/11

- Haskell-jp:
    - Haskell Dayに向けた仕事の整理・割り当て
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/05/06 - 2019/05/10

- Haskell入門コンテンツ:
    - 2019/05/06:
        - レポート機能追加: テストケース続き。
        - 課題15: 課題内容策定。あとはサンプルコードを貼り付ければとりあえず明日の勉強会では使える。
        - 課題16: 課題内容の概要だけ書いた。
    - 2019/05/07: レポート機能追加: テストケースができたはず。
    - 2019/05/08 - 2019/05/10: 型チェックを行うためだけの、GhcEvaluatorの実装。
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/05/05までの目標

- GHC 8.8を試す:
    - Haskell-jp Blogにレポート記事を書く。
        - 結果: 達成
- asteriusでigrep-cashbookを動かす:
    - Haskell-jp Blogにレポート記事を書く。
        - 結果: 達成
- Haskell入門コンテンツ:
    - レポート機能追加
        - 結果: 未達
- タイプセーフプリキュア！:
    - スター☆トゥインクルプリキュアの新しい技を収録・公開
        - 結果: 達成

# 2019/05/05

- タイプセーフプリキュア！:
    - スター☆トゥインクルプリキュアの新しい技を収録・公開
- Haskell入門コンテンツ:
    - レポート機能追加: テストケースを書き始めた。
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/05/04

- asteriusでigrep-cashbookを動かす:
    - 2019/05/04: 記事公開: <https://mobile.twitter.com/igrep/status/680330022666649600>
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/05/02 - 2019/05/03

- asteriusでigrep-cashbookを動かす:
    - 2019/05/02: Haskell-jp Blogにレポート記事執筆続き。
    - 2019/05/03: Haskell-jp Blogにレポート記事執筆完了。Pull request送信: <https://github.com/haskell-jp/blog/pull/161>
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- 詳説 正規表現 第3版
- ドイツ語

# 2019/05/01

- GHC 8.8を試す:
    - 2019/05/01: 記事執筆完了。Pull requestを送っていろいろ修正。
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- 詳説 正規表現 第3版
- ドイツ語
