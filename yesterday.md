# 2023/08/07 - 2023/08/13

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
    - [ ] リファクタリング: worker.tsとrepl.tsを削除・`JsMod`の削除
        - 2023/08/07: `src/transpile.ts`と`src/eval.ts`、`isolated-eval.ts`の修正ができた
        - 2023/08/08: ちょっとだけ
        - 2023/08/09:
            - WebStorm使ってみたけど却って苦戦しちゃう。慣れないなぁ
            - `eval.ts`などの変更への追従は概ねできた、と思いきやテストが結構落ちるね
        - 2023/08/10: 昨日初めて見付けたエラーはどうも不安定（他のテストに依存して発生する）ようで、そのテストを単体で実行した際発生する別のエラーを先に潰すことにした
            - これか、と直してみたらよりわけ分からんエラーが。どこで拡張子のない`file://s:/.../transpile`を`import`してるんだ？
        - 2023/08/11: 昨日新たに見つけた問題は、単純に`env.ts`で`import`を書き間違えてただけだった...
            - そして相変わらずエラーの出方が安定しない。デバッグコード一つで結果が変わることがある。`await`漏れかな、って気もするんだけど、それらしいエラーもないしねぇ
                - やっぱり`await`忘れだった。多分`eslint-plugin-promise`を有効にし忘れてるからだなー、と思ったらちゃんと有効にしてる。どうなってるんだ！
        - 2023/08/12: 残りのエラーは`JsMod`を削除する件に関するものだった。WebStormの助けもあってほとんどの`JsMod`から`JsSrc`へ移行できた
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Design 2023年8月号](https://gihyo.jp/magazine/SD/archive/2023/202308)
        - 2023/08/03 - 2023/08/12

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/bfb94b091a047c3f78ea5043eb05ddfc5263828b/yesterday.md)
