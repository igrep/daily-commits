# 2025/09/08 - 2025/09/14

- custard:
    - [ ] Conjureのサポート
        - 2025/09/08: Junieにお願いして型エラーを直してもらった（何カ所か自分で手直ししたけどね）。まだテストが落ちる...
        - 2025/09/09: テストを通せた
        - 2025/09/10: 久々にコミットして久々にConjureのクライアントを修正。そろそろ適当に動かしてみたいが、どうやって`custard`コマンドをインストールするんだっけ...
        - 2025/09/11: `npx custard`コマンドで起動できるよう修正
        - 2025/09/12: `Conjure`から呼び出すのを試してみたが、モジュールがないと言われる。配置する場所が間違っているんだろうけど、Conjureのドキュメントを見てもいまいちわからないや
        - 2025/09/13: あれこれ調べた感じ、aniseedで.fnlファイルを.luaファイルに自前で変換しないといけないっぽい。aniseedの設定変えるだけじゃダメなのね。aniseedのドキュメントを読んでコンパイルに挑戦してる
        - 2025/09/14: aniseedでのコンパイルにチャレンジしたが、`Compile error: conjure.macros module not found`なるエラーで落ちる。どうもaniseedのソースを読む限り、[`compile.sh`](https://github.com/Olical/aniseed/blob/97078331cf59765613d248ca6d6c7942ebbd219b/scripts/compile.sh)が`&runtimepath`に`deps/aniseed`しか設定していないから見つけられないらしい。とりあえず手で`&runtimepath`を編集して解決
- 読書など:
    - [型システム入門 プログラミング言語と型の理論](https://www.ohmsha.co.jp/book/9784274069116/)
        - 2025/08/18 - 2025/09/14

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/4abdf26bf62f182be3ed90406d5d3b91adb78f19/yesterday.md)
