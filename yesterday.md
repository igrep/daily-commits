# 2024/03/11 - 2024/03/17

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/03/11: テストを全部直せたつもりだが、案の定見るも無惨に落ちまくってる
            - 2024/03/12: なんかtscの挙動がおかしい！むかつく！package分けてからずっとこれでうまく行ってたはずなのに！！！
                - 頭の中を整理するに、どうやらあるときから`npx tsc -b tsconfig.json`が変換結果を出力しなくなったらしい（型エラーは出る）。あと、各packageのディレクトリーで`tsc`するとなぜかES3のコード（実際にはES3としてもおかしい、classのprivate変数を使っているのに古い方式のclass構文を使わないclass）が出力されてしまう
                    - 出力された後更新されなくなったファイルの中身（もう消してしまったけど）やvitestの結果を思い出すに、やっぱりあるときから突然出力されなくなったとしか思えない
                - とりあえず`typescript`のバージョンを上げるところからかねぇ。新しいバージョン出てるし...
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 2 Programming Language Foundations](https://softwarefoundations.cis.upenn.edu/plf-current/index.html)
        - 2024/02/02 - 2024/03/12

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/fdd24e4811df5d00f14211354154fe1f418fabb5/yesterday.md)
