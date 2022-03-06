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
        - [x] メニューのデザイン
            - 2022/03/03: submenu作りがめんどい。<https://codepen.io/antoniputra/pen/BzyWmb?editors=1100>を参考にするべくDevToolsでいじってた
            - 2022/03/04: submenuの表示ができた。細かい色づけは明日！
            - 2022/03/05: CSSと格闘してたら遅くなっちゃった。でも満足のいくできになった
            - 2022/03/06: メニュー、まだおかしな箇所があったので修正
        - 2022/03/06: メニューのボタンをクリックしたときのハンドラーを実装開始。作ったvertexをどこに置くか迷う
            - 簡単なものとして、こんなアルゴリズムでどうだろうか:
                1. 初期値は(0, 0)
                2. 現在配置されているvertexの中で、重ならない位置を見つける
                    1. p <- 最も離れたノード(X, Y)間の中点
                    2. p +- N に他のノードがいれば、そのノードとXかYとの中点を求める
                    3. 以下繰り返し
            - 今書き始めてみた感じ、ぴったりそういうアルゴリズムにはならなさそうだけどとにかく被りにくいものにはなりそう
                - すごく真面目にやるなら区間木みたいなデータ構造がいるんでしょうけど、データ数も大したことないだろうし気にしない方向で！
    - [ ] umdからES Moduleへ
    - [ ] repositoryのrename
    - [ ] ブログ記事
- Haskell入門コンテンツ:
    - [x] 課題13の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/4cb747fce654cf19fc19d424814a5fcebf589364>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - 2022/03/06: cabal.projectの書き方に思いのほか苦戦して、やっと依存関係のビルドができたところ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/02/28 - 2022/03/06

------

- [ ] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f9894ed59e8d41b9df56887c7e270bbe08580c78/yesterday.md)
