# 2021/10/18 - 2021/10/24

- [ ] その他: WebAssembly Reference Typeの記事:
    - 2021/10/20: wasm-bindgenの使い方を調べただけ
    - 2021/10/21: wasm-bindgenでReference Typesを使ったコードを吐いてみた
        - `wasm-bindgen --target web --reference-types .\target\wasm32-unknown-unknown\release\reference_types_examples.wasm --out-dir .\pkg-with-reference-types\`
        - やはりStringはJSのStringを渡していても`getStringFromWasm0`等を使ってやりとりしないといけないらしい。これはこれで速度の比較をしたいけど、完全にreference typesを使ったバージョンも作りたいなぁ。
- [ ] Haskell Day 2021
    - [x] 動画作成
        - 2021/10/18: Windows 10のフォトの使い勝手を確認・編集開始。カット編集しにくそうだけど、まぁなんとかできるかな？
        - 2021/10/19: 編集完了
- [ ] タイプセーフプリキュア
- [ ] sydtestへIssue・PR
    - [x] Windowsでも動くようにした（必要があれば対応）
        - 2021/10/18: `CONTRIBUTORS`ファイルに言われたとおり追記。GitHubのアカウント名だけで本当に大丈夫？その後マージしてもらえた
    - [ ] `--system-ghc`
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
- 読書など:
    - [n月刊ラムダノート Vol.2, No.1(2020)](https://www.lambdanote.com/products/nmonthly-vol-2-no-1-2020-ebook?variant=31876236214356)
        - 2021/10/18 - 2021/10/22
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

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/35f6c9252924b6a4f586e4b262eab6bdd4fc86da/yesterday.md)
