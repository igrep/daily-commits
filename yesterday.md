# 2023/10/30 - 2023/11/05

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - 2023/10/30: 画像やリンクの取り扱いを理解した。<https://zenn.dev/kawarimidoll/articles/42efe3f1e59c13>などのお陰
            - 2023/10/31: とりあえず`new RichText`するところだけ書いた
            - 2023/11/01: `RichText`を実際に動かしてみて動作確認
            - 2023/11/02: そろそろdestructuringも欲しくなってくるねぇ、と思ったら`const`や`let`はもう実装しとるやん
            - 2023/11/08: `RichText`の処理の実装着手
            - [x] `forEach`と`fn`の引数でもオブジェクトのdestructuringをサポート
                - 2023/11/02: `forEach`についてテストを追加
                - 2023/11/03: `fn`についてもテストを書いて、実装着手。
                - 2023/11/04: `forEach`の修正ができたつもりが、まだバグる
                - 2023/11/05: `forEach`のバグ直せた
                - 2023/11/06: `fn`についてもできたが、ちょっとエラーメッセージが劣化したかなぁ。どうしようかなぁ
                - 2023/11/07: 結局エラーメッセージはそのままで。どの道エラーメッセージは抜本的に改めないとダメだろうしね
                - 2023/11/08: 軽く見直してコミットした
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/96fb7e123c68809058c256befd229103b6175eca>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/11/07

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/4af90032ee78d9291f05b85fe02c1f6d0bf695c5/yesterday.md)
