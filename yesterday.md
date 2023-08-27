# 2023/08/20 - 2023/08/27

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
        - [ ] ConjureなどNeovimの設定
            - 2023/08/21: syntaxファイルができた
            - 2023/08/22: indentの設定もできた。どうもNeovimのバグっぽい挙動に気づいてしまったので今度報告かなぁ。そんな致命的ではないのでとりあえず後回しするけど...。どうも`setlocal lispwords=`して空っぽにしようとしてもうまく行かないようだ。普通の`set`ならできるのに
            - 2023/08/23: これまで苦労して作ったvim-sexpの設定は、全然意味なかった。どうもvim-sexpのデフォルトに追記する、という形にはできないようだ。この様子だと多分conjureの設定も無意味かな...
            - 2023/08/24: Conjureの設定ファイル書き始めた。ちゃんと意味を理解するためにドキュメント読まねば
            - 2023/08/25: よーく考えたら、現状のcustardのREPLは行単位でしか評価できないため、Conjureを設定してもあまりうれしくない！後回し！
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - 2023/08/25: .provided-symbols.cstd を書いただけ
            - 2023/08/26:
                - 実装を始めたら、早速`new`を実装できていないことに気づいたので実装
                - ログインパスワードの扱いがまた面倒くさそうね
            - 2023/08/27:
                - provided-symbols.cstdの書き方でまたちょっと悩んだり。
                - 多分、feedを取得するコードができた。まだtranspileもしてないので分からんけど
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/0a9bb6d7883cfa1625616ccbb37d8cb493e951f2>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Regular Expression Puzzles and AI Coding Assistants](https://www.manning.com/books/regular-expression-puzzles-and-ai-coding-assistants)
        - 2023/08/16 - 2023/08/23
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/08/27

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/96a4aa58566a13c8a1b2186dc10557da7dc01406/yesterday.md)
