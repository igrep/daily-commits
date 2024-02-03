# 2024/01/22 - 2024/01/28

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] igrep-cashbookのCLI版
            - 2024/01/29: 一度動かしてみて早速バグ発覚。`Map`とか`RegExp`とか用のnamespace作るのはやっぱ失敗だったなあ
            - 2024/01/30: とりあえず`custard-lang/test`は全て通した
            - 2024/01/31: あー、しまった。provided-symbolsでも`Map`を`new`で作るとなると、provided-symbolsがjsモジュールを`import`することになる。jsモジュールの全部を`import`はやり過ぎだし、いい塩梅で止める機能を作るかラップする関数でも作らないと。アプリケーションがjsモジュールに依存するのは現状仕様がないとしても、provided-symbolsはなるべく純粋なcustardであってほしいものだが...。「純粋なcustardって何？」ってところをもうちょっと考えないとね。
                - 「純粋なcustard」はなるべくclassを意識させたくないなぁ。やっぱり`createMap`マクロを作るか
            - 2024/02/01: `createMap`と`createRegExp`を実装
            - 2024/02/02: 既存のアプリのtranspileを再度通した。split.cstdのテストが落ちるようになったけど、通した。
                - 後、save.cstdもバグってた...。欲張って変なリファクタリングするから...。直せたはず
            - 2024/02/03: 一回だけigrep-cashbookを動かした。早速バグ発覚。
                - 1個直したけど、まだまだ。
                - 後処理系自体にもまだ`text`マクロのエスケープ周りにバグがあるっぽいね
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 2 Programming Language Foundations](https://softwarefoundations.cis.upenn.edu/plf-current/index.html)
        - 2024/02/02 - 2024/02/03

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/d347ffe15044cb2f7df775fda42521037bd1a2d9/yesterday.md)
