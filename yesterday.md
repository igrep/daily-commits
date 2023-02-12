# 2023/02/06 - 2023/02/12

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
                - 2023/02/06: ESMへの移植が終わったはず
                - 2023/02/07: 一部テストは実行できるようになったが、timeoutが発生するらしい
                - 2023/02/08:
                    - 諸々の問題を直してようやく見えてきた。エラーが無関係そうなところで発生するから分かりづらい！
                    - transpile/module のテストでなんで `a` が `aVar` になっているのかがよく分からないなぁ。まぁどの道関係する処理は潰す予定なんだけど、別のバグの原因になってないか気になる
                - 2023/02/09: 昨日残した問題を直せた。なんで`findModule`の中で`set`したんだ...
                    - 明日は`Writer`型を再定義して、`import`したモジュールから正しく値を取れるようにしよう...。その上で`Env`にアクセスできる関数を定義できるようにしよう
                - 2023/02/10: `Writer`型の再定義。既存のライブラリーにも適用
                - 2023/02/11: あともうちょっとっぽい。`import`したモジュールを`eval`の中で初期化するという面倒なテクニックを思いついた。`mode === "module"`の時も別途初期化処理を実装しないとね。その後は`Env.referTo`について、`Namespace`を考慮するよう修正すればできるはず！
                - 2023/02/12: `fillNamespace`を一部実装するだけで終わり
            - [ ] viteの設定: <https://twitter.com/igrep/status/1623300862419546113>
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - 2023/02/12: いろいろ問題発覚。難しいなぁ
- [x] 個人用URL修正bookmarkletのプロジェクト
    - 2023/02/06: だいたいできたと見て良さそうね。
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/02/06 - 2023/02/12

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/e8ebbd76d5b913939b3db290984ac944dea9a313/yesterday.md)
