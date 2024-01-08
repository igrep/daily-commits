# 2024/01/08 - 2024/01/14

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [ ] 全てを結合するプログラム・スタートアップへの登録
        - [ ] igrep-cashbookのCLI版
            - 2024/01/08: test packageを分割し、`npm run`で`custard`コマンドを呼べるようにした。が、まだ`custard transpile`でエラーが発生する模様。どうやら、transpile時に指定したmoduleにあるmacroを収集するために`import`する件について、またハマっているようだ。今度はどう直すのが正解なんだろう
                - やっぱり、npmパッケージのパス解決を実装するしかないっぽいなぁ。save-postsから`@atproto/api`も見えなくなっているみたいだし
                    - 調べてみたところ、nodeの`--experimental-import-meta-resolve`を有効にすれば、`import.meta.resolve`に私のやりたいことを実現する機能がつきそうだ。やっぱbundlerとかでそういう需要があるんだろうね。あんまりnodeに強く依存したくなかったけど、しゃあないな。どうせ`node:fs`とかバリバリ使ってるし...
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2024/01/08

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/dd4f76dd5cfa68a776a641b34c53ce71385628fb/yesterday.md)
