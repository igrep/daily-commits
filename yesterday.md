# 2024/04/29 - 2024/05/05

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/04/30: 構文の型定義とテスト。Copilotのお陰でテストは楽できた
            - 2024/05/01: tokenを追加したが、何故かマッチしないっぽい。ああーそうだ、多分これ型チェック通ってないからtscがJS吐いてくれないからだ...
            - 2024/05/02: パーサーの実装まで。次は`quasiQuote`のテスト・実装
            - 2024/05/03: `quasiQuote`の最初のテストに着手しただけ
            - 2024/05/04 - 2024/05/05: 引き続きテスト
            - 2024/05/06: 実装に着手したけど、`quote`も`quasiQuote`も、引数の数に応じて配列を返したり単一の値を返したりするよう仕様変更したほうがいいような気がしてきた。他のLispの挙動も見てみよう
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/661288a9e4d234635a0eb442ba4a8c856c8792ef>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/05/06

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2e75620cb27f69c35c8dfe1bb80b0de14b2934de/yesterday.md)
