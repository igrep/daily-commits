# 2022/02/28 - 2022/03/06

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] serialize/deserialize
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

------

- [ ] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f9894ed59e8d41b9df56887c7e270bbe08580c78/yesterday.md)
