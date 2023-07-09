# 2023/07/03 - 2023/07/09

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/07/03: 新たに必要になった`Or` `Spec`を実装
                - 2023/07/04: 新たに必要になった `Tuple` `Spec`のAPIを考えただけ
                - 2023/07/05: やっぱもうちょっとシンプルに行こう。今週書いたコードの大半はmainブランチから外れたコミットとしてとっておいた
                - 2023/07/06: `ProvidedSymbolsConfig`を作る新しい関数を実装
                - 2023/07/07: 変更箇所が多くてパンクしそうになりつつも、workerでの初期化処理を一部修正
                - 2023/07/08: `eval`と`transpile`の重要箇所が修正できた。後はコンパイルエラーに任せて直すだけかな？`definitions.ts`とかは要らなくなりそうだから消さないとね
                - 2023/07/09:
                    - うわー、まだ未考慮なことがあった... `base`からやっぱあらゆるものを一度に`import`できた方がいいし、それ用の機能は必要か...
                    - それから、`import`などを`base`パッケージの関数じゃなくてプリミティブにする必要があるな
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/bf33cb440de38314b3ca9bbee4a98620dfd100e0>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Design 2023年6月号](https://gihyo.jp/magazine/SD/archive/2023/202306)
        - 2023/06/26 - 2023/07/09

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/83673cf11d67ffd551d60738755355ef30579f66/yesterday.md)
