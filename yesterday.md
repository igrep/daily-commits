# 2023/09/25 - 2023/10/01

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [x] cu$directoryOfThisFile, cu$thisFile
                - 2023/09/25: できた
            - [ ] `comment`
            - [ ] `array`モジュール（`base`からreexport）
                - [ ] `last`
                - [ ] `takeWhile`
                - [ ] `map`
            - 2023/09/25: ちょっと実装続き
            - 2023/09/26: ちょっとだけ
            - 2023/09/27: とりあえずJSONを出力しつつ、markdownにも変換して、igreque.infoにコピーする、という流れにしよう。設定ファイルで指定したディレクトリーを指定することにした
            - 2023/09/28: 多分一番重要なロジックの実装着手。配列の`i`番目の要素にアクセスするAPIがなかったか...
            - 2023/09/29: 次に必要な機能を列挙
                - やっぱりコメントが書けないのは辛いので`comment`
                - `res.data.feed`から指定した時刻より後の`feedViewPost`までを取得するために`takeWhile`
                - `res.data.feed`から取り出した`feedViewPost`のうち、最後の`feedViewPost`が指定した時刻より前かどうかを見るために`last`
                - ` res.data.feed`からJSONに書き出したもののうち、自分以外の投稿をmaskするために`map`
                    - まぁJS標準にあるものを呼ぶだけだろうから、急いで実装しなくてもいい気はする
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/09/29

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/913f5c1b008f1c8ce78418ea66b1fada574ae621/yesterday.md)
