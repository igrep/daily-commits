# 2023/05/22 - 2023/05/28

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/05/22: まだうまく行かない。理由を調べているうちに、eslint-plugin-no-ignore-returned-unionのバグを見つけてしまった。多分このバグのせいでfalse negativeとなってしまったのが根本原因だ...
                    - サクッと直せるやろ、と思ったら結構大変。もうほぼ直せたも同然だけど...
                - 2023/05/23:
                    - 直せた、後はリリースだけ、と思いきや、まさか手元にあったローカルがリモートより古いものを指していたとは...。マージがしんどかった
                    - で、無事false negativeとなっているせいで起きていた問題を直したけど、相変わらず直面している問題は発生する。まさかこれが原因じゃなかったとは！
                        - 簡単なことだった。baseモジュールに入っているのは基本`DirectWriter`などだけだったから気づかなかったけど、肝心の`builtinModulePaths`で指定したモジュールを一つも`import`していなかったのだ...
                - 2023/05/24: 設計に少し自信が持てない。`EnvF.init`で初期化した後で必要な識別子を`import`するようにすればいいんだろうけど、`EnvF.init`の中でそれをやるのは、これまでの`EnvF.init`の挙動と比べて少し重たい処理に思える。でも確実に必要になるのは間違いないし、やっておくかぁ
                    - `TranspileState`が`repl`の場合、見つかったtop levelの変数の初期化を`eval`して、`module`の場合、top levelの変数の初期化をpreambleとして、コードを保持しておくか
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Speculation in JavaScriptCore](https://webkit.org/blog/10308/speculation-in-javascriptcore/)
        - 2023/04/08 - 2023/05/24

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f4ed1deb1a05c73f1c4a9d530bdeb1eb3a07bd00/yesterday.md)
