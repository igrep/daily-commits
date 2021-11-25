# 2021/11/22 - 2021/11/28

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - 2021/11/22:
        - 思いのほか捗ってメタデータをYAMLとして読むバージョンが大体できた気がする（テスト全然書いてないけど）
        - ただ、YAMLとしてのパースをyamlパッケージに任せることにした結果、新規投稿したページのURLを置き換えるのがちょっと婉曲になってしまった。まぁ、今まで正規表現でやってたことを少しひねれば実用上は十分だろう
    - 2021/11/23:
        - 昨日気づいた不足分の修正
        - preprocessor 機能のオプションを作ったけど実装ができてなかったので実装。
        - 一通りできたはずだけどテストが落ちる
    - 2021/11/24: テスト結果が見づらいのでHspecからSydTestに乗り換えている
    - 2021/11/25:
        - SydTestに乗り換えたけどあんまり結果見やすくない...
        - パーサーのバグらしいので直した。またいくつかバグが見つかった
- [ ] slack-webのAPI関数の型
    - <https://github.com/jpvillaisaza/slack-web/issues/90>
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2021/11/23 - 2021/11/25
    - The Implementation of Functional Programming Languages
        - 後回し

------

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
- [ ] Yokohama.rbの問題 [103mask](http://nabetani.sakura.ne.jp/yokohamarb/103mask/)
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/d429393e2b25d7ffaa76b4bb69c96f71f1befc9e/yesterday.md)
