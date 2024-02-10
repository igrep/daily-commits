# 2024/02/05 - 2024/02/11

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [x] igrep-cashbookのCLI版
            - 2024/02/05: `text`マクロのバグは相変わらず分からないが、内訳の計算がおかしい理由は分かって直した。まさか`plusF`とかの結果をカッコで囲ってなかったとは...
            - 2024/02/06: `text`マクロの問題は`text`ではなくパーサーの問題だった。エスケープシーケンスの処理が間違っていた、と...。面倒なので`JSON.parse`に頼ることで解決。明日はコミット整理して、インストールするスクリプトを書こう
            - 2024/02/07: コミットしてインストールスクリプトを書いた。書いたけど、インストールした先での`node_modules`ディレクトリーに、`@custard-lang/processor`などが正しくインストールできてない。どうやら、package-lock.jsonが悪いらしい。
                ｰ 後、`@custard-lang/processor`と`@custard-lang/command`の最新版をアップロードしておかねば
            - 2024/02/08: ってことで諸々修正してやっとできた。package-lock.jsonはコピーした先で`npm i`して作り直さないとやっぱりダメね...
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 7: Quoting <https://github.com/kanaka/mal/blob/master/process/guide.md#step-7-quoting>
            - 2024/02/09: 今回の修正の前に、今後のメタプログラミング機構の実装に備えて、`Form`に場所の情報などを追加しよう。hyではModel、RacketではSyntax Objectなんて呼ばれているものに相当するものにしよう
                - ついでにエラーが起きたときに場所も分かるようにしたいね
            - 2024/02/10:
                - 新しい型定義ができた
                - よーく考えたら、save-postsが開発中の`@custard-lang/processor`を参照しているので、このままではまた動かなくなったり、変な挙動に変わってしまうかもしれない。やっぱigrep-cashbookと同様に独立した場所にインストールするよう修正しよう。できたはず。
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 2 Programming Language Foundations](https://softwarefoundations.cis.upenn.edu/plf-current/index.html)
        - 2024/02/02 - 2024/02/10

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2d2be82d07103fdd2b7429bf509382776ded3659/yesterday.md)
