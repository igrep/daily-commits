# 2025/02/02 - 2025/02/08

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2025/02/03: `import`の評価を事前に行う修正ほぼ完了
            - 2025/02/04: 一昨日からの修正ができた。が、まだ問題が直っていないっぽい？
                - デバッグのために`custard transpile`コマンドを手動で実行してみたら、直った。transpileの順番の問題っぽいなあ。`split.cstd`の依存モジュールである`iso8601ForFs.cstd`を先にtranspileした方が良さそうだ
                - いずれにしても、ようやくテストが全部通せた！次こそコミット
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2025/02/04

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/6a95946d454aa9595d75dcf6f7a5fdf669a4139a/yesterday.md)
