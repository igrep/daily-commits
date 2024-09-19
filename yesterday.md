# 2024/09/16 - 2024/09/22

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/09/16: 昨日気付いたテストの失敗の原因は、primitive系の`Form`の`quote`がちゃんとできてなかったからだった
                - 直したはいいが、今の実装だと`quote`した`Form`に`Location`がついてこないので、まだテストが落ちるだろう（実際のところ何故か落ちていないけど）
                    - やっぱり本当は、`located***`を`meta`で公開するべきなんだろうな。できれば隠したいけど...
            - 2024/09/17:
                - 今日はちょっとだけ。`meta.macro`のテストを一部修正
                - おかしい。古い実装のテストをしているっぽい。`npm run clean`したら今度は`@vitest/expect`モジュールから`import`してるものについて型エラーになる。vitestのエラー曰く、vitestのpackage.jsonの`main`フィールドを見ろ、とのこと。いや見たけど全然問題なさそうなんだが？
            - 2024/09/18:
                - `node_modules`を全部削除して再インストールで解決
                - 昨日懸念した「古い実装の手素では？」は、実際はそうじゃないらしい。`dist`にあるコンパイルされたコードを見るに、最新のコードが反映されているようだ
                    - テスト結果をにらめっこするに、これは想定通りの挙動っぽいな
            - 2024/09/19: 昨日気づいた問題を直したが、まだ同じテストが失敗する。「Compared values have no visual difference.」らしい。つらい
                - `extension`が違う値なのかな？
                    - どうやら、`array`を`quote`するときの間違いらしい。直した。
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/09/19

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/487a45041faac76ad8b89234215b20456f7a50ce/yesterday.md)
