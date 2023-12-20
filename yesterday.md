# 2023/12/18 - 2023/12/24

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [ ] 未変換のJSONをリストアップするプログラム（.mdファイルのうち日付が最新のものより、新しい .jsonファイルを探す）
            - [ ] JSONを分割するプログラム
                - 2023/12/18: テストコード修正。問題のバグが再現できた？いや、それ以前のバグっぽい
                    - 「それ以前のバグ」は直せた。残りのバグも簡単だと思う
                - 2023/12/19: テスト通せた。次はsave.cstdで改めて全てのJSONを保存した後、再度split.cstdを試してみよう
                - 2023/12/20: うーん、改めて実行してみたけど、全然うまく行ってない。テストは通るのに。
                    - ... と、思いきや、WindowsのExplorerがファイルの更新を反映させてなかったので見えてないだけだったっぽい
                        - しかし、まだバックアップが正しく取れていないように見える: 多分直せた。明日こそちゃんと結果を確認しよう
            - [ ] 全てを結合するプログラム
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/12/20

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f18fc49dccc543e833957befc72cd122d3ac3328/yesterday.md)
