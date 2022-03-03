# 2022/02/28 - 2022/03/06

- [ ] 週刊アスキーへの道
    - [x] ライブラリーの実装
        - [x] serialize/deserialize
            - 2022/02/28: テストの問題は`customElements.define`が抜けている以外にもあったが、とりあえず通せた。後は実装をいじってわざと落としてみるのをいくつか試そうか
        - [x] jackId/plugId/config keyのvalidation
            - 2022/03/01: 実装できた。厳密にやるならquerySelectorする直前が好ましいけど、まぁvertexを作るときだけでいいや。最悪破られても大きな問題ではないし
    - [ ] 企画の実装
        - 2022/03/02: 投稿を諦めるまでに実装した分をコピーしたり読み返したりしたところ、思った以上に進んでなかった。まぁとりあえず必要なvertonを考えてメニューの各種ボタンのハンドラーを実装かなぁ
            - もっと作り直したコードがあった気がするんだけど、どこにやってしまったんだろう。気のせいか。
        - [ ] メニューのデザイン
            - 2022/03/03: submenu作りがめんどい。<https://codepen.io/antoniputra/pen/BzyWmb?editors=1100>を参考にするべくDevToolsでいじってた
    - [ ] umdからES Moduleへ
    - [ ] repositoryのrename
    - [ ] ブログ記事
- Haskell入門コンテンツ:
    - [ ] 課題13の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/30421cba6f4e87dad102cae12d441b825eb67406>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/02/28 - 2022/03/03

------

- [ ] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f9894ed59e8d41b9df56887c7e270bbe08580c78/yesterday.md)
