# 2021/03/22 - 2021/03/28

- wasm2arm32 compiler:
    - i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- 週刊アスキーへの道
    - 実装
        - ノードが重なる問題の修正
            - 2021/03/22: 計算を適当に切り上げる作戦をやってみるも失敗。ノードがものすごく遠くに行ってしまう。試行回数を減らせば一応見える位置にとどまるが、やはりノードを増やせば増やすほどどんどん右下に移動する。
        - 移動時のアニメーション
        - ノード間のエッジを付ける
        - ノードのweightを上げ下げするボタン
    - 提出に向けた調整
- Haskell入門コンテンツ:
    - 課題11の不足箇所を埋める
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
    - タイプセーフプリキュア
        - <https://github.com/igrep/typesafe-precure/issues/44> を解決
- 読書など:
    - The Implementation of Functional Programming Languages
        - 2021/03/22
    - [Reeact and React Native - Third Edition](https://www.packtpub.com/product/react-and-react-native-third-edition/9781839211140)
        - 2021/03/22
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）
        - 2021/03/22

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c7fc53bdd57e4d61c2252f96541a3f97ab011be2/yesterday.md)
