# 2023/01/16 - 2023/01/29

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] 末尾再帰の最適化（マクロを実装してから）
        - [ ] Step 6
            - [ ] `importJs`:
                - [ ] `fs/promises`の関数を呼べるように
                - [ ] globalの関数を呼べるように
            - [ ] `asyncFn`
            - [ ] `asyncScope`
            - [ ] `constAwait`
            - [ ] `readString`, `evaluate`
                - 2023/01/23: 新しい「入り口」のAPIができた
                - 2023/01/24: 引き続き大手術
                - 2023/01/25: `transpileModule`ができたっぽい。でもテストは後回しかな～。REPL向けにtranspileした結果とModule向けにtranspileした結果の差が大きくなってしまったので、どこかでやらないと
                - 2023/01/26: ようやく新しい`eval`の実装に着手
                - 2023/01/27: 新しい`eval`が概ねできたはず
                - 2023/01/28: コンパイルエラー潰し。後はテストを新しいAPIを使うように変えればOKなはず
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/01/23 - 2023/01/28
- その他:
    - 2023/01/25: 個人用URL修正bookmarkletのプロジェクトを作った <https://github.com/igrep/clean-up-url-bookmarklet>。初期設定諸々やっただけ
    - 2023/01/27: ビルドスクリプト設定
    - 2023/01/28: とりあえず簡単なのを作ったけど、bookmarkletterがメンテされてないがためにバグってしまっている。ライブラリーを新しくせねば。espreeとuglify-jsというやつに変えればいいのかな？
        - と、思ったけど結構な手術になりそうだし別のパッケージ漁るか

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5f974508722fa2a24ce80db2e1449b5904c5ef28/yesterday.md)
