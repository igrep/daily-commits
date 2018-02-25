<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2018/02/25 までの目標

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - [衝突を探す方法の記事](https://medium.com/@robertgrosse/generating-64-bit-hash-collisions-to-dos-python-5b21404a5306)を読んでもうちょっと勉強してみるか、壊れていたPCが帰ってきたらLinuxでのhashableが何ビットのハッシュ値を出しているか調べる。
- Haskell入門コンテンツ
    - Stackのおかしな挙動についてバグ報告。できれば直す。

# 2018/02/24

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)

# 2018/02/23

- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- 中国語

# 2018/02/21 - 2018/02/22

- Haskell入門コンテンツ
    - 2018/02/21: stackを最新版に上げても直ってなかった...。[このIssue](https://github.com/commercialhaskell/stack/issues/3285)で議論されている模様。
    - 2018/02/22: バグの詳細を調べていた
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- 中国語

# 2018/02/19 - 2018/02/20

- Haskell入門コンテンツ
    - 2018/02/19: Stackのバグについて、最小ケースを作っていた。おそらく私の環境固有の問題で、回避は難しいかも。
    - 2018/02/20: 再現するプロジェクトと再現しないプロジェクト両方作れたものの、違いがよくわからない。もしかしてstackの最新版で直ったらしい、Windowsのパス文字制限のバグだったりするのだろうか。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/02/18 までの目標

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 結果: 未達。まだ難航するかも...。
- Haskell入門コンテンツ
    - 少しでも進める。
    - 結果: 未達。ちょっとビルドしようとしてみただけ。一度環境をきれいにしたから依存関係のインストールに時間がかかる...。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: Rubyの`StringScanner`を使わないバージョンを作る。
    - 結果: 未達。実装はできたけどまだバグってる。

# 2018/02/12 - 2018/02/18

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 2018/02/12: あれこれ考えたけど、結局「少しでも効率のいいブルートフォース」でやることになった。まぁ少しはいい経験になると思う。
    - 2018/02/16: あとは生成したハッシュを保存する処理を実装するところだけというところまでやっときた。
    - 2018/02/17: 保存する処理までとりあえず実装。LevelDBを使うことにしたので、Windowsでビルドするのが面倒だなぁと思ってそのままにしてる。あとどうせ最終的にはLinuxで動かすしね。しかし、同時に偶然気づいたのは、32bitのハッシュを計算していたのは、MSYS2のGHCだからでは...という気がしてきた。そうだとすると、今の実装では多分ディスク容量が足りなくなる。
    - 2018/02/18: [池袋プリキュアオフ会](http://mixi.jp/view_event.pl?comment_count=56&comm_id=5372&id=84776155)に参加しながらも、気が向いたときに改めて[衝突を探す方法の記事](https://medium.com/@robertgrosse/generating-64-bit-hash-collisions-to-dos-python-5b21404a5306)を読んでいた。読む度に、またコードを書いてから読む度に、少しずつぼんやりとだけど理解が深まっていて、面白い。結局この件長い時間を費やしてしまいそうだなぁ...。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: Rubyの`StringScanner`を使わないバージョンをとりあえず作ったが、バグっている模様。あと`StringScanner`を使ったバージョンにも別のバグがあることが発覚。
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/02/11 までの目標

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - ようやく興が乗ってきたので一旦この一週間はこれに集中しよう。
    - 未達。結局よく方法もわからないので、brute force attackするためのコードを書いてみて、適当なクラウドのサーバーで実行することにした。

# 2018/02/05 までの目標

- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
    - 数当てゲームを作り、そこに至るまでの全体像を策定
        - 今後は、ひとまずマイルストーンとして、数当てゲームを作るまでのチュートリアルを作る
        - そこから、ユーザーの任意で間違いについての情報収集する仕組みを作ろう。話が大きくなってしまったが、「エラーメッセージを強くする」のが目標なので、方針からはずれていない。
    - 結果: 上記の通り一応達成。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 結果: 未達。

# 2018/02/03 - 2018/02/11

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 2018/02/03: レインボーテーブルの構築を試みるも、やっぱ時間かかるね...。
    - 2018/02/04: あれこれ文書を探っているうちにやっと解決の糸口っぽいものが見えてきた
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/29 - 2018/02/02

- Haskell入門コンテンツ
    - 2018/02/01: stackのバグかもしれない挙動に悩まされる。
    ```
    [1 of 5] Compiling Paths_makeMistakesToLearnHaskell ( .stack-work\dist\5c8418a7\build\makeMistakesToLearnHaskell-test\autogen\Paths_makeMistakesToLearnHaskell.hs, .stack-work\dist\5c8418a7\build\makeMistakesToLearnHaskell-test\makeMistakesToLearnHaskell-test-tmp\Paths_makeMistakesToLearnHaskell.o )
.stack-work\dist\5c8418a7\build\makeMistakesToLearnHaskell-test\makeMistakesToLearnHaskell-test-tmp\.stack-work\dist\5c8418a7\build\makeMistakesToLearnHaskell-test\autogen\Paths_makeMistakesToLearnHaskell.dump-hi: openFile: does not exist (No such file or directory)

--  While building custom Setup.hs for package makeMistakesToLearnHaskell-0.1.0.0 using:
      C:\sr\setup-exe-cache\x86_64-windows\Cabal-simple_Z6RU0evB_2.0.1.0_ghc-8.2.2.exe --builddir=.stack-work\dist\5c8418a7 build lib:makeMistakesToLearnHaskell exe:mmlh test:makeMistakesToLearnHaskell-test --ghc-options " -ddump-hi -ddump-to-file -fdiagnostics-color=always"
  ```
  - 2018/02/02: 改めて設定を確認して実行して、やっぱり再現するので、バグではないかという思いが強まる
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/28 までの目標

今度から週を月曜日で切り替えよう。

- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
    - 2つめの課題まで作成
    - 未達: テストコードの改善に時間がかかってしまった。よく考えたらあとで削除する可能性が高いコードなんで、ちょっと時間をかけすぎなのかな...。新しい方針が思いついてきたので、それとの兼ね合いに悩む。
- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 未達: やっぱり慣れないことなんで難しいね...。デスクトップPCが故障して手元にないのも痛い。

# 2018/01/27 - 2018/01/28

- unordered-containersの脆弱性について、aesonに対する攻撃のPOCの作成
    - 2018/01/27: hashdos脆弱性を利用して攻撃するためのアルゴリズムについて調査
        - <https://events.ccc.de/congress/2011/Fahrplan/attachments/2007_28C3_Effective_DoS_on_web_application_platforms.pdf>
    - 2018/01/28: よく調べたらhashableが使っているのはFNV Hashだったので、衝突する文字列を調べる方法を考えるも、難しい。[この辺](https://medium.com/@robertgrosse/generating-64-bit-hash-collisions-to-dos-python-5b21404a5306)に方法を解説している記事があったものの、ぱっと読んで理解できるかわからない分量だったので断念。代わりにレインボーテーブルの作成を試みるも、メモリ不足で死ぬ。
- [Haskell Data Analysis Cookbook](http://haskelldata.com/)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/23 - 2018/01/26

- Haskell入門コンテンツ
    - 2018/01/25: もうちょっとでやっと一つ目の課題のテストが書き終わる
    - 2018/01/26: 冷静に考えたら今の実装は近い将来捨てるも同然のものなのに、テストを真面目に書きすぎたな。。。
何でこんなことしちゃったんだろう。。。。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/22

- Haskell入門コンテンツ
- unordered-containersのhashdos脆弱性についての記事
    - 公開完了。割とよい反応を得られた。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/20 までの目標

- unordered-containersのhashdos脆弱性についての記事
    - 結果: 達成: 記事の公開までは至らなかったけどPull request出せたしほぼ完成だしいいことにしよう。
- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
        - 結果: 未達。まだ小さいのにリファクタリングとかいろいろ周辺的なものに時間がかかってしまった。
    - 2つめの課題まで作成
        - 結果: 未達。
- Megaparsecの`Text.Megaparsec.Expr`を使ってみた感想
    - 結果: 未達。これはやっぱり後回し。igrep-cashbookがもうちょっとできてからでいいや。

# 2018/01/20 - 2018/01/21

- unordered-containersのhashdos脆弱性についての記事
    - [Pull request出すところまで達成](https://github.com/haskell-jp/blog/pull/72)
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- 中国語

# 2018/01/16 - 2018/01/19

- Haskell入門コンテンツ
    - 2018/01/16: テストが遅い問題がなかなかしぶとい。実行しているマシンがより遅いせいもあるだろうけどいずれにしても耐えがたい速度だ。やっぱりゴールデンテストとほかのテストを分ける手立てが必要そう
    - 2018/01/17: テストが遅い原因を調べたら、やっぱり子プロセス、つまり`stack exec`とかの実行が時間の大半を占めていた。それにしても[stack, 前からこんなだったか忘れたけどプロファイリング楽になったなぁ。stack test --profile ってしただけでprofファイルが作られた。](https://twitter.com/igrep/status/953602925284048896)
    - 2018/01/18: リファクタリングで思わぬ時間を使ってしまった。
    - 2018/01/19: テストの分割開始
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [1日1分・ざっくり学べる中国語文法](https://www.amazon.co.jp/dp/B00LZ1YLIA/)

# 2018/01/15

- タイプセーフプリキュア: キュアペコリンの実装・リリース。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [1日1分・ざっくり学べる中国語文法](https://www.amazon.co.jp/dp/B00LZ1YLIA/)

# 2018/01/14

- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: [Rubyの`StringScanner`を使ったバージョン](https://gist.github.com/igrep/702cad632782c9dd88b3c115f7d9f40a)ができた。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
- [1日1分・ざっくり学べる中国語文法](https://www.amazon.co.jp/dp/B00LZ1YLIA/)

# 2018/01/13 までの目標

- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
    - 2つめの課題まで作成
    - 引き続き先週と同じく。
    - 結果: 未達。思ったより時間がとれず...。
- Haskell開発環境再整備: HIEのバグを調べる
    - 結果: 未達。
- igrep-cashbook再び: GHCJSを試して移植を試みる
    - 結果: 未達。
- Megaparsecの`Text.Megaparsec.Expr`を使ってみた感想
    - 結果: 未達。

PCが日曜日に壊れるトラブルもあり、どれも達成できず。  
まぁ、それでなくても欲張りすぎたね。

# 2018/01/13

- igrep-cashbook再び: GHCJSへの移植開始。とりあえずビルドを試みただけだけど。
- 「プログラミングHaskell」の第8章「関数型パーサー」をRubyで書いて解説する話: ちょっとずつYokohama.rbで進めている件。Ruby版がだいぶできた。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/09 - 2018/01/12

- Haskell入門コンテンツ
    - 2018/01/10: ようやくWindowsの文字コード周りのバグを回避できた。
    - 2018/01/11: ここまでやったことをコミットしだだけ
    - 2018/01/12: テストが異様に遅い原因を探っていた。やはり`stack path`が遅いのが原因らしい。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [Haskell 教養としての関数型プログラミング](http://www.shuwasystem.co.jp/products/7980html/4806.html)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/08

- igrep-cashbook再び: 四則演算機能のテストを書いてみたらやっぱり通らず、想像以上に直すのに苦戦した。直せてよかった。最終的に[こんな1コミット](https://github.com/igrep/igrep-cashbook/commit/cedf8acbef14f7cef29fd7f304329420ab736dc6)にまとまった。気が向いたら記事にして`Text.Megaparsec.Expr`と一緒に紹介しよう。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/07

- igrep-cashbook再び: CLI版をとりあえず動かすところまでと、四則演算機能を実装するところまでやった。四則演算機能は[Text.Megaparsec.Expr](https://hackage.haskell.org/package/megaparsec-6.4.0/docs/Text-Megaparsec-Expr.html)のおかげでめちゃくちゃ簡単にできたっぽいけどちゃんと動くかわからんのでテストも書く。
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/06 までの目標

- Haskell開発環境再整備
    - Haskell IDE EngineをWindowsでも動かす
    - 結果: 未達。Linuxでもどうも動いたり動かなかったりしている模様。HIEのバグの詳細を調べて報告（多分既出）するのは来週と言うことで。
- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
    - 2つめの課題まで作成
    - 結果: 未達。Windowsの文字コード周りのエラーに苦戦。[この間書いた記事](https://haskell.jp/blog/posts/2017/windows-gotchas.html)に追記するネタが増えそう。

# 2018/01/06

- igrep-cashbook再び: [もくもく温泉　開発合宿 #10](https://mokumoku-onsen.connpass.com/event/74011/)中の課題として、予定を変えてやっていた。Haskellで改めて書き直し、四則演算機能を追加するところまでできればやりたい。とりあえずファイル形式のパーサーまで書いた。テストしていないのでどうなるかわからんけど...。

# 2018/01/03 - 2018/01/05

- Haskell開発環境再整備:
    - 2018/01/03: 昨日まで苦戦していたエラーは回避できたが、今度はエラーメッセージが出ないがどうもghc-modeやhlintによるエラーが出ない問題に苦しむ。
    - 2018/01/04: VS CodeでもHaskell IDE Engineを試してみることで、エラーメッセージが明らかになった。[この問題](https://github.com/haskell/haskell-ide-engine/issues/355)と似て、ghc-modのバグを踏んでしまっている模様。ついでに、デバッグログの出し方も明確になった。
- Haskell入門コンテンツ
- [Trees That Grow](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/11/trees-that-grow.pdf)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)

# 2018/01/01 - 2018/01/02

- Haskell開発環境再整備:
    - 2018/01/01: WindowsでのHIEがうまく動いていないらしい。Pythonとの連携でエラーがあるご様子。
    - 2018/01/02: どうも詳しい原因が分からず。
- Haskell入門コンテンツ:
    - 2018/01/01: いきなりゴールデンテストなんて書くもんだから、標準出力と標準エラー出力をテストに使ってしまって、デバッグがしづらい。いずれにしてもデバッグ用のログをどこかに出すよう作った方がよさげ。
    - 2018/01/01: ユーザーが書いたプログラムに間違いがあった場合のエラーの出し方に悩む。標準出力か標準エラー出力か...。
- [Total Haskell is Reasonable Coq](https://arxiv.org/abs/1711.09286)
- [エリック・エヴァンスのドメイン駆動設計 ソフトウェアの核心にある複雑さに立ち向かう](http://www.shoeisha.co.jp/book/detail/9784798121963)
