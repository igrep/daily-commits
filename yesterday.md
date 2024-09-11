# 2024/09/09 - 2024/09/15

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/09/09: 従来長さ1の`CuArray`にさせていたところを`ComputedKey`に変更しつつ、`internal/types/`以下をリファクタリング。
            - 2024/09/10: 昨日から引き続きリファクタリング。
            - 2024/09/11: ここまでの仕様変更で出た型エラーの修正着手。`internal/types.ts`と`lib/base/common.ts`間の循環依存を取り除いた
                - なぜかTypeScriptが`List`と`CuArray`を同一の型と見なす型エラーが出てしまっているので、やむを得ず`List`を`Array`を継承しないで直接ラップするオブジェクトにした（実用上それで困らないだろうし）。ちゃんとbranded typesにしてるのに。なんなんだろうね。
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/09/11

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/f007085b03cb52834f45d038199f5671299e7ce6/yesterday.md)
