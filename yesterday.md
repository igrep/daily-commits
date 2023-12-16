# 2023/12/11 - 2023/12/17

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [ ] 未変換のJSONをリストアップするプログラム（.mdファイルのうち日付が最新のものより、新しい .jsonファイルを探す）
            - [ ] JSONを分割するプログラム
                - [x] 配列のdestructuring: `let/const/assign`, `fn`, `forEach`
                    - 2023/12/11: テストケース書いた
                    - 2023/12/12: `fn`と`forEach`の修正が一部完了。`let/const/assign`については見るのも嫌になるな...
                    - 2023/12/13: できたっぽいがテストが通らない。どこでミスった？
                        - まだ`assign`の修正が終わってなかった
                    - 2023/12/14: できた
                - 2023/12/15: 一つランタイムエラーを直して実行できたが、一つ問題が。バックアップの作成に失敗しているっぽいね？
                - 2023/12/16: 違うわ。バックアップは取れてた。でも出力が間違ってるので直した。結果の確認がしにくいなぁ
                    - まだiteratorのバグがあるなぁ。出力が一部落ちている。いい加減テストコード書いた方が良さそうだなぁ
                        - ってことでテストコードを2/3くらい書いた
            - [ ] 全てを結合するプログラム
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/12/16

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/9ccabc787ee44e57e1eba687558dc3c9c6fbbb64/yesterday.md)
