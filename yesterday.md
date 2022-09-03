# 2022/08/29 - 2022/09/04

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
    - [x] `if`を`if/else`に修正
        - 2022/08/29: できたわ。後エラーメッセージを少し改善したわ
            - <https://github.com/igrep/custard/commit/497dcb1faca66e23349397689b456c2ddeac32cc>
            - <https://github.com/igrep/custard/commit/e188c7302fd1c3de2bfd2c0effca2e2aea89272d>
    - [x] 余分な引数を与えた場合のテストケースとその修正
        - 2022/08/30: テストしたいformを列挙してテストケースを追加
        - 2022/08/31: 実装: <https://github.com/igrep/custard/commit/475a7bba5cc1a07b97e2c01406a82ee5fb11059e>
    - [x] 引数が足りなかった場合のテストケースとその修正
        - 2022/08/31: 見直していたら他にも足りないテストケースがあったので追加
            - <https://github.com/igrep/custard/commit/f4638385f93bafef390db0fbb90456d839ee0a60>
    - [ ] C0カバレッジをとる。大事そうなところだけ埋める
        - 2022/08/31: とりあえず有効にした。ここは、ってところもあるけど埋めるのはまた今度でいいかなぁ
            - <https://github.com/igrep/custard/commit/f319d85da783c8d16a00f65c80101506b1054cc5>
        - 2022/09/01: と、思ったけど`fn`と`if`の一部だけ埋めることにした。`fn`完了。
        - 2022/09/02: 両方完了: <https://github.com/igrep/custard/commit/94ef10f579d35b23a4d0d48fe7a05b3e68334943>
- Haskell入門コンテンツ:
    - [ ] 課題15の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/543129f7e525cf8377a9082cb289a3bcb68dcf16>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] cabalファイルのパース
        - 先週であったエラーを直すべく、`configure`コマンドがどのようにパラメーターを設定しているか調べてた
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/08/29 - 2022/09/03

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/03601f58869832e0a6c7869c8d0d4a90fc2c31ba/yesterday.md)
