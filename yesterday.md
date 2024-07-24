# 2024/07/21 - 2024/07/28

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/07/22: 新しい`fn`の実装で`name`が指定されたとき、`pseudoTopLevel`にsetしないといけないことに気づいた。即時関数を作ってその中で`topLevelValues`にsetするか。めんどいねぇ
            - 2024/07/23: 多分修正できた
            - 2024/07/24: 「引数がtop levelの変数ってことになってる」は手つかずだった。
                - それ以前に、生成されたコードを見るにまだうまく処理できてない。マクロを実行時に展開していない！
                    - `set`するときに`Macro`として`set`できてないような？
- 読書など:
    - [jotaiのドキュメント](https://jotai.org)
        - 2024/07/15 - 2024/07/24

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/263ae04d4a5a5c4018379b4089a10e3a14c72193/yesterday.md)
