<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2020/10/25までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
        - conversations.repliesのテスト用コマンドを作る
    - Monad則を破る話:
        - 半分強程度執筆
        - ReadmeTestの実装
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める

# 2020/10/20

- Haskell-jp活動:
    - COCに対する変更を共有する準備をしたのでその記録を記事にした:
        - <https://qiita.com/igrep/items/acf0b1e4f1917f9c636c>
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- [圏論入門 Haskellで計算する具体例から](https://www.nippyo.co.jp/shop/book/8340.html)
- 中国語

# 2020/10/19

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/10/19:
            - 先週見つけた問題は直せた（はず）。しかし、出力した実行ファイルの出力が`cargo test`したときに出てきてないような...？
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- [圏論入門 Haskellで計算する具体例から](https://www.nippyo.co.jp/shop/book/8340.html)
- 中国語

# 2020/10/18までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
            - 結果: 未達
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
    - Monad則を破る話:
        - 半分強程度執筆
            - 結果: 未達
        - ReadmeTestの実装
            - 結果: 未達
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
            - 結果: 未達
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 結果: 未達

# 2020/10/17 - 2020/10/18

- Haskell-jp活動:
    - Monad則を破る話:
        - ReadmeTestの実装
            - 2020/10/17: `CompareAfterPrompt`に関していえば、やっぱり設計を間違ったな... テストにしても実装にしても複雑すぎる気がしてきたぞ
            - 2020/10/18: と思ったけどできそう。`CompareAfterPrompt`を使った場合の変換規則を整理
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 2020/10/17: 課題9の途中までできたところをコミット: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/b2784981ab6c85a4b9eda8631bdbfab4498b0259>
        - 2020/10/18: ちょっとだけ
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/15 - 2020/10/16

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/10/15:
            - 実行してみたらIllegal Instructionに。
            - gdbからも`main`や`assert_equal`など、定義したはずの関数がないと言われるし、さっぱりわからん。確かにobjdumpしても両方見つからない...
        - 2020/10/16:
            - 生成したassemblyを取り出していろいろいじってみたら実行できた。どうやら`.text`と`.data`がごっちゃになっていたのが問題らしい。ただ実行の最後にSegmentation faultになった。
- Haskell-jp活動:
    - Monad則を破る話:
        - ReadmeTestの実装
            - 2020/10/15: `CompareAfterPrompt`のパース方法が変わったので修正
            - 2020/10/16: ちょっとだけ
            - 2020/10/17: `CompareAfterPrompt`に関していえば、やっぱり設計を間違ったな... テストにしても実装にしても複雑すぎる気がしてきたぞ
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/14

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - ようやくasmファイルをコンパイルして実行できたが、早速エラー。SEGVかBUSエラーかな？
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/13

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - `MOVT`・`MOVW`を使う方向で修正中。もうちょっとのはず
- Haskell-jp活動:
    - Monad則を破る話:
        - ReadmeTestの実装
            - `CompareAfterPrompt`のtest続き。仕様を少し改めて、テストする行の続きを表すのに空白文字` ｀は使えないことにした。その方がGHCiの仕様と一貫するし。
                - 2行以上続くとややこしいのが実際にexpected lineと比較するのはexpected lineを書く手前の行、ってところだね...。まだちょっと仕様がおかしい気がするな。
                - やっぱり`Comparison`の`lineToTest`は2行以上続くものではないのでは
                - なので、`foundComparisonLines`に追記するのは`expectedLines`が空じゃない場合だけなのでは
                - となると、`CompareAfterPrompt`におけるコードブロックは全体として一つの宣言にして各行は`let`で定義すればいい？
                    - `ValidateExpression`も同じ方法にした方が一貫性が出てよさそう
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/12

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - `MOVT`・`MOVW`を使う方向で修正中。途中で`MOV32`という擬似命令があることも知ったが、残念ながら手元のgccでは使えなかった
- Haskell-jp活動:
    - Haskell-jp Admins設立
        - COCの細かい修正と見直しが済んだのところで、いろいろやりづらそうなことに気づいたのでCOC用のリポジトリーを整理。
        - 次は<https://github.com/haskell-jp-admins/coc-draft/pull/1>のPRのコミットをrebaseしてパッチに変換してから整理しよう。PRはそれから。余計な手間を増やしてしまったな...
- 中国語

# 2020/10/11までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
            - 結果: 未達
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
    - Monad則を破る話:
        - 半分強程度執筆
            - 結果: 未達
        - ReadmeTestの実装
            - 結果: 未達
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
            - 結果: 未達
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 結果: 未達

# 2020/10/11

ついついドラクエをやりこんでしまって何もしなかった

- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/10

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.historyをpaginationする関数について引き続き。
            - 先週であった問題を両方解決。
                - 遅延IOは諦めて、自前でiteratorを作ることにした。簡単に確認しただけだけど、メモリーの消費量は改善されたようだ
                - SlackのAPIを無限に呼んでしまう問題は、cursorを渡し忘れていたからだった。ToFormData型クラスの実装は手動だったのだ...
    - Haskell-jp Admins設立
        - COCをさらに修正。明日こそみんなに共有かな
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/09

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - `MOVT`・`MOVW`を使う方向で修正開始
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/06 - 2020/10/08

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/10/06: ようやく生成したasmファイルをコンパイルするところまで来たが、案の定コンパイルエラー。とりあえずはすぐ直せそうだ
        - 2020/10/07:
            - コンパイルエラーは<https://teratail.com/questions/102402>だった。
            - 👆こちらは直したが今度は<https://stackoverflow.com/questions/36740646/gcc-invalid-literal-constant-pool-needs-to-be-closer>が。まだ直し方は分からない
                - "invalid literal constant: pool needs to be closer"
        - 2020/10/08:
            - 昨日出くわした問題はなかなか難しそうだ。要するに`LDR R1, =12345`などする命令が多すぎて、リテラルの位置がPCより制限を超えて離れてしまっているからだろう。ここまではアセンブラーが自動で解決してくれない、と。やっぱり`MOVW`・`MOVT`を組み合わせて使う方法の方が確実かな？
                - <https://stackoverflow.com/questions/36740646/gcc-invalid-literal-constant-pool-needs-to-be-closer>
- Haskell-jp活動:
    - Monad則を破る話:
        - ReadmeTestの実装:
            - 2020/10/06: まだ最新の`Comparison`を計算する箇所についてundefinedが残っているが、一通りテストが埋まった。型エラーがあるのでまだかかりそうだけど。
            - 2020/10/07: テストのコンパイル通った。（警告と`undefined`がまだある）
            - 2020/10/08:
                - テストをやっと実行。ちゃんとすべて落ちてる。
                - それからテストに残った`undefined`を実装開始。やっぱ`CompareAfterPrompt`の実装複雑だなぁ
    - Haskell-jp Admins設立
            - 2020/10/06: 定款について前回の会議で気になった点を修正
            - 2020/10/07: COCのドラフトの修正。概ねできたが一晩温めよう
            - 2020/10/08: 昨日の修正をpush。あとはハラスメント行為の例について修正かな。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/05

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/10/05: wasmファイルが切り替わった時点で実行ファイルを作って実行するよう修正したが、今度はループが終わった後に実行してない問題ができてしまった。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/04までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をテスト
            - 結果: 達成
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
            - 結果: 未達
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
    - Monad則を破る話:
        - 半分強程度執筆
            - 結果: 未達
        - ReadmeTestの実装
            - 結果: 未達
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
            - 結果: 未達
    - 買い物リストをAirtableに移行
            - 結果: 達成
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
            - 結果: 未達

# 2020/10/04

- Haskell-jp活動:
    - Monad則を破る話:
        - ReadmeTestの実装:
            - 2020/10/04: currentDirectiveが`CompareAfterPrompt`の場合のテストが半分くらいできたはず
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/03

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.historyをpaginationする関数について引き続き。
            - スペースリークっぽい現象を回避するためにデータ構造を見直した。`historyRspMessages`を`ConsecutiveResponses`に詰め替える処理がなくなった分だけ高速になったはずだけど、やっぱりメモリーをもりもり食ってしまう。
            - あと、実際にSlackのAPIに対して実行してみたところ、なぜか無限にAPIを実行してしまい、最終的にSlackのrate limitedエラーに。
                - cursorの扱い方が想定と違うのだろうか？
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/10/01 - 2020/10/02

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/10/01: gccでコンパイルして実行する処理を抜き出してできたコンパイルエラー修正、wastから生成したasmファイルを実行する処理も書いてる
        - 2020/10/02: 一つのwastファイルにコンパイルするwasmファイルが複数存在する場合があるので、現在のwasmファイルが切り替わった段階でアセンブリーをコンパイル・実行する処理に変更中
- Haskell-jp活動:
    - Monad則を破る話:
        - ReadmeTestの実装:
            - 2020/10/01: currentDirectiveが`ValidateExpression`の場合のテストケースができたはず。あと、\`\`\`という行を受け取った場合のテストケースを共通化した
            - 2020/10/02: currentDirectiveが`CompareAfterPrompt`の場合について、まだまだいろいろ迷う余地があるな
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/28 - 2020/09/30

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/28 - 2020/09/29: 実行時エラーを修正。テストの`main`関数を吐き出すのを忘れていたのも修正。次はgccでコンパイルだ。
        - 2020/09/30: gccでコンパイルして実行する処理を抜き出した
- Haskell-jp活動:
    - Monad則を破る話:
        - ReadmeTestの実装:
            - 2020/09/28: まだ構文エラーがあるので分からないけど、最初の2つのケースについてのテストケースができたはず
            - 2020/09/29: 3つめのテストケース作成
            - 2020/09/30: currentDirectiveが`Ignore`の場合と`AppendAsIs`の場合のテストケースができたはず。
    - Haskell-jp Admins設立
        - 2020/09/28: COCのドラフト用リポジトリーを作成。Haskell Day 2019からひとまずコピペして一括置換を中心に修正。
        - 2020/09/29: 一部言葉が出てこない部分はあるものの、Pull requestを作っておいた: <https://github.com/haskell-jp-admins/coc-draft/pull/1>
        - 2020/09/30: 一通り埋めた。よく考えたら公開しないと事前に共有したい外のメンバーに見せられないな。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/27までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をテスト
            - 結果: 未達
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
            - 結果: 未達
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
    - Monad則を破る話: 半分強程度執筆
        - 結果: 未達
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
            - 結果: 未達
    - Google Shopping Listの中身をエディターで編集する記事:
        - ブックマークレット実装
            - 結果: 未達。買い物リストをAirtableに切り替えたくなってきたので止めとこうかな
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 結果: 未達

# 2020/09/27

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装: 先週ハマったバグは直した。なんかスペースリークを起こしているように見える？けどもとりあえず先に進むか...
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/26

- Haskell-jp活動:
    - Monad則を破る話:
        - 2020/09/26: Yak Shaving続き。directiveについてのGeneratorを実装など。Comparisonに関する仕様が間違っている点にも気づいた
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/23 - 2020/09/25

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/23: `assert_equal`の呼び出しができたはず。assemblyなんで正しくできてるか自信がない
        - 2020/09/24: `assert_equal`の実装ができた。これもassemblyなんで正しくできてるか自信がない
        - 2020/09/25: `assert_return`以外の`WastCommand`を無視。やっとコンパイル通った
- Haskell-jp活動:
    - Monad則を破る話:
        - 2020/09/23:
            - Yak Shaving続き。`processLine`関数のテストを書く前にいろいろ整備。
                - 明日はAppStateのGeneratorを定義かな。`inCodeBlock`か否かでケースを分けてやるのがよさそう。あとすでにComparisonがいるかどうか
            - エラーを警告として出せるよう型を修正。エラーで途中で止める場合を考えると本当はLazy IOで1行ずつ書くのはやめた方がいいのかも。
        - 2020/09/24: Yak Shaving続き。テストケースのcontextを列挙。
        - 2020/09/25: 生成する文字列を種類別に列挙。あと、各行を変換した後にテストコードを吐き出す処理が必要なので、`undefined`にメモしておいた。
    - Haskell-jp Admins設立
        - 2020/09/23: organizationなどを作成。次は作成に関する根回しを。
        - 2020/09/24: 総則を途中まで書いた。
        - 2020/09/25: 総則をとりあえずコミット
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/21 - 2020/09/22

- Haskell-jp活動:
    - Monad則を破る話:
        - 2020/09/21: 引き続きYak Shaving。コマンド作りはまだまだかかりそう
        - 2020/09/22:
            - 引き続きYak Shaving。パーサーが全部できたかな？
            - まだ書けてない、構文エラーになっているところと`import`し忘れてるところを直したら一発でコンパイル通った。我ながらすごいな。
            - 残りの、`processLine`関数は仕様を整理したいし、先にテストを書こう。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/20までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をテスト
            - 結果: 未達
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
            - 結果: 未達
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
    - Monad則を破る話: 半分強程度執筆
        - 結果: 未達
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 新しい仕様の型設計
            - 結果: 未達
    - Google Shopping Listの中身をエディターで編集する記事:
        - ブックマークレット実装
            - 結果: 未達
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 結果: 未達

# 2020/09/20

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - ようやく新しいconversationsHistoryの実装ができたけど、テストで無限ループしてしまう。
        - エラーが発生した場合に途中まで取得した結果が返せるようにした方がいいことに気づいて、また難易度が上がってしまった。
            - とりあえず型を変えたけど、これちゃんと順番を維持しようと思ったらDListっぽい構造にしないとな...
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/09/19

- Haskell-jp活動:
    - Monad則を破る話: 引き続きYak Shaving。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/17 - 2020/09/18

- Haskell-jp活動:
    - Monad則を破る話:
        - 2020/09/17: 少しサンプルを書いてから、サンプルのテストを自動化できないかとmarkdown-unlitを試すも、ちょっとイマイチ。
        - 2020/09/18:
            - 自前のLitelate Haskellツールが作りたくなって夢中で書いてしまった。最低限今回の記事に必要なものが半分くらいできただろうか。
            - 相変わらずYak Shavingばっかり捗ってしまう...
        - 2020/09/19: 引き続きYak Shaving。
- 中国語

# 2020/09/15 - 2020/09/16

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/15 - 2020/09/16: `assert_return`対象の関数を呼ぶコード引き続き
- Haskell-jp活動:
    - Monad則を破る話:
        - 2020/09/15:
            - `Writer`の`Monad`のインスタンス定義について解説完了。
            - ちょっと思いつくままに行き当たりばったりに書いてたから構成を少し練った。果たしてちゃんとまとまるだろうか？
         - 2020/09/16:
            - `Writer`を使った`do`の解説始め
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 2020/09/15 - 2020/09/16: 新しい仕様で使う型のJSONインスタンス定義。
            - `Preprocessor`をJSONから取得するときはやっぱ専用の構文を設けた方がよさそうだなぁ。`Perl`の`s/.../.../`風に
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/14

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - `assert_return`対象の関数を呼ぶコード書き始め
- Haskell-jp活動:
    - Monad則を破る話: `Writer`の`Monad`のインスタンス定義について
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/13までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - キックオフのアジェンダ
        - 結果: 達成
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をテスト
            - 結果: 未達
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
            - 結果: 未達
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
    - Monad則を破る話: 半分程度執筆
        - 結果: 未達
    - Docker/haskellのドキュメントについて
        - 改めてstackで試す
            - 結果: 達成
        - ドキュメント修正のPull requestを送る
            - 結果: 達成
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - フィルター機能の設計に向け、他の静的サイトジェネレーターを調査
            - 結果: 達成
        - タグの末尾にカンマが入ってしまう問題の修正
            - 結果: 達成
    - Google Shopping Listの中身をリストアップする記事: 執筆
        - 結果: 未達
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 結果: 未達

# 2020/09/13

- Haskell-jp活動:
    - キックオフのアジェンダ
        - 書けた。遅くなってしまったのでアナウンスは明日。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/12

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - テストが一部書けた
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/10 - 2020/09/11

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/10: さてやっと`WastAction::AssertReturn`の実装だ。とりあえず普通のレジスター経由の関数渡し、だよね
        - 2020/09/11: `WastAction::AssertReturn`の実装に向け、ランタイムを吐き出すコードを書こうとしたら、ついでにリファクタリングしたい箇所が見つかったり
- Haskell-jp活動:
    - Monad則を破る話:
        - 2020/09/10: `Writer`の型定義・`Monad`のインスタンス定義を引用するまで
        - 2020/09/11: `Writer`の型定義・`Monad`のインスタンス定義をちょっとリファクタリング、定義が合っていることを確認するために`Functor`, `Applicative`の定義を足したり
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 2020/09/10:
            - metadataの形式をYAMLと仮定して行う修正や、preprocessor機能の追加に向けて修正開始。必要な型を列挙するところから。
              preprocessorは置換用の正規表現と置換文字列で表すのが適当だろうけど、同様文字列表現、型にするべきか。  
              明日regexパッケージのドキュメントを読んで考えよう
        - 2020/09/11: preprocessorの型として、regexパッケージの`SearchReplace`型を採用することにした
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/09

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/09: 文字列を組み立てる方向に修正して引き続き
- Haskell-jp活動:
    - Docker/haskellのドキュメントについて
        - ドキュメントを修正してPull requestを送った: <https://github.com/docker-library/docs/pull/1794>
        - 発端となった質問にも、追加で回答した
    - Monad則を破る話: `Monoid`の例を一通り解説
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - タグの末尾にカンマが入ってしまう問題は、実際のところバグじゃなくて書いた記事のミスだった。カンマ区切りじゃなくてスペース区切りなのね...
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/08

- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- Haskell-jp活動:
    - Monad則を破る話
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - Nuxt.jsもJekyllもやっぱり先頭にYAMLを各タイプだし、それ前提で書こうかな。
            - リクエストがあったら、metadataをコマンドライン引数から取得する仕様にしてもいいだろう
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/07

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/07: 文字列を組み立てる方向に修正して引き続き
- Haskell-jp活動:
    - Docker/haskellのドキュメントについて
        - 改めてstackで試して、ドキュメントの修正事項がわかった。
            - <https://twitter.com/igrep/status/1302762128953151489>
    - Monad則を破る話: ちょっとだけ
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - Gatsby, Next.jsを見た限り、やっぱりmarkdownの先頭にYAMLっぽい形式のメタデータを書くのが主流なようだ
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/06までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をテスト
            - 結果: 未達
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
            - 結果: 未達
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 試しに使って動作確認
            - 結果: 達成
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 結果: 未達

# 2020/09/06

- Haskell-jp活動:
    - Monad則を破る話
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める: またちょっとだけ
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/05

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyのテストで使うパッケージをリリースした
            - <http://hackage.haskell.org/package/fakepull>
    - Monad則を破る話: 実際に`Monad`則を破る実験ができたので執筆開始
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/04

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/04: 冷静に考えたらどうせ最終的には全部インメモリーでコンパイルすることになるだろうし、`asm_out`プロパティーは諦めて、メモリー上で文字列を組み立てることにした。
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 初めて使用して記事を公開・修正できた。
        - 次の記事を書こう、と思ったところで課題が:
            - やっぱり画像を始め、参照しているURLをQiita版とブログ版とで差し替えるようにできた方がよさそう。何らかの形でプリプロセッサーを埋め込めた方がいい
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/03

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/03: 質問した部分は解決したけど、まだコンパイル通らない...。やっぱり`'static`な参照が必要らしい
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/02

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/02: 質問が書けた: <https://ja.stackoverflow.com/questions/70064/%E5%8F%82%E7%85%A7%E5%9E%8B%E3%81%AE%E5%80%A4%E3%82%92%E6%9B%B4%E6%96%B0%E3%81%97%E3%81%AA%E3%81%8C%E3%82%89%E4%BD%BF%E3%81%84%E5%9B%9E%E3%81%99%E3%83%AB%E3%83%BC%E3%83%97%E3%81%AB%E3%81%8A%E3%81%84%E3%81%A6%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%83%9D%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC>
- その他:
    - Google Shopping List にテンプレート的な機能
        - 2020/09/02: Qiitaに投稿する際のスクリプトを設定。実行はこれから。
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 2020/09/02: テストとドキュメントにおけるコマンドライン引数をできるだけ互いに寄せた。事実上それが唯一のユースケースだろうし
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/09/01

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/09/01: 最小ケース的なもののコンパイルが通せた。
- その他:
    - Google Shopping List にテンプレート的な機能
        - 2020/09/01: 記事が書けた。
    - Google Shopping List からアイテムをコピーする
        - サクッとブックマークレットを書いた。これも記事にしよう
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/31

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/31: 最小ケース的なもののコンパイルが通せた。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/30までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をテスト
            - 結果: 未達
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
            - 結果: 未達
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 結果: 未達

# 2020/08/30

- タイプセーフプリキュア:
    - ヒーリングっど♡プリキュア追加浄化技・戦士追加
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/29

- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/27 - 2020/08/28

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/27: 昨日であった問題は`RefCell`を使えばよい気がするが、ベストプラクティスがわからないのでやっぱり最小ケースを作って人に聞いてみよう。
        - 2020/08/28: 引き続き最小ケース作り。
- その他:
    - Google Shopping List にテンプレート的な機能
        - 2020/08/27: ようやくブックマークレットが実装できた。
        - 2020/08/28: multipostのテストも兼ねて、試しに投稿してみよう
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/25 - 2020/08/26

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/25: モジュール分割に伴うunused importsの削除
        - 2020/08/26: コンパイルが通らん
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 2020/08/25:
            - `conversations.history`の再実装。型定義もなるべく新しい機能が使えるように新しいものを定義して使うことにした。
            - テストコードのために、fakefsの「なんかストリームっぽいものを操作するバージョン」を作り始めた。
        - 2020/08/26:
            - テストコードのために、fakefsの「なんかストリームっぽいものを操作するバージョン」続き。とりあえずfakefsのコードから流用したので、今欲しいのはIO版だけどPure版を作ってしまうことにした。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/24

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数を作り直すべく、型設計
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/23までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
        - 今後の実装タスクをまとめる
            - 結果: 未達
        - conversations.listを取得する処理の実装
            - 結果: 未達
        - conversations.historyを取得する処理の実装
            - 結果: 未達
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
            - 結果: 未達

# 2020/08/23

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 「`oldest`に渡される値がすべてのリクエストで同じ値になってしまっている」問題は、どうやら少なくとも、他のhistory系のAPIについては意図通りらしい。
            - `latest`のみを少しずつ古い時間にずらすことで、全件取得する、というアルゴリズムのようだ
            - conversations.repliesはレスポンスの先頭のメッセージに必ずスレッドの先頭のメッセージを含めるため、余計な結果が混ざってしまう
        - やっぱりconversations.repliesとchannels.historyはレスポンスの順番が逆っぽいな。conversations.historyもconversions.repliesと同じなんだろうか。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/22

- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/21

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - モジュール分割引き続き
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - テストを通してからcommitしてなかったのでcommit・push。ついでに職場が最初の実験環境になりそうなので実行ファイルのリリースもしておいた。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/20

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/20:
            - さすがにwast関係の諸々は分けた方がいいと感じたのでモジュールを分割し始めた。  
              <https://qnighy.hatenablog.com/entry/2017/03/27/070000> が丁寧だし正確そうだ。
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/19

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/19:
            - wast2jsonが吐いたJSONをARM32の実行ファイルに変換する処理引き続き
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/18

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/18:
            - wast2jsonが吐いたJSONをARM32の実行ファイルに変換する処理引き続き。テストの実行をアセンブリーでやるのがしんどそう
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 2020/08/18:
            - URLを検出する正規表現が間違っていたり、実はURLだけじゃなくてタグの処理も一部間違っていたので修正
            - さらにテストを抽象化した関数にも間違いが。直してようやくテストが通った！
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/17

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/17:
            - 型定義ができて、パースしたJSONに対する処理を実装開始
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/16までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesのテスト用コマンドを作る
            - 結果: 未達
        - 今後の実装タスクをまとめる
            - 結果: 未達
        - conversations.listを取得する処理の実装
            - 結果: 未達
        - conversations.historyを取得する処理の実装
            - 結果: 未達
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 結果: 未達

# 2020/08/16

- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/15

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 2020/08/15:
            - 古いSlackのaccess tokenの利用を止めても結果変わらず。
                - 原因はSlackに渡すタイムスタンプの小数点以下が7桁以上になっていたからだった。SlackTimestampの扱いを修正したときにバグった
                - ついでにタイムスタンプのパラメーターに「just」など無関係な文字列が混ざってしまう問題を修正
                - ようやくconversations.repliesから結果がとれるようになったが、ページネーションのやり方がおかしく、意図しない結果に。
                    - `oldest`に渡される値がすべてのリクエストで同じ値になってしまっている
                    - conversations.repliesはレスポンスの先頭のメッセージに必ずスレッドの先頭のメッセージを含めるため、余計な結果が混ざってしまう
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/13 - 2020/08/14

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/13 - 2020/08/14:
            - wast2jsonが吐いたJSONを解釈する型の作成。serdeをインストールしたがCargoが依存関係のconflictがあるというので試行錯誤してwasmerの最新版をpullしたら案の定ビルドがこけ、直す羽目に... すぐ直せたけど
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/11 - 2020/08/12

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/11 - 2020/08/12:
            - wast2jsonが吐いたJSONを解釈する型の作成
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 2020/08/11: fakefsパッケージの新しいバージョンをリリースして、multipostパッケージのテストもそれに合わせて修正
        - 2020/08/12:
            - テストケースが一部一貫していないせいでテストが落ちていたのを修正
            - 依然として失敗するようなのでデバッグコードを追加
            - テストの正規表現が一部間違っていた
            - URLの検出と書き換えにまだ問題があるらしい
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/10

- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める
        - 修正箇所の確認（というか、ほとんど全部書かないといけないことがわかった。そりゃそうか...）
        - 正しいプログラムの入出力例が一部間違っていたので修正
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/09までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesのテスト用コマンドを作る
        - 結果: 未達
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - 結果: 達成

# 2020/08/08 - 2020/08/09

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 2020/08/08: conversations.repliesを試すための小さなコマンドもできたはず（未検証
        - 2020/08/09:
            - conversations.repliesを試すための小さなコマンドを試すところで、slack-webパッケージが従来タイムスタンプを正しく扱ってないため、スレッドへのリプライを取得する際不都合が生じる可能性に気づいたので、修正。
            - いざ動かすも、なぜかスレッドの先頭のメッセージしか返ってこない。  
              多分、古いSlackのaccess tokenを利用しているからではなかろうか。（多分、Slackがレスポンスに警告を含めていると思うので、 <https://docs.servant.dev/en/stable/cookbook/using-free-client/UsingFreeClient.html> とかFiddlerとかを使って覗けないものか。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/07

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/07:
            - wast crateだとwasmファイルが分割できないのでやっぱwast2jsonが吐いたJSONを解釈した方がいいかも
            - wasmerは自前でwastファイルをパースして生成している？wasmer自身にはwasmのテキストフォーマットをパースする機能がないみたいだけど...
            - まぁとりあえず`run_tests_from_wast_json`関数から始めよう
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - fakefsパッケージの修正続き。実装・テストの修正完了。見直したらpush・リリースしよう
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/06

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/06: よく考えたらwast2jsonを使わなくともRustのwast crateを使えばいいんじゃないか...
            - <https://github.com/bytecodealliance/wasm-tools/tree/main/crates/wast>
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/05

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - とりあえず`Makefile`の修正から。やっぱり正常系のケースを実行できるようにしよう
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - fakefsパッケージの修正続き
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/04

- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - できた。やっとpushした: <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/1e42fa215f3572733c16831de7fd38a07f373e2b>
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - テストで例外が発生したときの挙動が分かりづらかったし、例外が発生したときに実行後のファイルシステムなどがテストできないことに気づいたので、テストで使用するMonadを書き直していた。  
          本当はfakefsパッケージから修正したかったけど、たまたまノートPCで作業していたのでデスクトップにしかない修正があったら嫌だな、と思って敢えて`runTestM`の型だけを変えてテストケースをそれに合わせて書き換えた（結局、fakefsの実装はそのままで`runTestM`も実装しちゃったけど。型に導かれてしまった）
        - 実装の修正（と、多分テストも？）は次回、fakefsの新しいバージョンをリリースしてから。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/03

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - やることはJSONファイルを解釈してARM32のELFを吐くこと。とりあえず簡単そうな`assert_invalid`を解釈するようにしてみようかな
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - 今度こそ埋まったはず（何度目だ？）。明日また一通り読んで大丈夫そうだったら達成にする。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/02までの目標

- wasm2arm32 compiler:
    - モジュール内部の関数呼び出しの実装
        - 引数一つ
            - 結果: 達成
        - 引数四つまで（テストケースでは二つまで）
            - 結果: 達成
        - exportしてない関数を.globalに入れない
            - 結果: 達成
        - wasmerのパーサーでwasmのテストケースをパースしてみる
            - 結果: 未達。直接パースはできないので実質できたようなもんだけどね
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesの実装
            - 結果: 達成
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - 結果: 未達

# 2020/08/02

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesの実装ができたはず。次は試すための小さなコマンドを作ろう
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/08/01

- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 2020/08/01: `undefined`は一通り潰したが、テストがこける。正規表現に`\s+`を挟んだら直った部分もあるので、空白文字のstrip漏れなどの問題があるのだろうか
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/07/30 - 2020/07/31

- wasm2arm32 compiler:
    - モジュール内部の関数呼び出しの実装
        - 2020/07/30: exportしてない関数を.globalに入れないところまでできた。明日はコミットして次の課題へ
        - 2020/07/31: コミットした。WebAssemblyのテストケースを<https://github.com/WebAssembly/testsuite/blob/master/i32.wast>をwat2wasmで解釈するも、やはり違うフォーマットらしい。<https://webassembly.github.io/wabt/doc/wast2json.1.html>で一旦JSONに変換せよ、と。
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/07/28 - 2020/07/29

- wasm2arm32 compiler:
    - モジュール内部の関数呼び出しの実装
        - 2020/07/28: 引数一つの場合のテストケースをクリア
        - 2020/07/29: 引数二つの場合のテストケースを作成。ちゃんと動くことを確認
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 2020/07/28: URLを取り出して、対象のファイルに対して行うアクションを決める処理を書いた
        - 2020/07/29: 残りの部分をトップダウンで書いてから、タイトルを取り出す処理を書いた
- [はじめてのOSコードリーディング --- UNIX V6で学ぶカーネルのしくみ](https://gihyo.jp/dp/ebook/2013/978-4-7741-5517-3)
- WebAssemblyの仕様
- 中国語

# 2020/07/27

- wasm2arm32 compiler:
    - モジュール内部の関数呼び出しの実装
        - 2020/07/27:
            - 間が空いて忘れてたのでとりあえずgdbで実行した感じ、やっぱりstackに`get_local`した値を積んでないことが原因に見える。  
              先週の時点でわかってメモしてたことだからメモを見ろ、という話だけど :sweat:  
              まぁgdbの使い方を久々に思い出せたし、より原因を確信できたので良かった。
            - 「`get_local`という命令は`feed_event`には出てこないらしい」と思ってたけどよく見たら普通に出てた
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
    - 読了
- WebAssemblyの仕様
- 中国語

# 2020/07/26までの目標

- wasm2arm32 compiler:
    - モジュール内部の関数呼び出しの実装
        - 引数一つ
            - 結果: 未達
        - 引数三つまで
            - 結果: 未達
        - wasmerのパーサーでwasmのテストケースをパースしてみる
            - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesの実装
            - 結果: 未達
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
            - 結果: 未達

# 2020/07/24 - 2020/07/26

- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 2020/07/23: とりあえずREADMEを書いて使うライブラリーの素振りなどをしていた: <https://github.com/igrep/multipost>
        - 2020/07/24:
            - 「やらないことリスト」の追加
            - 必要な型の定義
            - QiitaのAPI endpointをservant-clientで実装
            - 試すための小さなコマンドを作成中
        - 2020/07/25:
            - テストを途中まで書いてた。ずいぶん前に書いたfakefsパッケージをそのまま流用できることに気づいたので試すも、今回は`FileSystemT`以外のMonad Transformerを重ねないといけないので、少し都合が悪い。`FileSystemT`は`MonadState`などのインスタンスにこれまでしてこなかったのだ。試しにやってみるも思った以上に面倒だし、果たしてどうしたものか。  
              他のアプローチを少し考えるに、`ExceptT IOException`が重なっているのが結構邪魔くさいな。それ以外の例外を扱いづらくなりそう。  
              とりあえず今回は`lift`をちょっと書けばいいだけなんで、後回しかな！
        - 2020/07/26:
            - テストを完成させ、コマンドライン引数を定義。コマンドライン引数を定義する段階になっていろいろ設計ミスに気づいて手戻りがたくさん発生...
                - コミットメッセージはもうちょっと寝かせてから書こう。
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/23

- Haskell入門コンテンツ:
    - 2020/07/23: 課題7の不足箇所を埋める: 少し進めた。今度こそもうちょっとかな...
- その他:
    - ブログとQiitaに同時投稿するのをサポートするツール
        - 2020/07/23: とりあえずREADMEを書いて使うライブラリーの素振りなどをしていた: <https://github.com/igrep/multipost>
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/20 - 2020/07/22

- wasm2arm32 compiler:
    - モジュール内部の関数呼び出しの実装
        - 2020/07/20: 引数一つの場合のテストケースのログを調べた
        - 2020/07/21: signatureを取得するコードを実装中
        - 2020/07/22:
            - 取り出したsignatureから引数の数だけPOPするコード。コンパイルは通ったが思わぬexit codeが返ってきた。SEGVしたわけでもない。
                - なにかおかしいと思ったら`get_local`を正しく解釈していない。でも`get_local`という命令は`feed_event`には出てこないらしい。はて。
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/19までの目標

- wasm2arm32 compiler:
    - モジュール内部の関数呼び出しの実装
        - 戻り値あり
            - 結果: 達成
        - 引数一つ
            - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - テスト用のコマンドを書く
            - 結果: 達成
        - Pull requestを送る
            - 結果: 達成
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - 結果: 未達

# 2020/07/19

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 動作確認するコマンドを書いてPull requestを送った。しかし、まだまだ一筋縄ではいかないようだ
            - <https://github.com/haskell-jp/slack-log/issues/42#issuecomment-660626610>
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - 昨日やらなかった分進めたぞ。さっと見直した感じまだ書き足す箇所は少しありそう
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/18

- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/13 - 2020/07/17

- wasm2arm32 compiler:
    - 整数の足し算を実装:
    - モジュール内部の関数呼び出しの実装
        - 2020/07/13: 実装変えてみたけど、SEGVるなぁ。イマイチわからん。入れ子になったときだけ`PUSH {LR}`するにはどうすればいいだろう
        - 2020/07/14: ちゃんと他の箇所でも戻り値を都度`PUSH {R0}`しよう。現状はレジスター割り当ても特に行わない愚直な実装だし
        - 2020/07/15: スタックの使い方を見直してテストを通せた。やっぱり結構冗長なアセンブリーになるなぁ
        - 2020/07/16: 改めてtestsuiteをチェックしてみるも、やっぱり実行方法がわからない。どうすりゃええんじゃろ。まぁとりあえず先に引数一つの場合の実装をしよう
        - 2020/07/17: 引数を一つ受け取るテストケースを追加（というか、元のテストケースを修正）。ちゃんと受け取れてるか確認するために`local.get`も実装することになるな。
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/12までの目標

- wasm2arm32 compiler:
    - モジュール内部の関数呼び出しの実装
        - 結果: 未達。ごく単純な呼び出しはできたけどね
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 結果: 未達。
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - 結果: 未達。

# 2020/07/12

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 多分できたはず。動作確認してPull request送るのは来週かなー
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/11

- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める: `Read`型クラスの説明がなかなか面倒だ
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/06 - 2020/07/10

- wasm2arm32 compiler:
    - 整数の足し算を実装:
    - モジュール内部の関数呼び出しの実装
        - 2020/07/06: ちょっとずつ実装
        - 2020/07/07: 関数の名前を生成するところまで実装
        - 2020/07/08: `Call`命令を受け取ったときの処理を実装開始
        - 2020/07/09: アセンブリーとしてジャンプ先を生成するとき、関数の名前には直接アクセスできないっぽい。どうしよ
            - `ModuleInfo::exports`から関数名で引いて、なかったら`function_id`から自動生成した値を使う、みたいな感じか
                - 実装できた、というか関数の名前を生成する関数をそのまま再利用すれば良かったのだ。
                - とりあえずテストは通したけど、ちゃんとcalling conventionは守りたいなぁ
        - 2020/07/10: ちゃんと呼び出しをテストできるよう、callのテストケースを少し複雑にした。
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/05までの目標

- wasm2arm32 compiler:
    - 整数の足し算を実装
        - 結果: 達成
    - モジュール内部の関数呼び出しの実装
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 結果: 未達
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - 結果: 未達

# 2020/07/05

- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - 課題7今度こそ終わった！と思って読み返してみたらまだ不自然な書き漏らしがあるみたいだね...
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/07/04

- Haskell-jp活動:
    - 先週書いたテストが通るよう修正。ひたすらArbitraryのインスタンスを追加したり。次は`ListReq`, `ListRsp`を追加するところからかな？
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/29 - 2020/07/03

- wasm2arm32 compiler:
    - 整数の足し算を実装:
        - 2020/06/29: `i32.add`の実装できた
    - モジュール内部の関数呼び出しの実装
        - 2020/06/30: モジュール内部の関数呼び出しの、サンプルwasmファイルを作成
        - 2020/07/01: サンプルwasmファイルを呼び出すテスト。現状の設計だと逆にexportする関数の方が実装しやすそう？
        - 2020/07/02 - 2020/07/03: ちょっとずつ実装
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/28までの目標

- wasm2arm32 compiler:
    - 整数の足し算を実装
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 結果: 未達
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める
        - 結果: 未達

# 2020/06/28

- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様

# 2020/06/27

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - `ToJSON`のインスタンスを定義。テストも書こうと思ったが、<https://haskell.jp/slack-log/html/CUPBC8WCE/12.html#message-1593250386.354200>で触れているわかりづらいエラーにハマってテストまでは書ききれず。  
          次はあれか、必要な関数の追加とslack-logで必要な <https://api.slack.com/methods/conversations.list>と<https://api.slack.com/methods/conversations.history>の実装か
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/22 - 2020/06/26

- wasm2arm32 compiler:
    - 整数の足し算を実装:
        - 2020/06/22 - 2020/06/23: 単純な整数のテストを書いた
        - 2020/06/24: 単純な整数を`return`する実装ができた。
        - 2020/06/25: `i32.add`のテストケースを追加。<https://www.sigbus.info/compilerbook#%E3%82%B9%E3%83%86%E3%83%83%E3%83%972%E5%8A%A0%E6%B8%9B%E7%AE%97%E3%81%AE%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%A9%E3%81%AE%E4%BD%9C%E6%88%90>と違って、中置記法の二項演算ではないから、やっぱりスタックをちゃんと実装しないと
        - 2020/06/26: `i32.add`の実装
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/21までの目標

- wasm2arm32 compiler:
    - 空の関数を`return 0`する`main`にコンパイルするまで
        - 結果: 達成
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 結果: 未達

# 2020/06/21

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - `ToJSON`, `FromJSON`のインスタンスをひたすら定義。従来`FromJSON`しか宣言されてなかった型についてもついでに追加。slack-logでも実際orphan instance定義してたし、需要はあるはず。
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/20

- wasm2arm32 compiler:
    - 空の関数を`return 0`する`main`にコンパイルするまで
        - 2020/06/20: gccでコンパイルできた。 ~~あとはテストでできた実行ファイルを実行してみよう~~ 今回はいいや
- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める: またちょっとだけ進めた。ほぼ完成。
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/17 - 2020/06/19

- wasm2arm32 compiler:
    - 空の関数を`return 0`する`main`にコンパイルするまで
        - 2020/06/17 - 2020/06/19: あとは組み立てたアセンブリーをファイルに書き出して`gcc`でコンパイルするだけ...
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/15 - 2020/06/16

- wasm2arm32 compiler:
    - 空の関数を`return 0`する`main`にコンパイルするまで
        - 2020/06/15 - 2020/06/16: いろいろ調べてプランは決めたけどとりあえず`main`決め打ちで。アセンブリーを吐き出すところを書いてた
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/14までの目標

- Strict拡張の記事:
    - 「Case 3: 内側のパターンはやっぱりダメ」の節の修正
        - 結果: 達成
- wasm2arm32 compiler:
    - 空の関数を`return 0`する`main`にコンパイルするまで
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 結果: 未達

# 2020/06/14

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 必要な型はすべて定義できたはず。次は関係する関数や`FromJSON`のインスタンス定義か。  
          その次はあれか、slack-logで必要な <https://api.slack.com/methods/conversations.list>と<https://api.slack.com/methods/conversations.history>の実装か
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/13

- Haskell入門コンテンツ:
    - 課題7の不足箇所を埋める: ちょっとだけ進めた
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/12

- wasm2arm32 compiler:
    - 空の関数を`return 0`する`main`にコンパイルするまで
        - 関数の名前を`ModuleInfo`からとろうと思ったが、`ModuleInfo.exports`から名前を引くのは難しそうだ。  
          `finalize`するときにtraverseして書き出すような形にすれば良いだろうか。  
          ただ、現状アセンブリーとして書き出す関係上、`BL`するときは名前で引くので、安直な方法ではダメだろう。  
          やっぱとりあえず`main`決め打ちか、あるいは効率悪かろうか無理矢理引くか。  
          やっぱこういうことがあるから既存のwasmerの仕組みから作るのは微妙なアプローチになってしまうな...
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/08 - 2020/06/11

- Strict拡張の記事:
    - 2020/06/08 - 2020/06/10: 指摘箇所の修正。
    - 2020/06/11: やっと公開 <https://haskell.jp/blog/posts/2020/strict-gotchas.html>
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/07までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 達成
- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 結果: 達成
    - パース結果を理解して、次のゴールを考える
        - 結果: 達成
    - 空の関数を`return 0`する`main`にコンパイルするまで
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装

# 2020/06/07

- Strict拡張の記事:
    - ようやく書き上げてWIPを外すも、大幅に修正しないといけない箇所が発覚。つらい
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - いろいろ気がかりでほぼ進まず...
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語
 
# 2020/06/06

- Strict拡張の記事:
    - これまで書いたところの見直し・微修正。あとはまとめを書いて終わり。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/06/01 - 2020/06/05

- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 2020/06/01: やっとできた。出力結果が出ないのは`cargo`がビルドしたテストの実行ファイルの仕様だった。`--nocapture`オプションをつけて解決。
        - 2020/06/02: ひとまず、[ステップ1：整数1個をコンパイルする言語の作成](https://www.sigbus.info/compilerbook#%E3%82%B9%E3%83%86%E3%83%83%E3%83%971%E6%95%B4%E6%95%B01%E5%80%8B%E3%82%92%E3%82%B3%E3%83%B3%E3%83%91%E3%82%A4%E3%83%AB%E3%81%99%E3%82%8B%E8%A8%80%E8%AA%9E%E3%81%AE%E4%BD%9C%E6%88%90)を参考に、`i32.const`を受け取って`main`関数を吐き出す処理を目指そうかな。  
          その前に空の関数もいいかも。
        - 2020/06/03 - 2020/06/05: 空の関数をテストする準備。（あるいは、テストしやすくするところまで実装を拡充させている、というか）
        - 2020/06/05:
            - メモ: 関数の名前は`ModuleInfo`の`exports`からとれる
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/05/31までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 結果: 未達
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - 結果: 未達

# 2020/05/31

- Strict拡張の記事:
    - <https://github.com/haskell-jp/blog/commit/b3ead0d1671a501a13ec58c94755733fa7a2e57d> ここまで書けたので多分もう少し。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [［試して理解］Linuxのしくみ ～実験と図解で学ぶOSとハードウェアの基礎知識](https://gihyo.jp/book/2018/978-4-7741-9607-7)
- WebAssemblyの仕様
- 中国語

# 2020/05/30

- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - Swagger Editor上で実行できたおかげで`conversations.list`の挙動がよくわかった
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/25 - 2020/05/29

- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 2020/05/25: ビルドできたかな？正しいツールを使用できたか確信が持てないので動かさないと...
        - 2020/05/26: RasPi上で実行するスクリプトを設定。ビルドが正しいか自身がなかったが、テストは失敗したものの実行はできてるらしい。一安心
        - 2020/05/27 - 2020/05/28: RasPi上で実行するスクリプトの改善、テストデータの作成、設定中
        - 2020/05/29: RasPiにテスト用wasmファイルを転送してテストを実行するところまで行ったが、なぜかなにも出力されない？
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/24までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 結果: 未達

# 2020/05/24

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - さらに加筆
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/23

- Haskell-jp活動:
    - [Haskell-jpもくもく会運営ガイド](https://wiki.haskell.jp/Workshop/hasmoku/OrganizerGuide)
    - [slack のチャンネル系 Web API が非推奨になります](https://github.com/haskell-jp/slack-log/issues/42)
        - Slackのドキュメントを読んだりslack-webパッケージのソースを読んだり
- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 少し加筆
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/18 - 2020/05/22

- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 2020/05/18: runtime-coreをARM32でもコンパイルが通るよう無理矢理修正
        - 2020/05/19: `from_cache`メソッドの実装が面倒
        - 2020/05/20: 必要なメソッドの定義が終わった！
        - 2020/05/21: コンパイルはできたものの、リンク時にエラー。やっぱりRasPi向けのクロスコンパイル用のSDKが必要らしい
        - 2020/05/22: VMにRasPiのビルド環境をセットアップ
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/17までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 結果: 未達
- Haskell-jp活動:
    - slack-logを単一の実行ファイルにする件
        - 結果: 達成

# 2020/05/17

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - GHCがどうスタックを使うかについて調査しつつちょっと進めた
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/16

- Haskell-jp活動:
    - slack-logを単一の実行ファイルにする件
        - 解決: <https://github.com/haskell-jp/slack-log/pull/41>
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/12 - 2020/05/15

- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 2020/05/12 - 2020/05/14: とりあえず引数をひたすら`println`するよう実装
        - 2020/05/15: runtime-coreの一部の実装にアーキテクチャー依存、つまりARM32ではまだ実装されてない部分があったことに気づく。どうしようかなぁ。やっぱりwasmerベースで作るのは一旦諦めるかなー。stubで埋めるかなー。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/11

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 2020/05/11: foldrのケースをちょっとずつ執筆
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/10までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 結果: 未達

# 2020/05/10

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 2020/05/10: サンプルをrunghcでも実行できるようやり方を調べたり、冒頭を整えたり。
- Neovimプラグイン整備:
    - `tagfunc`の件を記事にした: <https://igrep.qrunch.io/entries/K6sUDofcmvtnRqzk>
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/09

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 2020/05/09: foldrのケースについて、サンプルの実行結果を確認しつつ内容を検討。やっぱfoldlについてはいらないんじゃないかな。`Strict`の有無にあまり関係ないし
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/07 - 2020/05/08

- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 2020/05/07: `impl`に必要なメソッドの一覧をコピペ。どこまでwasmer-runtime-coreベースで作るかなー。
        - 2020/05/08: `impl`に必要なメソッドの一覧をコピペしたら出てきた未解決の名前をひたすら`use`
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/04 - 2020/05/06

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 2020/05/04: 入れ子になったパターンマッチングにおける問題の節を書いた
        - 2020/05/05: `Storable`のケースと`foldr`のケースを並行してちょっとずつ + 他の箇所も微修正
        - 2020/05/06: `Storable`のケースができた。残りは週末。
- [Rust in Action](https://www.manning.com/books/rust-in-action)
- [Radare2 Book](https://radare.gitbooks.io/radare2book/)
- WebAssembly関連のIssue漁り
- 中国語

# 2020/05/03までの目標

- Strict拡張の記事:
    - 記事の初稿を書き上げる
        - 結果: 未達
- wasm2arm32 compiler:
    - Wasmerのパーサーを使ってwasmファイルをパースするまで
        - 結果: 未達

# 2020/04/27 - 2020/05/03

- Neovimプラグイン整備:
    - 2020/04/27 - 2020/04/28: NeovimのLSPのソースを読みながら実装。
    - 2020/04/29: 多分できたはずなので明日テスト
    - 2020/04/30: うまく動かない。とりあえずランタイムエラーが起きないところまで修正できたものの、パラメーターがおかしいのか結果が返ってこない
    - 2020/05/01: 軽くprintデバッグした感じ、パラメーターはおかしくない？
    - 2020/05/02: 間違っているのはどうやらresultへの変換処理らしい。もう少しで直せそう
    - 2020/05/03: 直せた。いい感じに動いてる。
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
