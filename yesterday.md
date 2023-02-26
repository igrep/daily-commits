# 2023/02/20 - 2023/02/26

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] globalのJSの関数を呼べるように
                - 2023/02/21: API検討
                - 2023/02/22: 冷静に考えたら機能考えたAPIはいろいろ問題あるので書き直し
                - 2023/02/23 - 2023/02/24: テスト記述中。せっかくだしテストで欲しくなってきたのでオブジェクトリテラルを作るというのも手かな
                - 2023/02/25: Objectの構文をどうしようか悩ましいね。Clojureのmapからそのままとってくるとシンプルだけどdesctrcturingの構文がJSより冗長になる <https://clojure.org/guides/destructuring>。若干紛らわしい構文になるけど`:`で区切るってことにするか...
                - 2023/02/26: 構文は昨日の通りでいいけど、パースした結果をどうしようかというのも難しいわね
            - [ ] `asyncFn`, `asyncScope`, `asyncProcedure`, `constAwait`
                - 2023/02/20: 着手。でもちゃんとテストを書くにはJSのglobalが必要ね
            - [ ] refactor: `Writer`をinternalに移す
            - [ ] viteの設定: <https://twitter.com/igrep/status/1623300862419546113>
            - [x] テスト実行の高速化
                - 2023/02/20: 簡単にやっておいた
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/99df34672344e7f879d8323b4c6fa5792286b0a8>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/02/20 - 2023/02/26

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/0c6a4c46819b75b16f78e432432a51436826e50b/yesterday.md)
