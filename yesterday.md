# 2024/02/19 - 2024/02/25

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/02/19 - 2024/02/20: ちょっとだけ
            - 2024/02/21:
                - やっぱりtokenの正規表現は一つにまとめた方が使いやすそうだなぁ。エラーメッセージで「Expected foo, but bar」の「bar」を出しやすい。RubyのStringScannerを参考にするより、元の方式に戻しつつ空白をスキップするって仕様の方がよさそうだ
                - それから、scannerでカラムを取得する処理を実装しておいた。うまくいくかな？
            - 2024/02/22: scannerの設計修正着手
            - 2024/02/23: scannerの設計修正できたはず
            - 2024/02/24: ちょっとだけ。今日もscannerの設計修正。少し進める度に問題が見えてきますね
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 2 Programming Language Foundations](https://softwarefoundations.cis.upenn.edu/plf-current/index.html)
        - 2024/02/02 - 2024/02/24

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/d569068b23dd32aa4964d18bb898722c7ff16a83/yesterday.md)
