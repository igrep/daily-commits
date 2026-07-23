# 2026/07/20 - 2026/07/26

- custard:
    - [ ] 個人用スクリプト1
        - 2026/07/20: これまでの変更をコミット。できればnpmに上げる前に手元で試したいし、インストール用のスクリプトを考えよう
        - 2026/07/21: インストール用のスクリプトが多分出来た。明日試そう
        - 2026/07/22: インストール用のスクリプトは動いているようだ。で、問題はこのtranspileしたスクリプトを試すのがちょっと面倒なことだねぇ
            - 別件で、@custard-lang/commandのテストが落ちていたので直した
        - 2026/07/23: バグ修正。よく考えたらテスト用に空の`.png`ファイルを与えるので試し方としては十分か。
            - あと、なんか`@custard-lang/processor`のバグを見つけた。namespaceに存在しないものにアクセスしたときのエラーがおかしい: ```TranspileError: `existsSync` is not defined in ``!```
    - [ ] tampermonkeyのスクリプト作成3
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/05/21, 2026/05/24 - 2026/07/23

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/0cefa42fccf66c6758fc6434ab88b2e114fc8b63/yesterday.md)
