# 2022/12/12 - 2022/12/18

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] 末尾再帰の最適化（マクロを実装してから）
        - [ ] Step 6
            - [x] Step 6として何を実装するか決める
                - 2022/12/12: 考えた
            - [ ] `importJs`:
                - [ ] `fs/promises`の関数を呼べるように
                - [ ] globalの関数を呼べるように
            - [ ] `async`
            - [ ] `await`
            - [ ] `readString`
            - [ ] `transpile`
                - 2022/12/15: これも作ろう... と思ったけどglobalの`import`ができてからじゃないとダメだ
            - [ ] `evaluate`
                - 2022/12/13: 実装開始。`evaluate`と`readString`はbaseとは別の名前空間にしよう
                - 2022/12/14: テストケース作成
                - 2022/12/15: もしかしてこれも`import`する仕組みが先にいるのでは？`import`を使うか否かにかかわらず`evaluate`などをライブラリーとして提供してライブラリーを参照できる状態にしないと
            - [ ] `import`:
                - 2022/12/16: 仕様検討
                - 2022/12/17: 実装開始
                - 2022/12/18: ようやく仕様が見えてきた？
            - [ ] コマンドライン引数の関数を評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/e68feff171966dd2707924c8248cac802a7dfc39>
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/d865197dadcf9bc8137cae409a3333856fb256f1>
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/b9f137f52bc610e544a665780fab00e491b2bd20>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/12/12 - 2022/12/18

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/24f10795dfdf36bb8588d83c4e88184653a35303/yesterday.md)
