# 2023/02/13 - 2023/02/19

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] `importJs`:
                - [ ] `fs/promises`の関数を呼べるように
                - [ ] globalの関数を呼べるように
            - [ ] `asyncFn`
            - [ ] `asyncScope`
            - [ ] `constAwait`
            - [ ] `readString`, `evaluate`
                - 2023/02/13:
                    - `fillNamespace`の実装終わり
                    - `referTo`の仕様変更に着手。従来の単純な`Id`型による`referTo`と、`Namespace`の中にマクロや関数が入っている場合などを考慮した`referTo`は別の実装にした方がよさそう
                - 2023/02/14:
                    - やっぱり`referTo`の実装を分けるのはよそう。一貫しない挙動になってしまう
                    - というわけで`Namespace`を考慮した`referTo`の実装虫。`Namespace`における最初の`Id`だけ従来の`referTo`と同じことをしてそれ以外は段階的に中の`scope`を掘っていけばいいんだけど、めんどいね
                - 2023/02/15: 仕様変更によってテストが落ちるようになったところを除いてできたと思いきや、まだらしい
            - [ ] viteの設定: <https://twitter.com/igrep/status/1623300862419546113>
            - [ ] テスト実行の高速化
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/02/13 - 2023/02/15

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/91acecf9ee3420d46281c5373f3ec8c1e564c1d5/yesterday.md)
