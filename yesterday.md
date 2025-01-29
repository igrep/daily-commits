# 2025/01/27 - 2025/02/02

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2025/01/27: 一つバグ修正。次のやつは、また同じコードを2回出力させてしまっている件だ。先日直したつもりのと同じ原因なんだろうか
                - `recursive`固有の問題っぽい。`recursive`が中で`transpileBlock`を呼んでいるのだ
            - 2025/01/28: 一つバグ修正。`recursive`だけでなく、他にも中で`transpileBlock`を呼んでいるところがあったので同時に直した。`module`のテストは残り12件。
            - 2025/01/29:
                - 二つバグ修正。`module`のテストは残り1件。`repl`のテストは残り4件まで減ってた。
                - どこで`;\n`を挟むか迷ったなあ。
                    - 昨日作った`transpileExpressions`で`;\n`を挟んでいないのが原因だった。普通に直せた。`transpileExpressions`というより`transpileStatements`だね。
                - 昨日のバグとは関係なしに、二重に`import`を出力してしまう問題がまだあるらしい。なんで`module`のテストで再現しないんだろう
                    - ちょっと対策を考えた。`transpileBlock`した結果から`import`の分を抜き取るのは出来そう。`importsSrc`からoffsetが分かるわけだし
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2025/01/29

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/6e2e66bf2efa8a50e75b06d5048360d7b4ff88cd/yesterday.md)
