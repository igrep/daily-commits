# 2025/01/06 - 2025/01/12

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2025/01/06: `evalBlock`の場合の間違いに気づいた。`expand`してから、入力しているコードを頭から実行してしまっているのが原因らしい。通常の入力も`nonEvaluatedSrc`と同じように扱わなければならないのだ。どう直したものか
            - 2025/01/07: `nonEvaluatedSrc`を都度空にするのではなく、どこまで評価したかを覚えておく必要がある？
                - いや、`nonEvaluatedSrc`に残っているコードを曽於ママ評価すればよいのでは...？と思って調べていたが、そもそも残っていないケースもある、と。だからその場合に備えて最後に評価した結果を覚えておく必要があるね
            - 2025/01/08: `lastEvaluationResult`というプロパティーを追加して、`evalForMacro`の結果を出すようにしてみたが、どうやら結果を保存するのはここではないらしい
            - 2025/01/09: `evalBlockCore`で最後の結果を保存するようにすればいいらしい
                - しかしいずれにしても`evalBlockCore`を使う`evalBlock`の側からでは、`nonEvaluatedSrc`と元々の入力と合わせて2回実行してしまう問題は解決できないので、やっぱりもうちょっと変えないと
                    - もう一つの`jsMod`を`transpileBlockCore`で組み立てる、という方式は`repl`では意味がないので、一昨日からうっすら考えていた、`consumer`みたいなオブジェクトが必要なんだろうな
                        - いや、そこまでしなくても、あるいはそうした上で、`nonEvaluatedSrc`のindexを記録する方式に変えるのがよさそう
            - 2025/01/10: `nonEvaluatedSrc`のindexを記録する方式に変え始めた
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2025/01/10

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2df98ee35cc0bf000be2b75ae88e3b1a82a23b5a/yesterday.md)
