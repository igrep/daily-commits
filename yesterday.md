# 2022/03/21 - 2022/03/27

- [ ] 週刊アスキーへの道
    - 2022/03/21: UIの参考にするためにスクショ撮っただけ。元ネタと現状を比較するに、プレイするボタンは一番左側にして、stageを出しているときはreplayとstopを左側に出す、というのが一貫してていいかも
    - 2022/03/22: stageを出しているときのmenu作り
    - 2022/03/23: stageを出しているときのmenu作りに加え、切り替え処理が一通りできた。なかなか処理本体にたどり着かないね...
    - 2022/03/24:
        - stageの色を設定
        - インタープリターの実装方針を検討。トポロジカルソートをしなくても、plugだけがある、plugとjack両方がある、jackだけがある、という順で並び替えるだけでもとりあえず実行できるのでは
    - 2022/03/25: vertexの並び替えを実装。次に必要なのは、vertexの接続関係を表すグラフを構築するところかな
    - 2022/03/26: グラフを構築するところで使いやすくするために、型の設計を大幅に変え、ついでに評価用のvertexをvertexのkind毎に違う型にすることにした。validationとかめんどいけどこの方が理にかなった設計ではあるはず
    - [ ] umdからES Moduleへ
    - [ ] repositoryのrename
    - [ ] ブログ記事
- Haskell入門コンテンツ:
    - [ ] 課題14の不足箇所を埋める
        - 2022/03/27: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/67102bebfec2805d51ef60064535c5f661f890d9>
        - [x] Dockerで動作確認できる環境を組み立てる
            - 2022/03/27: できた。また月曜日に買ったSSDがうまく動かなかったりして苦戦した
- [x] unicode-showのリファクタリング: <https://github.com/hspec/hspec/pull/588>
    - 2022/03/27: 完了。新しいバージョンのリリースができた
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/03/21 - 2022/03/27

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f146f17a3801163b6ee6d707b87c7658df897a9b/yesterday.md)
