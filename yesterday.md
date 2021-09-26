# 2021/09/20 - 2021/09/26

- [ ] Haskell Day 2021の動画作り
    - [x] 録音
        - 2021/09/20: とりあえずできた
    - [x] 編集
        - 2021/09/21: とりあえず全部の録画を結合しようとしたらScreencast-O-Maticのバグと格闘する羽目に。もう使わん！Adobe Premiereの無償期間で作りきる！
            - <https://twitter.com/igrep/status/1440112693923307521>
        - 2021/09/22: Adobe Premiereに読ませるためにScreencast-O-Maticで全部エクスポート
        - 2021/09/23: 全部がっちゃんこしたら合計時間17:59あったのを17:00まで削れた。この調子ならスライドをなくすほどの修正は要らないだろう。
        - 2021/09/24: 7秒だけ削った
        - 2021/09/25: 15:49 / 15:00。途中スライドのリストアイテムの一部にマーカーを着ける必要があって戸惑ったけど結構進んだ
        - 2021/09/26: 15:02 / 15:00。できた。
    - [ ] スライドの英訳
        - 2021/09/26: 10/35。
- 読書など:
    - [Software Design 2021年5月号](https://gihyo.jp/magazine/SD/archive/2021/202105)
        - 2021/09/20 - 2021/09/26
    - The Implementation of Functional Programming Languages
        - 後回し

------

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
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f15af937745d23962728283cc3a35cf6e2c36def/yesterday.md)
