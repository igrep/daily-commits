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
                - 2023/01/12: `vm.runInContext`を使った実装に書き換え再開
                - 2023/01/13: `vm.runInContext`の`importModuleDynamically`関数以外のオプションを設定。`importModuleDynamically`はまだ.d.tsになかった！experimentalなんだねぇ
                - 2023/01/14: Node.jsのバグっぽい挙動に出遭ったような...一方では動くのにもう一方では動かない...
                - 2023/01/15:
                    - vitestを介さずに`vm.runInContext`の中で`import`したら普通に動く。となると原因はvitestの方なんだろうか
                    - とりあえず`import()`を直接呼び出してもうまく行かない場合に備えて、自前でmoduleを作って返す処理を実装してみている。概ねいい感じ
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/b6072ac950db64ba407796a017eddbb66e9ec009>
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/1d55f91fa4c24aeca838958c3bdef771f76d33e0>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - 2023/01/15: ようやく`cabal --version`の結果をパースする処理のテストを通せた。結局Cabal-syntaxにあった仕組みは全く使わず自分で書いた。まぁ明らかに要件が異なるし...
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/01/09 - 2023/01/15

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/ad3073c49a69a1bc0c6a82153caec0b212076eee/yesterday.md)
