# 2024/09/16 - 2024/09/22

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/09/16: 昨日気付いたテストの失敗の原因は、primitive系の`Form`の`quote`がちゃんとできてなかったからだった
                - 直したはいいが、今の実装だと`quote`した`Form`に`Location`がついてこないので、まだテストが落ちるだろう（実際のところ何故か落ちていないけど）
                    - やっぱり本当は、`located***`を`meta`で公開するべきなんだろうな。できれば隠したいけど...
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/09/16

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/487a45041faac76ad8b89234215b20456f7a50ce/yesterday.md)
