# 2024/08/05 - 2024/08/11

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/08/05: `ReservedSymbol`や`String`も従来の`Form`バージョンを削除し、`class`バージョンを作成。
            - 2024/08/06 `Literal***`と呼んでいたものは全て`Cu***`に変更して統一
            - 2024/08/07: `CuSymbol`や`PropertyAccess`も従来の`Form`バージョンを削除し、`class`バージョンを作成。
            - 2024/08/08: `Splice`や`Unquote`も従来の`Form`バージョンを削除し、`class`バージョンを作成。
            - 2024/08/09: `Call`を`class`版の`List`で再定義。先頭が`CuSymbol`であることを保証しづらくなってしまった。Branded typeで解決できたっぽい
            - 2024/08/10: `is***`系の関数は要らないかとも思ったが、`instanceof`演算子はJSより過ぎる仕様なので隠蔽するために実装
- 読書など:
    - [canvasのチュートリアル](https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial)
        - 2024/08/01 - 2024/08/10

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/533656378227c56c5f8575b356587c9fe08a9bf3/yesterday.md)
