# 2024/11/04 - 2024/11/10

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/11/04: 昨日の時点での問題は、`currentFormIndex`を`repl`の場合に更新してないからだった。直せたかと思いきや、今度は別の理由でテストが落ちる。
            - 2024/11/05: 昨日新たに出遭った問題は、`repl`の場合に同じ`Env`でtranspileを2回行ってしまうところにあるわけだから、`repl`の場合はJSのソースコードのどこからどこまでを評価したか覚えておく設計にすればよさそう
                - いや、replであろうとなかろうとその設計でいいのか。それならindexをとっておくんじゃなくて、`JsSrc`をマクロのために評価したら捨てる、って作戦でいいのかも？
            - 2024/11/06: 難しいな。`repl`の場合はtranspileしたものをとっておいてマクロ用に評価するようにして、`module`の場合はtranspile前のものをとっておいてマクロ用に都度transpile・評価するか。現状moduleの場合とreplの場合とでマクロの時使用する`Env`が異なるのでややこしい
                - あるいは、従来考えていた中間コードを作る案にして、`Env`は使い回すようにするか
            - 2024/11/07: また遠回りになるけど、やっぱり中間コードを作る設計にするか。将来的にはやるつもりだったし
                - ってことで中間コードの仕様を決めた
            - 2024/11/08: 中間コードを使うよう他の型も修正中
            - 2024/11/09: transpile.tsの型の仕様やeval/core.tsの仕様をどうするかなあ
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/11/09

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/83f4d42134f843e3062493f047eeb4cbea204f18/yesterday.md)
