# 2022/06/20 - 2022/06/26

- [ ] 記事: タイトルを思いついたら
- [ ] 週刊アスキーへの道
    - [x] umdからES Moduleへ
        - 2022/06/20: 完了
    - [x] repositoryとパッケージ名のrename
        - 2022/06/20: 完了
    - [x] デプロイ
        - 2022/06/20: デプロイ用のスクリプトを軽く実装。今回はサブドメインも作らずthe.igreque.infoに置くことにした
        - 2022/06/21: デプロイもできた。ちゃんとtest-vertexesもロードできてる
    - [x] 指定したパスのJSONをロードする機能
        - 2022/06/20: やっぱ欲しいなぁ。デプロイしてからfetchで中を見られるかチェックするか
        - 2022/06/21:
            - 試しにデプロイしてみて、netlify上でもinex.htmlからJSONファイルがfetchできることを確認した。
            - 実装もできた。
    - [ ] README
        - [ ] 「マウスの移動」と犬を繋いでから、再生ボタンを押して犬を動かしているところの動画
        - [x] 各サンプルへのURL付加
            - 2022/06/22: できた
    - [ ] ブログ記事
        - 2022/06/22 - 2022/06/25: 執筆。スクショを貼り付けるところを除けば「直さないバグ」の手前まで書けた。
        - [ ] グラフの配置アルゴリズムのプロジェクトにも触れる
        - [ ] 直さないバグ: garageがドキュメントのスクロール領域から外れると、エッジの描画される位置がおかしい
        - [ ] 直さない: ループのあるgraph
        - [ ] 直さない: Web Componentの使い方が多分おかしい
        - [ ] 直さない: jackから線を引く
        - [ ] 直さない: エッジがクリックしにくい
        - [ ] 共有先: ハッカー飯もくもく会
        - [ ] 共有先: GUI会
- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> をTypeScriptでやる
        - 2022/06/25:
            - テストケースの追加とか、細かい修正
                - https://github.com/igrep/custard/commit/5ed3882c002f02a2690f48b77d7dd9b5c567d7a3
                - https://github.com/igrep/custard/commit/54e44c05aaf794824f7dbf139b1c85de8ea21a57
                - https://github.com/igrep/custard/commit/9fb88267b5689de16b8c78083c721aa0f3923e81
            - 次はコメントの構文と、reader macroかなぁ。あるいはreader macroを飛ばして次のEvalに進むか
- Haskell入門コンテンツ:
    - [ ] 課題15の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/06/20 - 2022/06/25

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/7a99d90deb2b79884c9621d9484c8c564ae78fd0/yesterday.md)
