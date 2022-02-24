# 2022/02/21 - 2022/02/27

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] serialize/deserialize
            - 2022/02/21: edgeのシリアライズもできた... が、plugId/jackIdの言葉遣いが間違っていることに気づいてしまった... plugName/jackNameと言うべきところでもplugId/jackIdと呼んでしまっている
                - renameできたはず
            - 2022/02/22: デシリアライズの実装開始。vertexは簡単だけどedgeがちょっと面倒ね
            - 2022/02/23: デシリアライズ多分実装できた！と思って使ってみたら、なぜかedgeが復活しない。もしかしてgarageに追加し忘れてる？
            - 2022/02/24: やっぱり追加し忘れてる。できればテストも書きたいけど、面倒ねぇ。fast-checkとjsdomを使ってやろうかなぁ
    - [ ] 企画の実装
    - [ ] ブログ記事
- Haskell入門コンテンツ:
    - [ ] 課題13の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/02/21 - 2022/02/24

------

- [ ] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c81d1c002e725139e6d8ad9454fa3f934e006ec2/yesterday.md)
