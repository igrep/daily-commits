# 2021/12/27 - 2022/01/02

- [ ] Qwik試す。気が向いたら記事を書く
    - 2021/12/27: ちょっと試すも早くも改善した方が良さそうな箇所が。一つは<https://github.com/BuilderIO/qwik/pull/120>で直りそうだけど
    - 2021/12/28: 手元で<https://github.com/BuilderIO/qwik/pull/120>を直して実行するも、今度は<https://github.com/BuilderIO/qwik/issues/108>にぶち当たる。根が深そう。`qHook`の引数を変換するべきところでできてない感じかなぁ。でもPlaygroundの結果を見た感じ、やっぱり`qHook`の引数は関数のままだ。もしかしたら、SSR用サーバー向けに変換する処理が足りてないのだろうか。rollupプラグインの設定がおかしい？
    - 2021/12/29: Pull request送った <https://github.com/BuilderIO/qwik/pull/124>。あっさりマージしてもらえた
    - 2021/12/30: 大分コードを掘ってみたけど原因不明。`qwik.exe`から実行したときは問題ないっぽいけどrollupプラグインで実行したときは再現する。Rustの部分にコードを入れて手元のプロジェクトで動かす方法が分かったのでもうちょっと地道にやるかなぁ
    - 2021/12/31: 多分直せたはずなのでPull request送った <https://github.com/BuilderIO/qwik/pull/128>
    - 2021/01/01: <https://github.com/BuilderIO/qwik/issues/116>の直し方を検討しつつコードを読んでる
    - 2022/01/02: 原因は分かった。直し方は色々ありそう <https://github.com/BuilderIO/qwik/issues/116#issuecomment-1003655493>
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2021/12/27 - 2021/01/02
    - The Implementation of Functional Programming Languages
        - 後回し

------

- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/issues/90>
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - [ ] 繋げたエッジも動かす処理
            - [ ] 無関係な箇所をクリック（pointerup）したときにキャンセル
            - [ ] garageをはみ出たときのハンドリング
        - [ ] ノードを動かした時のz-indexの制御
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに
- [ ] Yokohama.rbの問題 [103mask](http://nabetani.sakura.ne.jp/yokohamarb/103mask/)
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/7500d11333a0c4f49f29469642feb7d069f5ab9d/yesterday.md)
