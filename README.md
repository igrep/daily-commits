<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2020/05/03までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで

# 2020/04/27 - 2020/04/30

- Neovimプラグイン整備:
    - 2020/04/27 - 2020/04/28: NeovimのLSPのソースを読みながら実装。
    - 2020/04/29: 多分できたはずなので明日テスト
    - 2020/04/30: うまく動かない。とりあえずランタイムエラーが起きないところまで修正できたものの、パラメーターがおかしいのか結果が返ってこない
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/04/26までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 結果: 未達

# 2020/04/26

- 仕事でぶち当たっている問題 <https://github.com/wasmerio/wasmer/issues/1379> を詳しく調査できないかとAOSPのソースやらデバッグ用のツールをダウンロードできないかと挑戦するも、ディスク容量的にきつい...。そのために古いスマホをroot化したけど無駄だったっぽいな。
    - 後はやっぱり、wasmerのソースをもっと削って、再現ケースを作るのを頑張るか。
    - なんとなくAOSPのソースの[この辺](https://cs.android.com/android/platform/superproject/+/master:art/runtime/art_method.cc;bpv=1;bpt=1;l=312?q=StackOverflowError&ss=android%2Fplatform%2Fsuperproject:art%2F)とか[wasmerのx86\_64向けのコード生成](https://github.com/wasmerio/wasmer/blob/ab106af422a5c9e263d08c1f8a8ae1fd859e55b8/lib/singlepass-backend/src/codegen_x64.rs#L67)にその[AArch64版](https://github.com/wasmerio/wasmer/blob/ab106af422a5c9e263d08c1f8a8ae1fd859e55b8/lib/singlepass-backend/src/codegen_x64.rs#L165)を眺めていて気になったのは、なんでAArch64版は`sp`を書き換えた上で問題の関数に`br`してるんだろう、ってところ。x86版では`sp`に操作していても、`0xffff...0`で`and`したり`sub`してるだけ。多分これはアラインメントをそろえたり引数を1個ずつ取り出すときにスタックから参照するためだけのものだろう。
        - Androidは単にスレッド毎に自前で`sp`を管理して、メソッド呼び出し毎にチェックしているだけなのだ。そのチェックに引っかかっただけでは、と思わざるを得ない。まだ確信は持てないけど。
- Neovimプラグイン整備:
    - luaで`tagfunc`を定義するのに挑戦。vim-lspのコードをnvim-lsp向けに翻訳するのがめんどい

# 2020/04/25

- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連の情報収集
- 中国語

# 2020/04/22 - 2020/04/24

- Neovimプラグイン整備:
    - 2020/04/22: wasmerのリポジトリーを探検するのがしんどいので、開発版のNeovimを使って`tagfunc`を設定するよう修正。  
      とりあえず開発版のNeovimのインストールと、nvim-lspプラグインのインストール・設定ができた
    - 2020/04/23: nvim-lspに基づいて`tagfunc`を設定すべく、<https://daisuzu.hatenablog.com/entry/2019/12/06/005543>から`tagfunc`の定義をコピペ
    - 2020/04/24: Neovimのドキュメントを読んでいるうちに、もしかしてNeovimの機能でもっと簡単にできないかな、と思って調査
        - <https://github.com/neovim/neovim/blob/9678fe4cfba9f7a9dacbd6d5a56c58241e98aa60/runtime/lua/vim/lsp/util.lua#L399> ここでタグを保存する関数が呼べれば... と思ったがそんな都合のいい物はなさそう。TODOにしているぐらいだしね...
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/04/20 - 2020/04/21

- wasm2arm32 compiler:
    - 2020/04/20:
        - `wasmer_runtime_core::parse::read_module`を呼ぶには、バックエンドがしっかりできていないとダメらしい。  
          インクリメンタルな開発にはやっぱり不向きっぽいし、パーサーから自前で作ろうかねぇ。
    - 2020/04/21:
        - `wasmer_runtime_core::parse::read_module`を呼べるよう、空の実装を作ってみてる
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/04/19までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - Derek Banasさんのassembly tutorialのサンプルを試す
        - 結果: 達成
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 結果: 未達

# 2020/04/18 - 2020/04/19

- Strict拡張の記事:
    - 2020/04/18:
        - ポイントフリースタイルのケースについて書き上げた
    - 2020/04/19:
        - 各ケースのサンプルがどのファイルかわかるように書いたり、引用しそうな箇所をコピペしておいたり
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/04/13 - 2020/04/17

- wasm2arm32 compiler:
    - 2020/04/13:
        - `objdump`でできあがったアセンブリーを見てみたら、コメントアウトしたはずのコードがコメントアウトされてなかったのが原因だった...  
          なんでこんなに構文にばらつきがあるんだアセンブリーは...
    - 2020/04/14: プロジェクト初期化。
    - 2020/04/15:
        - wasmer-runtime-coreのソースを読んで、パーサーがpubであることを確認した
        - wasmer-runtime-coreをdependencyに
    - 2020/04/16 - 2020/04/17:
        - `wasmer_runtime_core::parse::read_module`を呼ぶ処理を書いてる
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/04/12までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - Derek Banasさんのassembly tutorialのサンプルを試す
        - 結果: 未達
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 結果: 未達

# 2020/04/12

- Strict拡張の記事: ようやく最初の1ケースを解説できた。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/04/11

- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/04/10

- wasm2arm32 compiler:
    - 2020/04/10:
        - 軽く直してみるも、現象変わらず。
        - gdbで見た感じ、`main`関数から抜け出す際、保存していた`lr`の値を`pc`に`pop`することで抜け出しているのだけど、その書き換えた`pc`がおかしいらしい。  
          `mult3`も同じように`pc`を書き換える形で`return`すればいいのだろうか。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/04/06 - 2020/04/09

- wasm2arm32 compiler:
    - 2020/04/06:
        - 呼び出し規約を調べるためにPractical Reverse Engineeringを読み返してる
    - 2020/04/07:
        - だいたい呼び出し規約がわかったので関数を書いてみた。試すのは明日
    - 2020/04/08:
        - Makefileを書いてみたが、gccのオプションが間違っているらしく、リンクできない
    - 2020/04/09:
        - 間違っていたのはgccのオプションではなく、アセンブリーの方だった。関数を`.global`で宣言してなかった。
        - コンパイルして実行してみるも、Illegal Instructionに。レジスターをpopする順番を間違えたせいで、関数から返るときのジャンプ先を間違えていた。
        - これも直すと作成した関数の実行結果は表示されたが、Segmentation Faultに。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
    - 2020/04/09: 読了
- 中国語

# 2020/04/05までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - Derek Banasさんのassembly tutorialのサンプルを試す
        - 結果: 未達

# 2020/04/05

- Strict拡張の記事: またちょろっとだけ進めた
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- 中国語

# 2020/04/04

- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- 中国語

# 2020/03/30 - 2020/04/03

- wasm2arm32 compiler:
    - 2020/03/30: サンプルを試せるよう準備。unisonの設定とか
    - 2020/03/31: Derek Banasさんの最初のサンプルを試した。普通に試せた。まさか`@`でコメントも使えるとは
    - 2020/04/01: Derek Banasさんの、libcを呼び出すサンプルもできた。`R0`のレジスターを変えれば`main`の戻り値、つまりexit codeも変えられることがわかった
    - 2020/04/02:
        - Derek Banasさんの、stackを操作するサンプルも確認。やっぱりAArch64のようにalignmentの制限はないらしい。
        - あとはオリジナルの関数をgccでリンクさせてCから呼んでみようか。
    - 2020/04/03:
        - Derek Banasさんの、関数を作ってassemblyから呼ぶサンプルを試した。  
          なぜか関数呼び出しの際リンクレジスターをスタックに入れてないので、呼び出し規約を守れてないのでは...
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- 中国語

# 2020/03/29までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - RasPi 4のセットアップ
        - 結果: 達成

# 2020/03/29

- Strict拡張の記事:
    - また書いたのはちょっとだけ
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- 中国語

# 2020/03/28

- igrep-cashbook: Rustへの移植を久々に。パーサーのコンパイルが通せたけどテストが通らない。combine難しい
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- 中国語

# 2020/03/24 - 2020/03/27

- wasm2arm32 compiler:
    - RasPi 4のセットアップ
        - 2020/03/24: OSの初期設定完了。
        - 2020/03/25: sshやunisonのインストール
        - 2020/03/26: sshの有効化、固定IPの設定
        - 2020/03/27: 固定IPの設定が間違っていたので修正
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- 中国語

# 2020/03/23

- wasm2arm32 compiler:
    - RasPi 4のセットアップ
        - ケースに入れただけ
- Strict拡張の記事:
    - ちょっと進めた
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- 中国語

# 2020/03/22までの目標

- Reverse Engineering:
    - GHCが生成したHello Worldの動作をIDA Proで理解する
        - 文字列リテラルを`[String]`に変換する仕組みをアセンブリーで理解
            - 結果: 未達
        - libcの出力系関数にたどり着くまでをアセンブリーで理解
            - 結果: 未達

# 2020/03/22

- その他:
    - Folding@homeについてブログ記事を書いた: <https://the.igreque.info/posts/2020/01-folding-at-home.html>
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- 中国語

# 2020/03/21

- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- 中国語

# 2020/03/20

- その他:
    - Folding@homeについて調査
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- オランダ語

# 2020/03/19

- Reverse Engineering:
    - 2020/03/19:
        - `ghczmprim_GHCziTypes_Czh_con_info`が`C#`を、`ghczmprim_GHCziTypes_ZC_con_info`が`:`を表している？
            - どちらも`rbx`を増やしている
        - `mov     qword ptr [r12-40h], offset loc_4639B0`で始まる箇所が`unpack`関数にあたる？
        - `mov     qword ptr [r12-40h], offset loc_4639B0` などの処理でサンクにジャンプ先を詰んでいるらしい
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- オランダ語
- 英語

# 2020/03/16 - 2020/03/19

- Reverse Engineering:
    - 2020/03/16: 該当の箇所を再度IDA Proで開いただけ
    - 2020/03/17: まだわからん
    - 2020/03/18:
        - `unpackCString`や`GHC.Event.Poll.new`の関数の入り口に、以下のようなコードがあった。他の関数にもあるのだろうか  
          ```
          lea     rax, [rbp-10h] ; rbpを下げる幅は異なる
          cmp     rax, r15
          jb      short loc_456223 ; jmp先も当然異なる
          ```
    - 2020/03/19:
        - `ghczmprim_GHCziTypes_Czh_con_info`が`C#`を、`ghczmprim_GHCziTypes_ZC_con_info`が`:`を表している？
            - どちらも`rbx`を増やしている
        - `mov     qword ptr [r12-40h], offset loc_4639B0`で始まる箇所が`unpack`関数にあたる？
        - `mov     qword ptr [r12-40h], offset loc_4639B0` などの処理でサンクにジャンプ先を詰んでいるらしい
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- オランダ語
- 英語

# 2020/03/15までの目標

- Reverse Engineering:
    - Derek Banasさんのassembly tutorialのうち、書きたい箇所を写経して試す
        - 結果: 達成。最後の方うまく動かないけどもう飽きたしいいや
    - GHCが生成したHello Worldの動作をIDA Proで理解する
        - 結果: 未達

# 2020/03/14 - 2020/03/15

- Reverse Engineering:
    - 2020/03/14: Haskell-jpもくもく会にて、GHCが`main = putStrLn "hello"`をコンパイルした結果をIDA Proやradare2で調査。
        - いろいろ初めてづくしだったので今日は手探りで終わった感じ
        - レジスターの使い方にどうもGHC RTS固有のルールがあるような気がする、けどわからん
        - 聞いてたとおりclosureの評価に入ったらjmpだらけなので、やっぱCのプログラムとは大分違うなぁ
    - 2020/03/15:
        - 「XXVI. LIBC」の節にチャレンジしたけどうまく動かず。Termux上で直接やったらうまくいくかもだけど、もう飽きたしだいたいわかったしいいや。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- オランダ語

# 2020/03/09 - 2020/03/14

- Reverse Engineering:
    - 2020/03/09: 「XXV. The Stack (Slide)」の最初のサンプルをとりあえずコピペ
    - 2020/03/10: コピペして修正したものを動かしてみるも、なぜかBus errorに。
        - <https://community.arm.com/developer/ip-products/processors/b/processors-ip-blog/posts/using-the-stack-in-aarch64-implementing-push-and-pop> で解説してることかな？
    - 2020/03/11: やはりBus errorの原因はalignmentを間違えていたからだった。コピペして修正したコードが動いた。
    - 2020/03/12: 「XXV. The Stack (Slide)」の二つ目のサンプルを書いたけどなんかおかしい... と思ったら、びっくりマークを付け忘れたせいか、SPの値が変わってなかった。
    - 2020/03/13: びっくりマークでSPの値を変えることで解決。でも`LDP`した場合は相変わらずうまくいかないな。まぁいいか。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- オランダ語
- 英語

# 2020/03/08までの目標

- Reverse Engineering:
    - Derek Banasさんのassembly tutorialのうち、書きたい箇所を写経して試す
        - 結果: 未達

# 2020/03/08

- タイプセーフプリキュア:
    - ヒーリングっど♡プリキュアの追加: <https://github.com/igrep/typesafe-precure/pull/42>
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [たのしいバイナリの歩き方](https://gihyo.jp/book/2013/978-4-7741-5918-8)
- オランダ語

# 2020/03/07

- Reverse Engineering:
    - 2020/03/07: 「XXI. Memory Storage」のサンプルを動かした。やっぱりx64の方が他のデバッガーが使えて勉強になりそうだなぁ
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語

# 2020/03/02 - 2020/03/06

- Reverse Engineering:
    - 2020/03/02 - 2020/03/03: Derek Banasさんのassembly tutorialのstdinから受け取ってstdoutに出す処理を書いてみた
    - 2020/03/03: そのまま続けてbranchingやBICの例を書いてみた
    - 2020/03/04: ループ処理を書いて、初めてデバッガーを起動させた（まだ起動させただけ
    - 2020/03/05: ステップ実行できた
    - 2020/03/06: 「XXI. Memory Storage」のサンプルを書いてる
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
- 英語

# 2020/03/01までの目標

- Haskell入門コンテンツ:
    - 課題8の不足箇所を埋める
        - 結果: 達成
    - 課題7の不足箇所を埋める
        - 結果: 未達
- Neovimの改善
    - my-project-opener.vim
        - 結果: 達成
    - Vimとお別れ
        - 結果: 未達
- Strict拡張の記事
    - 記事の初稿を半分程度
        - 結果: 未達
- stackのバグ
    - extra-deps, stack clean: 再現ケースを作って同様のバグがないか探す
        - 結果: 未達
- Pharo By Example
    - First appの実装
        - 結果: 未達
- chghc
    - 実装してみる
        - 結果: 未達
 
# 2020/03/01

- Strict拡張の記事
    - ほんのわずかに進めた
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
 
# 2020/02/29

- Haskell入門コンテンツ:
    - 課題8の不足箇所を埋める
        - 2020/02/29: できたはず。
    - 課題7の不足箇所を埋める
        - 2020/02/29: 各所修正しつつ進めてる。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
 
# 2020/02/25 - 2020/02/28

- Haskell入門コンテンツ:
    - 課題8の不足箇所を埋める
        - 2020/02/25: これで一通り埋まったはず
        - 2020/02/26 - 2020/02/27: 読み直しつつ一部修正
        - 2020/02/28: 読み直しつつ一部修正。まだ書き足す必要がある箇所が見つかった...
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
- 英語

# 2020/02/23までの目標

- Haskell入門コンテンツ:
    - 課題8の不足箇所を埋める
        - 結果: 未達
    - 課題7の不足箇所を埋める
        - 結果: 未達
- Neovimの改善
    - Deniteの改善
        - 結果: 達成
    - my-project-opener.vim
        - 結果: 未達
    - Vimとお別れ
        - 結果: 未達
- Strict拡張の記事
    - 記事の初稿を半分程度
        - 結果: 未達
- stackのバグ
    - extra-deps, stack clean: 再現ケースを作って同様のバグがないか探す
        - 結果: 未達
- Pharo By Example
    - First appの実装
        - 結果: 未達
- chghc
    - 実装してみる
        - 結果: 未達
 
# 2020/02/22 - 2020/02/24

- Neovimの改善
    - 2020/02/22:
        - my-project-opener.vim、の前に、一緒に使うことになるであろうプラグインを作成
    - 2020/02/23:
        - my-project-opener.vimの作成。昨日作った一緒に使うことになるであろうプラグイン、my-session-loader.vimと組み合わせたとき、うまく動いていないように見える。またneovimのバグのような気がする...
    - 2020/02/24:
        - 昨日発覚した問題も回避して、最低限欲しい機能を実装できた
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
 
# 2020/02/17 - 2020/02/21

- Neovimの改善
    - 2020/02/17: Deniteの改善
        - denite-mappingを公開
    - 2020/02/17 - 2020/02/21: terminal-registryの修正
        - 最低限`tag`から`id`への変更は完了。
        - id`が被ったら古いプロセスをkillして閉じる機能を実装（まだテストしてない）
        - 次は`open_or_switch`や`send`、`unregsiter`から`cmd`という引数をなくして直接`id`を指定させる形式に変えよう
            - `open_or_switch`は`switch`に変更
                - できたはず。やっぱりまだテストできてない...。
        - 軽くテストして問題なさそうだったのでpush。次はテンプレートへの変更かな。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
- 英語

# 2020/02/16までの目標

- Haskell入門コンテンツ:
    - 課題8の不足箇所を埋める
        - 結果: 未達
    - 課題7の不足箇所を埋める
        - 結果: 未達
- Neovimの改善
    - Deniteの改善
        - 結果: 未達。もうちょっと
    - my-project-opener.vim
        - 結果: 未達
    - Vimとお別れ
        - 結果: 未達
- Strict拡張の記事
    - 記事の初稿を半分程度
        - 結果: 未達
- stackのバグ
    - extra-deps, stack clean: 再現ケースを作って同様のバグがないか探す
        - 結果: 未達
- Pharo By Example
    - First appの実装
        - 結果: 未達
- chghc
    - 実装してみる
        - 結果: 未達
 
# 2020/02/16

- Neovimの改善
    - Deniteの改善
        - denite-mappingが概ねできた
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
 
# 2020/02/15

- Haskell-jp Blog:
    - 記事書いてPull requestを送った
        - <https://github.com/haskell-jp/blog/pull/187>
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
 
# 2020/02/11 - 2020/02/14

- Neovimの改善
    - 2020/02/10 - 2020/02/11: Deniteの改善
    - 2020/02/11: Neovimのバグ報告 <https://github.com/neovim/neovim/issues/11850>
    - 2020/02/12: バグを報告してから、よくよく考えたら`term://`への`autocmd`は`TermOpen`のみで良いことに気づき、直した。  
      これで長いこと少し悩んでいた問題を回避できる。
    - 2020/02/13 - 2020/02/14: denite-mappingの作成
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
- 英語
 
# 2020/02/10

- Neovimの改善
    - 2020/02/10 - 2020/02/11: Deniteの改善
    - 2020/02/11: Neovimのバグ報告 <https://github.com/neovim/neovim/issues/11850>
    - 2020/02/12: バグを報告してから、よくよく考えたら`term://`への`autocmd`は`TermOpen`のみで良いことに気づき、直した。  
      これで長いこと少し悩んでいた問題を回避できる。
    - 2020/02/13: denite-mappingの作成開始
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
- 英語

# 2020/02/09までの目標

- Haskell入門コンテンツ:
    - 課題8の不足箇所を埋める
        - 結果: 未達
    - 課題7の不足箇所を埋める
        - 結果: 未達
- Neovimの改善
    - my-project-opener.vim
        - 結果: 未達
    - Vimとお別れ
        - 結果: 未達
- Strict拡張の記事
    - 記事の初稿を半分程度
        - 結果: 未達
- stackのバグ
    - extra-deps, stack clean: 再現ケースを作って同様のバグがないか探す
        - 結果: 未達
- Pharo By Example
    - First appの実装
        - 結果: 未達
- chghc
    - 実装してみる
        - 結果: 未達


# 2020/02/08 - 2020/02/09

- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語

# 2020/02/06 - 2020/02/07

- Haskell入門コンテンツ:
    - 2020/02/06 - 2020/02/07: 引き続き課題8
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- オランダ語
- 英語

# 2020/02/03 - 2020/02/05

- Haskell入門コンテンツ:
    - 2020/02/03 - 2020/02/05: 引き続き課題8
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語
- 英語

# 2020/02/02までの目標

- Haskell入門コンテンツ:
    - 課題8の不足箇所を埋める
        - 結果: 未達
    - 課題7の不足箇所を埋める
        - 結果: 未達
- Strict拡張の記事
    - 記事の初稿を半分程度
        - 結果: 未達
- stackのバグ
    - extra-deps, stack clean: 再現ケースを作って同様のバグがないか探す
        - 結果: 未達
- Pharo By Example
    - First appの実装
        - 結果: 未達
- chghc
    - 実装してみる
        - 結果: 未達

# 2020/02/01 - 2020/02/02

- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/29 - 2020/01/31

- Haskell入門コンテンツ:
    - 2020/01/29 - 2020/01/31: 引き続き課題8
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語
- 英語

# 2020/01/26までの目標

- Haskell入門コンテンツ:
    - 課題8の不足箇所を埋める
        - 結果: 未達
    - 課題7の不足箇所を埋める
        - 結果: 未達
- Strict拡張の記事
    - 記事の初稿を半分程度
        - 結果: 未達
- stackのバグ
    - extra-deps, stack clean: 再現ケースを作って同様のバグがないか探す
        - 結果: 未達
- Pharo By Example
    - First appの実装
        - 結果: 未達
- chghc
    - 実装してみる
        - 結果: 未達

# 2020/01/24 - 2020/01/28

- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/20 - 2020/01/23

- Haskell入門コンテンツ:
    - 2020/01/20 - 2020/01/23: 引き続き課題8
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語
- 英語

# 2020/01/19までの目標

- Haskell入門コンテンツ:
    - 課題5.5に挟んだif式の説明
        - 結果: 達成
    - 課題8の不足箇所を埋める
- Strict拡張の記事
    - 記事の初稿を半分程度
- stackのバグ
    - extra-deps, stack clean: 再現ケースを作って同様のバグがないか探す
- stackageのRSSが遅い問題
    - レビュー対応
        - 結果: 達成
    - マージしてリリースしてもらう
        - 結果: 達成
- Pharo By Example
    - First appの実装
- chghc
    - 実装してみる

# 2020/01/18 - 2020/01/19

- Strict拡張の記事
    - 2020/01/18: サンプルコードの動かし方、使用した環境の記載
    - 2020/01/19: 各サンプルの見出し
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/17

- Haskell入門コンテンツ:
    - 2020/01/17: 引き続き課題8
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語
- 英語

# 2020/01/16

- Haskell-jp活動:
    - slack-logに送られたPRをレビュー・マージ後のいろいろの修正
        - <https://github.com/haskell-jp/slack-log/pull/30>
        - <https://github.com/haskell-jp/slack-log/commit/bc6f598caba5d79f8c80f10037905829a1af725b>
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/14 - 2020/01/15

- Haskell入門コンテンツ:
    - 2020/01/14: 課題5.5に挟んだif式の説明: ひとまず完成: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/b22bee3d507146bf7cfa6370f85da8d2210ed33d>
    - 2020/01/15: 課題8を再開
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語
- 英語

# 2020/01/13

- Haskell入門コンテンツ:
    - 課題5.5に挟んだif式の説明
- Strict拡張の記事
    - イントロが終わった...
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/12までの目標

- Haskell入門コンテンツ:
    - 課題5.5に挟んだif式の説明
        - 結果: 未達
    - 課題8の不足箇所を埋める
        - 結果: 未達
- haskell-jp タスク割り当て
    - 結果: 達成
- Strict拡張の記事
    - 記事の初稿を半分程度
        - 結果: 未達
- stackのバグ
    - extra-deps, stack clean: 再現ケースを作って同様のバグがないか探す
        - 結果: 未達
- stackageのRSSが遅い問題
    - 直し方を調べてコメント
        - 結果: 達成 <https://github.com/fpco/stackage-server/pull/282>
- Pharo By Example
    - First appの実装
        - 結果: 未達
- chghc
    - 実装してみる
        - 結果: 未達

# 2020/01/12

- Strict拡張の記事
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/11

- haskell-jp タスク割り当て
- Strict拡張の記事
    - まだイントロ...
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/10

- Strict拡張の記事
    - イントロダクションを途中まで
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/08 - 2020/01/09

- Haskell入門コンテンツ:
    - 2020/01/08 - 2020/01/09: 課題5.5引き続き
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語
- 英語

# 2020/01/07

- Haskell入門コンテンツ:
    - 2020/01/07: 課題5.5引き続き
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/06

- Haskell入門コンテンツ:
    - 2020/01/06: 課題5.5引き続き
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語
- 英語

# 2020/01/05までの目標

- Haskell入門コンテンツ:
    - 課題5.5に挟んだif式の説明
        - 結果: 未達

# 2020/01/05

- Haskell-jp活動:
    - Fix: [日本語が混ざったコミットメッセージを与えるとエラーを返すことがある · Issue #14 · haskell-jp/haskell-jp-wiki](https://github.com/haskell-jp/haskell-jp-wiki/issues/14)
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語

# 2020/01/01 - 2020/01/04

- Haskell入門コンテンツ:
    - 2020/01/01 - 2020/01/02: 課題5.5引き続き。
    - 2020/01/03: 課題5.5引き続き。もう少し？
    - 2020/01/04: 型エラーの説明を入れ込みすぎても情報過多になってしまうので、もう少し絞りが必要そう。
- [The Rust Programming Language (Covers Rust 2018)](https://nostarch.com/Rust2018)
- [Practical Reverse Engineering](https://repo.zenk-security.com/Reversing%20.%20cracking/Practical%20Reverse%20Engineering.pdf)
- [Mastering Reverse Engineering](https://www.packtpub.com/networking-and-servers/mastering-reverse-engineering)
- 中国語
