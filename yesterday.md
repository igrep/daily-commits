# 2023/08/28 - 2023/09/03

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - 2023/08/28: 昨日までできたものをtranspileしたところで早速バグに気づいた。`import`するライブラリーのパスの扱いかぁ
            - 2023/08/29: とりあえず直せたけどまた面倒な問題が。現在のプロジェクトには `@atproto/api` がインストールされてないからチェックできないのか...。custard側にプロジェクトの `node_modules` を見えるようにするにはどうすればいいだろう。
                - 別プロセスで`node`を起動することも考えたけど、実はカレントディレクトリーを変えるだけでよかったりしないかな
                    - あくまで`import`を呼び出している該当のファイルからの位置のようなので、カレントディレクトリーを変えるだけではダメだろう
                - いっそもっとシンプルに、.provided-symbols.cstdから`node_modules`への相対パスを指定するようにすればいいのでは。そうすれば絶対パスへの変換も簡単になる。何よりNodeの仕様への依存度が下がる
            - 2023/08/30: 昨日決めた方針に従って修正中。新たに`ProvidedSymbolsConfig`を初期化するとき必要になった`from`、デフォルト値はどうしようか
            - 2023/08/31: 後はテストを直せば問題はクリアできてるはず
            - 2023/09/01: やっぱり`resolveModulePaths`は`EnvF.init`の中で呼ぶのが正解っぽいねぇ。`EnvF.init`のオプションが入力ファイルの名前を持っているし...。本当は別の型にできればいいんだけどねぇ
            - 2023/09/02: テストの失敗を直した
            - 2023/09/03: .provided-symbols.cstd のディレクトリーから`import`するつもりが、まだうまく行ってないらしい
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/4766b409414ce29f4bf1a91a3954c58a535507ca>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/09/03

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5cb04ef5cc392f49dbb10ece840f4dda2f6d5a3e/yesterday.md)
