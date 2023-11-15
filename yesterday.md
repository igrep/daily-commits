# 2023/11/13 - 2023/11/19

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - 2023/11/13: 一通りできたようなのでtranspileするも、transpilerのバグにハマった模様。先々週実装したdestructuringにまだバグがあるようだ
            - 2023/11/14: 怪しいテストケースを作ってみるも、再現しない。念のため`.js`ファイルもチェックしたけどちゃんと更新されている
            - 2023/11/15: 処理系のバグじゃなかったー！typoだったー！やっぱエラーが発生した場所をちゃんと表示させないと厳しいな...
                - というわけで一通りのtranspile errorを潰して実行。早速ランタイムエラーに。それも多分修正
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/96fb7e123c68809058c256befd229103b6175eca>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/11/15

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/13a44d41e91f6abf1dfdc0f03e79020e26d5b829/yesterday.md)
