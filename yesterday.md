# 2022/12/19 - 2022/12/25

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] 末尾再帰の最適化（マクロを実装してから）
        - [ ] Step 6
            - [ ] `importJs`:
                - [ ] `fs/promises`の関数を呼べるように
                - [ ] globalの関数を呼べるように
            - [ ] `async`
            - [ ] `constAwait`
                - 2022/12/20: 仕様検討
            - [ ] `readString`
            - [ ] `transpile`
            - [ ] `evaluate`
            - [ ] `import`
                - 2022/12/19: 色々考えた結果、想像以上に難しいことが分かった。
                - 2022/12/20: 先に必要なのは`await`なのだ
                - 2022/12/21: ようやく実装が進み出したかな？
                - 2022/12/22: JSの評価をより安全に、そしてasyncにできるよう修正
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/12/19 - 2022/12/22

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/de8960370c1b8fa2ea898ca229ef07a63a680e2e/yesterday.md)
