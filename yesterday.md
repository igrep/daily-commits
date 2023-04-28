# 2023/04/24 - 2023/04/30

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - [ ] `meta.transpileModule`（指定したプログラムをtranspileして評価するプログラムをtranspileModuleで作るため）
                    - 2023/04/24: 調べれば調べるほどようわからん。Node.jsのバグなのか？普通にworker threadがreplyを返していないだけのことに見えるぞ...
                    - 2023/04/25: Node.jsのバージョンを上げて、タイムアウトをデフォルトの5秒にしてみたところ、`meta`のテストでは再現しなくなった。しかし、テスト全体を実行するとやはりタイムアウトするので依然として同様と思しき問題は発生している模様
                    - 2023/04/26: 再現コードを小さくする前に、これまでのコードを一通りコミット
                        - すわ再現コードを作ろう、と思ったところで「やっぱり`eval`の中で`async`な関数を定義した方がいいな...」と気づき、直したら問題は再現しなくなった。やっぱり`AsyncFunction`のconstructorのせいらしいことが分かったけど、`AsyncFunction`だけが再現する条件ではなかったっぽいし（確か`AsyncFunction`に書き換えた直後はちゃんと動いていたはずなのをよく覚えてる）、とりあえずこのままで行こう。
                        - で、次に見つかった問題は、まだ`transPileState.topLevelValues`の扱いがまだおかしいらしい
                            - 一つは`let`で宣言した変数を`assign`する処理を`transPileState.topLevelValues.set`に変えないといけないのを忘れてる、
                            - もう一つはなぜか`transPileState.topLevelValues`を正しく取得できない問題
                    - 2023/04/27: 単純な`assign`で起こる問題は回避したけど、`++`などのケースがダメらしい。面倒くさい！
                    - 2023/04/28: `incrementF`・`decrementF`の問題は解消。残りの原因は何だろう
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Speculation in JavaScriptCore](https://webkit.org/blog/10308/speculation-in-javascriptcore/)
        - 2023/04/08 - 2023/04/28

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/19cfdb11b986b37c28ad3b5e6c2d94b0a2ab8bae/yesterday.md)
