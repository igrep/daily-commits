# 2021/10/11 - 2021/10/17

- [ ] その他: WebAssembly Reference Typeの記事:
    - 2021/10/11: Reference Typesの例の解説は終わり
    - 2021/10/12: Rustのwasm-bindgenを使った例を作成開始
    - 2021/10/14 - 2021/10/16: Rustのwasm-bindgenを使った例を作成
        - 2021/10/16: 例ができた！と思いきや二つ問題が
            - <https://rustwasm.github.io/wasm-bindgen/reference/reference-types.html> 曰く、reference-typesを使うにはwasm-bindgenのオプションを指定する必要があるらしい。wasm-packからやるにはどうすれば？直接呼ぶしかない？
                - <https://rustwasm.github.io/wasm-pack/book/cargo-toml-configuration.html> をいじるのかな？しかしその場合、コマンドラインオプションで切り替えるのが難しそう
                    - 違った。wasm-pack側のサポートがまだらしい <https://github.com/rustwasm/wasm-pack/pull/888>
            - 比較のためのベンチマークはどうしよう
                - console.time() を使うらしい <https://developer.mozilla.org/ja/docs/Web/API/Console/time>
- [ ] Haskell Day 2021
    - [ ] 投稿動画とHaskell-jpの活動を見て内容の検討
        - 2021/10/12: ふりかえり以外の内容ができた。ふりかえり作るの面倒だしどうしようかなあ
    - [ ] 動画作成
        - 2021/10/13: 今できている部分を読み上げて録音。1分ちょうどくらいだし、振り返り作るのはいいかもなぁ
- [ ] タイプセーフプリキュア
- [ ] sydtestへIssue・PR
    - [x] Windowsでも動くようにした
        - 2021/10/13: 送った: <https://github.com/NorfairKing/sydtest/pull/18>
    - [ ] `--system-ghc`
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- 読書など:
    - [Software Design 2021年5月号](https://gihyo.jp/magazine/SD/archive/2021/202105)
        - 2021/10/11
    - [n月刊ラムダノート Vo1, No.1(2019)](https://www.lambdanote.com/products/nmonthly-vol-1-no-1-2019-ebook?variant=21993199730772)
        - 2021/10/12 - 2021/10/14: もう読んだ内容だった... また読むけど...
    - [n月刊ラムダノート Vol.2, No.1(2020)](https://www.lambdanote.com/products/nmonthly-vol-2-no-1-2020-ebook?variant=31876236214356)
        - 2021/10/14 - 2021/10/16
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
- [ ] ブログとQiitaに同時投稿するのをサポートするツール
- [ ] Yokohama.rbの問題 [103mask](http://nabetani.sakura.ne.jp/yokohamarb/103mask/)
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] 現在のcabal・stackの仕様を調査
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/6c6ac627ab4d37db3bd08b7b8599098eb8022a96/yesterday.md)
