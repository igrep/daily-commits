# 2021/07/12 - 2021/07/18

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - [ ] 繋げたエッジも動かす処理
                - 2021/07/12: ようやく再開。1週間も空けると忘れてるねぇ
                - 2021/07/13: とりあえず、アプリケーション側で考えた型の修正をライブラリーにも加えて、型チェックを通せた
                - 2021/07/14: edgeが作られてはいるが、やはりとんちんかんな位置に作られているようだ
                - 2021/07/15: デバッグコードを仕込んだり。あまり進まず。
            - [ ] ループの禁止
        - [ ] ノードを動かした時のz-indexの制御
        - [x] エッジが邪魔してクリックできない
            - 2021/07/16: `pointer-events: none`でサクッと解決
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- [ ] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/20>
    - 2021/07/17: ようやく実装側で、type-of-htmlからmustacheへの移植ができた
- 読書など:
    - [The Art of WebAssembly](https://nostarch.com/art-webassembly)
        - 2021/07/12 - 2021/07/18
    - The Implementation of Functional Programming Languages
        - 後回し

------

- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/0e655e86b336fa8107b61a984e32e4ec91f890ea/yesterday.md)
