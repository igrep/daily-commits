# 2021/08/16 - 2021/08/22

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - 2021/08/16: テストケース1つ追加。まだ失敗させてない
            - 2021/08/17: 昨日書いたテストケースの修正。
            - 2021/08/18: テストさらに追加
            - 2021/08/19: リファクタリング、してみたけどやっぱイマイチね...
            - 2021/08/20: やっぱり元に戻した！
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
- [ ] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/50>
    - 2021/08/21: スレッドを書き出すときのテンプレートや、処理のテストを作成などなど。もう少しでできそう
- 読書など:
    - [The Art of WebAssembly](https://nostarch.com/art-webassembly)
        - 2021/08/16 - 2021/08/21
    - The Implementation of Functional Programming Languages
        - 後回し

------

- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/24b3b72fcadafdd3843fee88c7cfa7a5ecec3c0b/yesterday.md)
