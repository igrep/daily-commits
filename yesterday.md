# 2022/01/24 - 2022/01/30

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] エッジの色・太さ
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
    - [ ] 企画の実装
    - [ ] ブログ記事
- Haskell入門コンテンツ:
    - [x] 課題12の不足箇所を埋める
        - 課題12はここまでにしておこう: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/12d7ad5a97be8c30127e3e1baa5bafe905ce4178>
- [ ] べき集合を再帰なしで
    - 2022/01/24: 昨日思いついたアルゴリズムがちゃんとうまく行ってるっぽい。面白かったので他の実装と組み合わせてテストしつつ、記事にしよう
    - 2022/01/25: 記事のためのテスト用リポジトリーを作成中。Haskell版のテストと実装が書けた
    - 2022/01/26: Ruby版と通信するための処理を実装。できたかな？
    - 2022/01/27: Ruby版から出力を得るのがなぜかうまくいかず、苦労したが、typed-processのREADMEにあったサンプルのとおり、stdinをcloseしたらうまくいった。よくわからねぇ
    - 2022/01/28: サンプルのリポジトリーができた: <https://stackoverflow.com/a/39539472/4299824>
        - 起動したrubyコマンドをそのまま再利用したかったけなぜかうまく行かず、諦めて1回の関数呼び出し毎に起動することにした。
            - 子プロセスとの通信について改めて試した感じ、もしかして`Data.Text.IO`の関数を使ったから（あるいは`String`の関数と混ぜたから）ダメだったのかな？
    - 2022/01/30: ちょっと記事を進めた
- [ ] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/01/24 - 2022/01/30

------

- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
        - 2022/01/29: GHCiの`:reload`・`:load`コマンドのドキュメントを読んでいた。これを見るに、stackのやっていることをつぶさに調べるないで直接ghciにいろいろオプションを与えてみた方が効率的な気がする
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f52d29551e213d9aa401454addbecaed1bb2d0e4/yesterday.md)
