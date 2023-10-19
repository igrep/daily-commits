# 2023/10/16 - 2023/10/22

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - 2023/10/17: transpile errorの修正一部。
            - 2023/10/18: すぐ起こるランタイムエラーは直せた。が、特にエラーも出さず、1件も取得できない。
            - 2023/10/19:
                - 昨日の問題は、単にBlueSkyが返すレスポンスの構造を勘違いしていたからだった
                - 直したけど、今度は無限ループに。`cursor`を指定しても同じレスポンスが返ってくるのは仕様なんだろうか...
                    - 詳細調べてもぱっと見報告されてない？後やっぱもうちょっとAPIドキュメント読まないとだなぁ。`createdAt`と`indexedAt`の違いが分からん
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/10/19

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/47266ebc6b629e9a24dfaa6101a21077bc07bb6b/yesterday.md)
