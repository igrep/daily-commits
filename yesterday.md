# 2023/11/20 - 2023/11/26

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
                - 2023/11/22: 着手。lazyな`Iterator`を作って10個くらいごとに分割したいところだけど、どうしよっかなぁ。ライブラリーを作るかよそから持ってくるか...。やっぱりcustardとして提供したい気持ちはあるね。
                    - <https://github.com/angus-c/just/blob/master/packages/array-split/index.mjs> を参考にcustardのライブラリーとして作るかなぁ。ただその場合、できれば自己完結していて欲しいので、custardのソースで提供するのが難しそうなのよな。まぁ現状は諦めるか...
                        - 「JS標準にないCustardの標準ライブラリー候補」としてコメントを残しておこう！
                - 2023/11/23: split関数相当のものと、ファイルを読むiteratorが実装できたはず
                    - 本体に追加する機能を除いて実装できたっぽい？
            - [ ] `export`
            - [ ] `generatorFn` / `async.generatorFn`
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/11/22

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/00bb1d77b4c1094b1175c5ed7038d92b09d0053d/yesterday.md)
