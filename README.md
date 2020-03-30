<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2020/04/05までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
- wasm2arm32 compiler:
    - Derek Banasさんのassembly tutorialのサンプルを試す

# 2020/03/30

- wasm2arm32 compiler:
    - サンプルを試せるよう準備。unisonの設定とか
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
