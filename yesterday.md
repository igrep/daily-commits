# 2023/09/18 - 2023/09/24

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [ ] cu$directoryOfThisFile, cu$thisFile
                - 2023/09/19: 名前を考え直してた。あと`base/safe`に移そう
                - 2023/09/20: `env`の持っているファイル名がどう移り変わるか調べているうちに気になっちゃったんで、`TranspileRepl`と`TranspileModule`の`src`を`TranspileOptions`に抜き出してみたけど、ちょっと失敗だったかな...
                    - 単純に`transpileState.srcPath`は相対パスにも絶対パスにもなり得る模様。呼び出しごとに`path.resolve()`しようね
                - 2023/09/21: 新しい種類の`Writer`を追加。次はテストね
            - [x] `scope`と`fn`の最後は式でなくても良くする
                - 2023/09/18: ついでに諸々の制御構文で、空っぽでもいいことにした
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/09/21

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/50907c05c46594ac3f801d46ea452a533ae96fa8/yesterday.md)
