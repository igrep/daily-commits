# 2021/04/26 - 2021/05/02

- [ ] Google翻訳からピンインの取得
    - [ ] 簡単なVimプラグイン
        - 2021/04/26: やっぱNeovimへの移行を見越して後回しにしようかな
            - と、思ってWindows Terminal上でNeovimだと発生する問題を軽く確認してみた。が、やはりNeovimだと描画に問題が発生するね...。まぁ、ちゃんと報告して直してもらうか直せよ、ってことですね...
                - と、思ったがもしかして`ambiwidth=single`にすれば問題ない？
    - [ ] 簡単なNeovimプラグイン
        - 2021/04/27: `ambiwidth=single`で問題なさそうなのでNeovim向けに作ろうと思ったが、やっぱりHTTPサーバーにした方がリクエストとレスポンスの紐付けが簡単で作りやすそうだし、そこから作り替えるかー
        - 2021/04/28: HTTPサーバーとして作り直し中
- [ ] Neovimプラグイン再整備
    - [ ] 本体更新
    - [ ] Clojure用プラグイン（vim-iced？）と、関連する諸々への移行
    - [ ] ターミナルでの操作に。Vimの利用廃止？
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
- [ ] sum-moneyをClojureで
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Reeact and React Native - Third Edition](https://www.packtpub.com/product/react-and-react-native-third-edition/9781839211140)
        - 2021/04/26 - 2021/04/28
    - 中国語（ルール: プログラミングと関係がないので、これだけをやった日は更新しない）
        - 2021/04/26 - 2021/04/28
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
