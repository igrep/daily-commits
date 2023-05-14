# 2023/05/08 - 2023/05/14

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/05/08: もうちょっとかな？あとは`evalBlock`して得た`providedSymbolsConfig`をどうvalidationするかよね
                    - 頑張ってspecを作るか！
                - 2023/05/09: spec作り始めた
                - 2023/05/10 - 2023/05/11: specやっぱ凝ってしまうな... 今は最小限のものが作れれば十分なんだけど...
                - 2023/05/12: `Map`用のspecまで実装できた。後今必要なのは`record`だけ。どう型付けすればいいかな
                    - <https://github.com/gcanti/io-ts/blob/0baeb15266c55fa74b812eca9ff9a30cf1859fe2/src/Type.ts#LL107C39-L107C68> を参考に書けた
                - 2023/05/13: 今必要な最低限の奴ができた。specのテストは後回しで！
                - 2023/05/14: できたかな？と思いきや早速エラー。standardRootをプログラム側からアクセスできるようにしてなかった
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/a5dca04e9d834a8b203bdfd00aebb30fa96f53dc>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Speculation in JavaScriptCore](https://webkit.org/blog/10308/speculation-in-javascriptcore/)
        - 2023/04/08 - 2023/05/14

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/e5abf2ae506be5f1f517d6de30a9e5feef7630ee/yesterday.md)
