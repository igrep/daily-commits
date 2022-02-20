# 2022/02/14 - 2022/02/20

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [x] ノードのパラメーター: 定数ノードの設定方法など
            - 2022/02/14: 当初の設計から微修正、サンプルに定数vertonを追加
            - 2022/02/15: 設定に応じて`input`要素を追加したり、`input`に入力した値を取得する処理を実装。あとは見た目だけやね
            - 2022/02/16: 見た目の設定もとりあえずヨシ！
        - [x] 初期位置のレイアウト
            - 2022/02/17: 自動レイアウトは諦めて、ユーザー側が設定する仕様に。
            - 2022/02/18: できた
        - [ ] serialize/deserialize
            - 2022/02/18: 必要そうな関数を列挙
            - 2022/02/19: 進んではいるが、いくつか問題が:
                - vertexIdの割り当てロジックを見直さないといけないね...
                - plugとjackは、要素の状態から直接復元できない。もう面倒くさいしconfigとposition以外の値を全部JSONにしてdata attributeに突っ込んじゃおうかなぁ
                - ともあれ、vertexのシリアライズができた
    - [ ] 企画の実装
    - [ ] ブログ記事
- Haskell入門コンテンツ:
    - [ ] 課題13の不足箇所を埋める
        - 2022/02/20:
            - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/8119a934f3b1875da89b031c730867d5c5186e01>
            - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/0a2e83b2109663d274439eba01b178e087483282>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/02/14 - 2022/02/20

------

- [ ] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5670334f16b7fdf9748a24f144cccb2ed3d6819d/yesterday.md)
