# 2024/04/22 - 2024/04/28

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/04/28: ようやく着手。が、いきなり設計で詰まる。愚直に`JSON.stringify`した値を返すのでいいのかな。返した`Form`を返す方が、後でマクロに渡すこと考えたら良くない？
                - `quote`は`JsSrc`にするのでよいけど、`quasiQuote`はそうもいかないか？
                    - 要は、`quote`と`quasiQuote`の実装方法は全く違っていて、`quasiQuote`の場合1個1個の要素を`JSON.stringify`して`Form`を組み立てつつ`unquote`などが来たら評価（`transpile`）しろってことでよいのかね
        - [x] eslint-plugin-no-ignore-returned-unionの更新: `@typescript-eslint/eslint-plugin`の仕様変更に追従
            - 2024/04/22: どうやら`eslint-plugin-no-ignore-returned-union`にdefault exportを加えた方が良さそうだ。というわけでもうちょっと時間かかる！
            - 2024/04/23: `eslint-plugin-no-ignore-returned-union`の更新完了。まだESLintの設定の移行はかかりそう
            - 2024/04/24: ESLintの設定の移行、移行方法の案内が出る奴はなくなったけど、`Could not find "no-ignore-returned-union" in plugin "eslint-plugin-no-ignore-returned-union".`なるエラーが。まだeslint-plugin-no-ignore-returned-unionのやり方に問題があるのかな
            - 2024/04/25: 設定フォーマットの移行はできたが、諸々の仕様変更について行けてないようで、7136件もエラーが...
            - 2024/04/26: 実行した記録を見ながら要らないruleを切ったのに、改めて結果を見ると、全くこちらの設定を無視しているように振る舞う。どうなってんねん
            - 2024/04/27: 理屈がようやく分かって、全部移行できたっぽい。
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/1fb0977b0a50173bd7089a42b5a50dbe41eaeb37>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Reactのドキュメント](https://ja.react.dev/learn)
        - 2024/03/29 - 2024/04/28

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/db3a5fb1fbcf39cd2d080fecb65869c8622e102c/yesterday.md)
