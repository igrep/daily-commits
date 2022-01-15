# 2022/01/10 - 2022/01/16

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - [x] 繋げたエッジも動かす処理
                - 2022/01/11: 先週最後に見つかったバグの正体は、selectorの構文エラーだった。わかりづれぇ
            - [x] 無関係な箇所をクリック（pointerdown）したときにキャンセル
                - 2022/01/11: 多分できた
        - [ ] garageをはみ出ないようなハンドリング
            - 2022/01/12:
                - 今までclientX・clientYを使っていたがどうやら間違いだったらしい
                - 概ねできた。が、スクロールの外に動かしてからもう一度同じ要素を動かそうとすると、なぜかgarageの外に飛んでしまうバグが
                    - 簡単なことだ。getBoundingClientRectはviewport基準なので、ドキュメント基準での計算には合わない。page基準に正規化する関数を作らないと
            - 2022/01/13: 昨日のバグを直せた
        - [ ] ノードを動かした時のz-indexの制御
            - 2022/01/13: garageで一つz-indexの最大値を保持して都度incrementして振っていく感じかなぁ。上限に達しそうなら達した時に振り直す、ぐらいでいいか
            - 2022/01/14: z-indexによる方法だと、edgeに被さってしまうという問題がある模様。順番を入れ替える方がいいかなぁ
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
    - [ ] 企画の実装
- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/pull/91>
    - [ ] slack-logにも適用
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/01/10 - 2022/01/15

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに
- [ ] Yokohama.rbの問題 [103mask](http://nabetani.sakura.ne.jp/yokohamarb/103mask/)
    - 2022/01/15: 先週最後に思いついた方法がうまく行き、ようやくべき集合が作れたようだ。後は枝刈り。15件以上の場合に間引いたり、順番を整えたりする処理を効率化しないと
        - 欲が出るもので、もっと元の再帰を使ったpowersetを直接スタックを使った方法に翻訳することでシンプルにできないだろうか... という気がしてきた。
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/87d324590c6100febc419d8192b731b3bbc0a66d/yesterday.md)
