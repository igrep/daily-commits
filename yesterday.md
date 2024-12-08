# 2024/12/02 - 2024/12/08

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/12/02: semgrepの使い方調査をしてやっと気づいた。私が使おうとしてたのはast-grepだ！
            - 2024/12/03: ast-grepで一部処理の修正が出来た。あんまりたくさんは出来なかったし、やっぱ難しいな
            - 2024/12/04 - 2024/12/05: ちょっとだけ。<https://github.com/cshuaimin/ssr.nvim>の方がast-grepよりいいかもしれないという気がしてる
                - やりたいのは特定のファイルにast-grepのコマンドを追加して、カーソル行にあるものを実行する事なんで、ちょっとした自前のVimスクリプトでいけそう
            - 2024/12/06: 昨日考えたツールの仕様を考えてた。sgへの入力はtomlに書き出してnuでパースすれば良さそうだ
                - やぱりyak shaving感は否めないが...。そもそも型込みでstructural search and replace出来ればいいのだけどなあ
            - 2024/12/07 - 2024/12/08: 昨日考えたツール作り。
                - `RunSgNu`を読んだ時点で現在のバッファーがtomlファイルにあるので現在のバッファーを入力ファイルの名前として使えないのが痛い。どうしたものか。
のが痛い。- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/12/08

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/82e04971dc33d622e5eea7970f8f440822454953/yesterday.md)
