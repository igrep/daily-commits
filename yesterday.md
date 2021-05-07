# 2021/05/03 - 2021/05/09

- [ ] Neovimプラグイン再整備
    - [ ] Clojure用プラグイン（vim-iced？）と、関連する諸々への移行
        - [x] `:IcedCycleSrcAndTest`コマンドが、ルートディレクトリーの戦闘に余分な`/`を付けてしまう問題
            - 例えば`/C:/project/src/foo/core-test.clj`などのように
            - Vim scriptを直せばいいのかと思いきや、どうやら中で読んでいるiced-nreplというnREPLのミドルウェアの問題らしい。
                - [この関数](https://github.com/liquidz/iced-nrepl/blob/f400800e9350a3110586cab01a53c90dad7bd24b/src/iced/nrepl/namespace.clj#L80-L90)が間違った値を返していることが分かったので直そうと試みてる
                    - Leiningenのcheckoutsという機能を使えば、こちらで修正したバージョンを適用できそうだ
                    - で、iced-nreplをcloneして`iced repl`を試みたところ、エラーに。`lein with-profile 1.10 repl`で実行する必要があるらしい。これをicedでやるにはどうすれば、というところ。
                        - エラー: <https://ask.clojure.org/index.php/9599/lein-repl-error-incompatible-with-clojure-versions-older-than>
                        - `g:iced#nrepl#connect#jack_in_command`を書き換える？
            - 2021/05/03: 結局諦めてLinuxでやることにした。ちょっとデバッグも難しそうな問題に出遭ってしまったので...
                - で、いろいろ試して、自動で`iced_require_all`する設定を加えたりした。明日からようやくClojureScriptに取り組めそうだ
        - [x] なぜかClojureのプロジェクトでM-w, M-eが使えない
            - 恐らくvim-icedが潰していると思われる
                - 2021/05/03: vim-icedじゃなくてvim-sexpだったか... 使うかどうか分からなかったのでM-w, M-eを別のキーにした
        - 2021/05/04: ClojureScriptをやろうとicedでshadow-cljsを試したところ、No JS runtimeというエラーで詰まってしまった。ドキュメントに問題の解説があるものの、イマイチ読めておらず。具体的な解決方法は書いてないっぽいし...
        - 2021/05/05: 昨日のエラーがついぞ分からず、バグレポしてみたら私のミスだった...
            - <https://github.com/liquidz/vim-iced/issues/338>
            - しかしここまで書いてて思ったけど、やっぱClojureは重いな...。恐らく現状ではicedはNode.js向けのREPLをサポートしてないっぽいし
                - <https://github.com/kanaka/mal> 当たりを参考に、別の言語で自分Lispを作った方が、単にREPL駆動開発と構造化編集を経験したい、とかの目的には早いのかも知れないね...
        - [ ] fern.vim?
    - [ ] nvim-lspconfig の見直し
- [ ] 週刊アスキーへの道
    - 2021/05/07: 結局、これ以上良くする方法も思いつかないので一旦諦めて別のものを作り直すことにした
- Haskell入門コンテンツ:
    - [ ] 課題11の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- 読書など:
    - [Reeact and React Native - Third Edition](https://www.packtpub.com/product/react-and-react-native-third-edition/9781839211140)
        - 2021/04/26 - 2021/05/07
    - The Implementation of Functional Programming Languages
        - ※Reactの方に夢中になっちゃってあまり頭に入っていないので後回し

- wasm2arm32 compiler:
    - [ ] i32.wastにおけるすべての`assert_trap`のテストケースを解決
    - [ ] i32.wastにおけるすべての`assert_invalid`のテストケースを解決
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/8d7772e2eafc4b450ac683ada73c961bff13d050/yesterday.md)
