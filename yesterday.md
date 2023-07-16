# 2023/07/10 - 2023/07/16

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/07/10: tscのエラー潰し
                - 2023/07/11:
                    - tscのエラー修正完了
                    - `import`・`importAnyOf`はプリミティブ、というより最初から`env`に入っている識別子ってことにしたほうがやっぱ実装が楽かぁ
                - 2023/07/12 - 2023/07/14: `importAnyOf`の実装
                - 2023/07/15: `importAnyOf`実装できたはずだけど、テストがめっちゃ落ちる
                - 2023/07/16: 一部バグ修正。まだまだかかりそうｆ
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/c05d732e1b40c24c4ec4a4c46adeede5942511af>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Design 2023年6月号](https://gihyo.jp/magazine/SD/archive/2023/202306)
        - 2023/06/26 - 2023/07/16

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/e365dd14ab0e2dd121dee30a090150db1cec2184/yesterday.md)
