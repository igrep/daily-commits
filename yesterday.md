# 2023/12/25 - 2023/12/31

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [x] 未変換のJSONをリストアップするプログラム（.mdファイルがない.jsonファイルを探す）
                - 2023/12/25: そろそろ面倒になってきたのでシェルスクリプトでサクッと実装
            - [ ] state.json の最終更新時刻が20時間を過ぎたかどうかチェックするプログラム
                - 2023/12/26: これはcustardで作ろうってことで着手。
                - 2023/12/27: 多分できた
            - [ ] 全てを結合するプログラム・スタートアップへの登録
                - 2023/12/25: 着手。作業するディレクトリーはこのスクリプトで読み出して、他のスクリプトに渡す、という形にしよう
                    - それも大体できた。後はstate.jsonの最終更新時刻をチェックするプログラムを書くだけ
                - 2023/12/28:
                    - 動かしてみたがエラーに。シェルスクリプトむずい =\> 多分直した
                    - Mac版の.commandも作った。実家なので明日はMacで確認・修正しよう
            - [ ] pandoc向けにformat.cstdの出力を修正: ファイル名が`latestIndexedAt`なのは保証されているので、ファイル名から見出しを作る
            - [ ] igreque.infoのhakyllを修正・リリース
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/12/28

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/747c520b80695423359227126227374f15faffad/yesterday.md)
