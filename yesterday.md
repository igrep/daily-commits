# 2025/08/11 - 2025/08/17

- custard:
    - [ ] Conjureのサポート
        - 2025/08/11: default-provided-symbolsの取り扱いにまだ難がある模様`ContextF.initializeForRepl`でIO系のエラーが出たら投げるんじゃなくて返すべきか
        - 2025/08/12: `ContextF.initializeForRepl`のIO系のエラーを投げるのではなく返すよう修正着手。そろそろJunieとか使おうかねぇ
        - 2025/08/13: Junieにちょっと助けてもらえた。かかった時間とコード変更量を思えば自分でやった方が速かったような気がしなくもないけど...。無駄に`as unknown as`とかしてたのを自分で直したりもしたし
        - 2025/08/14: 今日はちょっとだけ。昨日の修正とかでテストがこけてるから直さないと
- 読書など:
    - [型システムのしくみ ― TypeScriptで実装しながら学ぶ型とプログラミング言語](https://www.lambdanote.com/products/type-systems)
        - 2025/07/06 - 2025/07/10, 2025/07/12 - 2025/08/14

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/9519718157a8b0a5ec417c5ff94ced3239720a76/yesterday.md)
