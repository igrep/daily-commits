# 2021/08/09 - 2021/08/15

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - 2021/08/09: 先週見つかった問題は、先週読んだ記事が指摘している問題というより、`verton-garage`の高さが0になっているからだった。修正。
                - 位置や大きさを計算する関数をリファクタリングの前に自動テストを書こうと思いきや、なんかモジュールの分割をするとエラーになってしまう
            - 2021/08/10: モジュールの分割できた。型だけをimportしているとうまくいかないらしい。
            - [ ] 繋げたエッジも動かす処理
        - [ ] ノードを動かした時のz-indexの制御
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
        - 2021/08/09: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/cbca33b36b871b6421b549d6eb1732fc84b6e675>
            - 一昨日の更新も含まれてるけど。
- [ ] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/50>
    - 2021/08/09: テストケースの修正
- 読書など:
    - [The Art of WebAssembly](https://nostarch.com/art-webassembly)
        - 2021/08/09 - 2021/08/10
    - The Implementation of Functional Programming Languages
        - 後回し

------

- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/580c118433f07a55a0bbad2b841227d246a572cd/yesterday.md)
