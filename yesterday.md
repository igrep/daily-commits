# 2022/03/07 - 2022/03/13

- [ ] 週刊アスキーへの道
    - 2022/03/07: 新しいノードの追加位置を決めるアルゴリズムの実装を少し進めた。そんなに速度が重要でもないし複雑にしたくもないので早く仕上げよ！
    - 2022/03/08: とりあえずvertexを一つ追加できたが、いくつかミスが:
        - ロード時に、イベントハンドラーの登録ではなく直接vertexの追加をしてしまった
        - 追加した後のノードの動きがおかしい。ちゃんとマウスについてこない
            - マウスの位置の計算がpageX/pageY起点になってるからかな
    - [ ] umdからES Moduleへ
    - [ ] repositoryのrename
    - [ ] ブログ記事
- Haskell入門コンテンツ:
    - [ ] 課題14の不足箇所を埋める
        - [ ] Dockerで動作確認できる環境を組み立てる
        - 2022/03/13: ちょっとだけ <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/05149eae4736c6cbbf9cd9b23bcc590b17b48808>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/03/07 - 2022/03/13

------

- [ ] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
    - 2022/03/13: 概ねできたが、最後のケースで組み合わせ爆発が起きてしまうのか、テストが終わらない。ReadPを使わず他のパーサーコンビネーターを使うしかないんじゃなかろうか...
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/667f4a0598804e796e564704f310cd595465016b/yesterday.md)
