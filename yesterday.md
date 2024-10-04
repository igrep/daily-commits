# 2024/09/30 - 2024/10/06

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/09/30:
                - internal/transpile/module.test.tsのエラーは、間違ってテスト中に利用している.jsファイルを消してしまっていたせいだった。修正。
                - 残りのテストのエラーは`test.fails`でごまかして、次は予定していたtestパッケージの整理をしよう
            - 2024/10/01: 全てのテストを（`test.fails`で）通して、コミットした
            - 2024/10/02: 予定通り、testパッケージの整理をした
            - 2024/10/03: とりあえず、`MarkedFunctionWithEnv`は`module`では実行できないようにすることで残っていたテストを一部解決。次はいよいよ`macro`を`module`でも使えるようにする件だけど、どうするんだっけか
                - とりあえず、予定していた設計を参考に`meta.test.ts`にテストを追加しよう
            - 2024/10/04: `meta.test.ts`にテストを追加。とりあえずこれから実装する部分だけ
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/10/04

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5bd5a08d641ab747520302f7836e9de0cbc6197a/yesterday.md)
