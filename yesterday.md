# 2023/11/27 - 2023/12/03

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
        - [x] parinferの設定
            - 2023/11/22: custardの構文と相性悪そうだし、やっぱ止めとこう
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - 2023/11/20: 他人のポストの引用もOK、後、日時の箇所に`<small>`を適用しておいた
            - 2023/11/21: git commit しただけ
            - [ ] 未変換のJSONをリストアップするプログラム（.mdファイルのうち日付が最新のものより、新しい .jsonファイルを探す）
            - [ ] JSONを分割するプログラム
                - [x] `generatorFn` / `async.generatorFn` / `generatorProcedure` / `async.generatorProcedure` / `yield`
                    - 2023/11/27: 着手。テストケース書いた。あとsplit.cstdの実装が間違っていたのを修正
                    - 2023/11/28: 単にキーワードを増やすだけかと思いきや、結構面倒くさいね。関数定義周りにまた大きな変更が...
                    - 2023/11/29: できたはず。`generatorFn`しかテスト書いてないけど、まぁ面倒くさいしここらで
                - [x] `async.forEach`
                    - 2023/11/30: これだけまだだった。テスト・実装。
                - 2023/12/01: transpileでバグが発覚
                - [ ] バグ: `async.generatorFn`の最後に`async.forEach`を使うとSyntaxErrorに
                    - 2023/12/01: 既存のテストケースを見たら`fn`の最後に`forEach`を読んでいるケースがないので、その時点の問題かも
                    - 2023/12/02: テストケースを書けて原因も分かった。直すのは若干手間で影響範囲がちょっと広いかも。まぁテストでカバーしてくれるでしょう
                    - 2023/12/03:
                        - `find`を`referTo`と同様に`Namespace`を掘る実装に変えることで解決するだろう
                        - それはそれとして、`export`や`for`などが受け取るFormをチェックするのに`transpile`した結果からとる、という挙動に変えたいなぁ
                        - ってことでやることを整理して、`find`の実装を変えてみてる
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/f4a5f3b404969fbbe1709a08613fc53c62bc6988>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/12/03

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/3f61158f73b526856738a4d38bb3ba0b47219d2a/yesterday.md)
