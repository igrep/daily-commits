# 2020/11/09 - 2020-11-15

- wasm2arm32 compiler:
    - i32.wastにおけるすべての`assert_return`のテストケースを解決
        - 2020/11/09: `i32.clz`は楽に実装できたが、`i32.ctz`についてはうまくいかない。Armネイティブにはないらしいため、GCCの`__ctzsi2`を使ったが、なぜか期待する結果にならない
        - 2020/11/10: <http://graphics.stanford.edu/~seander/bithacks.html#ZerosOnRightParallel> の方法が簡潔そうなのでアセンブリーで実装しようと思いきや、signedなる見慣れない関数が！ググっても出てこない！まぁ想像は付くけど...
            - そもそもこの関数で要件満たせるかどうかのチェックは必要か...
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
        - slack-webパッケージにPull request
    - Monad則を破る話:
        - 半分強程度執筆
        - ReadmeTestの実装
            - 2020/11/09:
                - テストの誤りなど修正しつつ、さらに何ケースか解決。
                - `ValidateAsExpression`のテストが二つ間違ってるじゃないか...
                - というわけで残り11 failures
            - 2020/11/10:
                - 昨日見つけたテストの誤りを修正。残り9 failures。
                - 残りのundefinedを埋めるためにリファクタリングしつつ構成を整えた
                - あと、パーサーの仕様に穴があるせいで、一部意図通りに動いていなかった。`>`の直後に空白文字しか来なかった場合だ。そもそも`stripEnd`が余計だったと言えそう
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
- 読書など:
    - [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
        - 2020/11/09
    - [圏論入門 Haskellで計算する具体例から](https://www.nippyo.co.jp/shop/book/8340.html)
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）
        - 2020/11/09

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/6b08329f972d281fddd6ce73511ba6879ab47d2d/yesterday.md)
