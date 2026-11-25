# 2026/11/23 - 2026/11/29

- custard:
    - [ ] クレジットカードの明細マッチングアプリの改修
        - [ ] 2ヶ月以上前の日付のレコードは拾わない
            - 2026/11/23: テストケース追加。実装も軽くやってみたが通らず
            - 2026/11/24: 実装引き続き。仕様なのかバグなのか分からないが、`Temporal.Duration.prototype.total`に`"month"`を渡しても`RangeError`が出てしまうので`days`で済ますことにした。
            - 2026/11/25: 実装はできたっぽい。テストの修正漏れが
        - [ ] 辞書による絞り込み機能（ものによっては金額がマッチしないものでもマッチさせる、年1回の支払いや外貨での支払いをそれに）
            - 2026/11/24: 辞書の入力方法を少し考えるに、折角だしCustardのソースコードをそのまま`transpile`して使う、で良さそうな気がしてきた。どうせ使えそうな関数は`node_modules`に入ってるんだから。
        - [ ] 1年間遡って家計簿を読む
    - [ ] Tampermonkeyのスクリプトの改修
    - [ ] Wasm GCの勉強・実装計画
        - [ ] wabgen-gen (Wasm binary generator library generator)
- 読書など:
    - [Build an AI Agent (From Scratch)](https://www.manning.com/books/build-an-ai-agent-from-scratch)
        - 2026/10/27 - 2026/11/25

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/aebdfcb62f7a2974ab665db3ba19387a3d853668/yesterday.md)
