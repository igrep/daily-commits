# 2023/01/09 - 2023/01/15

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
                - 2023/01/09: vitestで`eval`してdynamic importするのがダメらしい。偶然にもスレッドを分けていたからこれまで問題に出遭わなかったと言うことか...
                    - <https://github.com/vitest-dev/vitest/issues/960>
                        - vitestの人にworkaroundのヒントになりそうなことを教えてもらった。そして、今まで知りたくても上手く調べられていなかったVMモジュールの存在を今知った...
                            - <https://nodejs.org/api/vm.html>
                            - `vm.runInContext`を使った実装に書き換え中
                - 2023/01/10: うーん、引数の型によって結果の型が変わるのをやりたいけどむずかしいな
                - 2023/01/11: やっとfunction overloadの扱い方が分かった気がする
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabal --versionの出力をパースする関数のテストを書いた。cabalが内部で使っているパース機構をそのまま使うのはやっぱり不向きっぽいので直接parsecを使って書き直すことに
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/01/09 - 2023/01/11

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/ad3073c49a69a1bc0c6a82153caec0b212076eee/yesterday.md)
