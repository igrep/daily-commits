<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2020/09/06までの目標

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
- Haskell-jp活動:
    - slack-webパッケージにConversations APIを実装
        - conversations.repliesとconversations.historyが内部で使用している関数をテスト
        - conversations.repliesとconversations.historyが内部で使用している関数をリファクタリング
        - conversations.repliesのテスト用コマンドを作る
    - ブログとQiitaに同時投稿するのをサポートするツール
        - igreque.infoのテンプレートを編集して`canonicalUrl`を特別扱い。後は公開する用のスクリプトを書いて試しに実行するってところか。
- Haskell入門コンテンツ:
    - 課題9の不足箇所を埋める

# 2020/09/01

- wasm2arm32 compiler:
    - wasmのテストケースを実行できるARM32の実行ファイルを吐く
        - 2020/08/31: 最小ケース的なもののコンパイルが通せた。
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
