# 2021/04/26 - 2021/05/02

- [x] Google翻訳からピンインの取得
    - [x] 簡単なNeovimプラグイン
        - 2021/04/27: `ambiwidth=single`で問題なさそうなのでNeovim向けに作ろうと思ったが、やっぱりHTTPサーバーにした方がリクエストとレスポンスの紐付けが簡単で作りやすそうだし、そこから作り替えるかー
        - 2021/04/28: HTTPサーバーとして作り直し中
        - 2021/04/29: ようやくとりあえず使えるものが実装出来た。連続して複数の単語を処理するとうまく動かない問題があるけどまた今度直す
            - <https://twitter.com/igrep/status/1387747161354366982>
- [ ] Neovimプラグイン再整備
    - [x] 本体更新
    - [ ] Clojure用プラグイン（vim-iced？）と、関連する諸々への移行
        - [ ] なぜかClojureのプロジェクトでM-w, M-eが使えない
        - [x] vim-clap
            - [ ] gitを使うsourceがWindowsで動いていない？
        - [ ] fern.vim?
        - [ ] nvim-compe?
            - compe-tabnineのWindowsサポート or vim-iced-deoplete
        - [ ] vim-sexpの勉強
    - [ ] ターミナルでの操作に。Vimの利用廃止？
    - [ ] nvim-lspconfig の見直し
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
- [ ] sum-moneyをClojureで
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Reeact and React Native - Third Edition](https://www.packtpub.com/product/react-and-react-native-third-edition/9781839211140)
        - 2021/04/26 - 2021/04/30
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）
        - 2021/04/26 - 2021/04/30
    - The Implementation of Functional Programming Languages
        - ※Reactの方に夢中になっちゃってあまり頭に入っていないので後回し

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- 週刊アスキーへの道
    - [ ] 提出に向けた調整
        - [ ] 200行以内に収める
        - [ ] ちょっと面白くする
        - [ ] アピール文を書く
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/bf27be08319cf314d69640f9796331be32e3f478/yesterday.md)
