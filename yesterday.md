# 2022/01/31 - 2022/02/06

- [ ] べき集合を再帰なしで
    - 2022/01/31: 「たどり着くまで」以外の節が書けた。もうあんまり時間かけたくないし簡単に行こう
    - 2022/02/01: サンプルコードの改善
    - 2022/02/02: よーく考えたら`foldr`なども根本では再帰呼び出しを使っているんだから、やっぱりこの記事はRubyで書いた方がいろいろやりやすいな
    - 2022/02/03: Rubyで書き直し。今書けているところまでは問題なく書き換えられたはず
    - 2022/02/04: 引き続きRubyで書き直し。今度こそ今書けているところまでは問題なく書き換えられたはず
    - 2022/02/06: 全部書き切れたはず。明日見直して公開かな？
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
    - [ ] 課題13の不足箇所を埋める
        - 2022/02/05: 今日はここまで。大分課題13も手直しが必要そうね
            - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/32de875b0b9ccadc35d6c80ff56db0645ab03f4b>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
        - ひたすらcabalやstackの、主にcabalのソースを読んでよさげな方法を調べていた。大分分かったのでtypesafe-precureのディレクトリーにメモを書いた
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/01/31 - 2022/02/06

------

- [ ] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/81447318812c5686e5ac16f2d4b6030d38c2e905/yesterday.md)
