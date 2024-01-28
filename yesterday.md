# 2024/01/22 - 2024/01/28

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [x] MisskeyかBlueSkyでの発言を保存
            - [x] 全てを結合するプログラム・スタートアップへの登録
                - 2024/01/27: 動作確認できたので登録！
        - [ ] igrep-cashbookのCLI版
            - 2024/01/22: appsのpackage.jsonを修正して依存関係を整理したり、custard transpileを呼びやすくしたり
            - 2024/01/23: 直したつもりだったけど、save-postsでのvitestが動かんなぁ。transpileし直さないとダメだからか...。そのtranspileし直しのためにpackages.jsonに書いたスクリプトを試すも、うまく行かぬ。面倒くさい...。素直にnode-globに依存するか？それともとりあえずディレクトリーを再帰的に処理する機能だけ設けてしのぐか？前者であれ後者であれ結局依存を増やすことになりそうだし、前者にしようかなぁ。
            - 2024/01/24: globパッケージ導入で解決。が、新しいバグが見つかったねぇ
                - 依存している`.cstd`なモジュールを先にtranspileするような機能を実装するか？
                    - と思ったけど現状の設計でどう挟むべきか分からないし、最終的にはちゃんとmodule間の依存関係を分析してtopological sortしないといけないし、今はスキップだね...
            - 2024/01/25: とりあえず手で依存関係を並び替えて`custard transpile`した。途中見つかったエラーも直して、全部transpileできた。次はテストコードかね
            - 2024/01/26:
                - テストはあっさり通っていた。次は実際に動かしてみるか
                - igrep-cashbookのpackage.jsonを作っておいた。これで`custard-transpile`も簡単なはず
            - 2024/01/27:
                - 運用する予定もなくなったし、split.cstdのテストは別に消してもいいんだけど、唯一のtranspileした結果までを含めたテストケースだし、まぁとっておくか
            - 2024/01/28: igrep-cashbookをappsディレクトリーから取り出せるよう、`@custard-lang/processor`と`@custard-lang/command`をリリースしたり、igrep-cashbookを再度transpileしたり
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/c32b48a92ce0571948373761890b52bfa3af3407>
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/dce1878fdda60b121865c19ccb3fbfc243df2f80>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2024/01/28

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/7f1a38e4a019304c4302349f77db2cbcd4c51531/yesterday.md)
