# 2022/02/21 - 2022/02/27

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] serialize/deserialize
            - 2022/02/21: edgeのシリアライズもできた... が、plugId/jackIdの言葉遣いが間違っていることに気づいてしまった... plugName/jackNameと言うべきところでもplugId/jackIdと呼んでしまっている
                - renameできたはず
            - 2022/02/22: デシリアライズの実装開始。vertexは簡単だけどedgeがちょっと面倒ね
            - 2022/02/23: デシリアライズ多分実装できた！と思って使ってみたら、なぜかedgeが復活しない。もしかしてgarageに追加し忘れてる？
            - 2022/02/24: やっぱり追加し忘れてる。できればテストも書きたいけど、面倒ねぇ。fast-checkとjsdomを使ってやろうかなぁ
            - 2022/02/25: fast-checkを使ったテスト書き始め。あとはgeneratorを作るだけのはず
            - 2022/02/27: generator作り超大変だったけど書けた... が、テストは落ちる。HTMLElementを継承したクラスは`customElements.define`が必須なのかな？エラーがそれだけだといいけど...
        - [ ] jackId/plugId/config keyのvalidation
    - [ ] 企画の実装
    - [ ] ブログ記事
- Haskell入門コンテンツ:
    - [ ] 課題13の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/30421cba6f4e87dad102cae12d441b825eb67406>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - 2022/02/26: summonerでプロジェクトを作るところと少しやった。
        - summonerはどうやら開発止まってて、新しいGHCのことを考慮してないっぽいのがつらい
        - cabal-installのライブラリーはなんと公開されてないらしい... <https://github.com/haskell/cabal/blob/master/cabal-install/cabal-install.cabal> だけ読んでたらそうでもなさそうなのに
            - なるほど。次期バージョンでは公開予定、と。 <https://twitter.com/viercc/status/1497546578605019147>
        - 用途を考えたらなるべく古いバージョンのGHCをサポートした方が良さそうなので、とりあえず開発はGHC 8.6.5で行うことに。ghcup list曰く、hls-poweredな最も古いバージョンなので
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/02/21 - 2022/02/27

------

- [ ] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c81d1c002e725139e6d8ad9454fa3f934e006ec2/yesterday.md)
