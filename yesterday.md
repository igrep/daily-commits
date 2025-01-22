# 2025/01/20 - 2025/01/26

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
        - 2025/01/20 - 2025/01/21: `import`するときの`Ktval`の仕様変更
            - 次は`module`で変数宣言の`const`と`let`をちゃんと出力してない問題の解決
        - 2025/01/22: `const`/`let`の出力ができてない問題は解決。今度は何故か同じコードが2回繰り返されて出力されている問題が見つかった。`import`文だけを`transpile`するはずの処理で、全体を`transpile`してしまっているらしい。だいたい原因は分かるけどどう直したものか
            - `import`と本体を別々に出力するよう`Ktval`を`JsSrc`に変換する処理を分けるか？
                - `import`だけを集める、って処理は`Ktval`以前のレイヤーに残しておきたいなあ
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2025/01/22

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/44f048589aab690f7f0680ee5054ffa2dba8f897/yesterday.md)
