# 2025/01/06 - 2025/01/12

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2025/01/06: `evalBlock`の場合の間違いに気づいた。`expand`してから、入力しているコードを頭から実行してしまっているのが原因らしい。通常の入力も`nonEvaluatedSrc`と同じように扱わなければならないのだ。どう直したものか
            - 2025/01/07: `nonEvaluatedSrc`を都度空にするのではなく、どこまで評価したかを覚えておく必要がある？
                - いや、`nonEvaluatedSrc`に残っているコードを曽於ママ評価すればよいのでは...？と思って調べていたが、そもそも残っていないケースもある、と。だからその場合に備えて最後に評価した結果を覚えておく必要があるね
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2025/01/07

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2df98ee35cc0bf000be2b75ae88e3b1a82a23b5a/yesterday.md)
