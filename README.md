<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。
実際にコミットした日と日記の日付が必ずしも一致しない点はご容赦を。

# 2016/11/03

- HaskellのIOを説明する話続きをちょっとだけ。

# 2016/11/02

- HaskellのIOを説明する話続きをちょっとだけ。
- タイプセーフプリキュアの続きをちょっとだけ。

# 2016/10/31 - 2016/11/01

タイプセーフプリキュアの続き。

# 2016/10/30

- 第35回Haskellもくもく会にて、前からほしかった画像とかのコレクションを作り始めた。
    - haskell-relational-recordを使ったところ、幸運にも（？）バグが見つかったので[pull requestを送った](https://github.com/khibino/haskell-relational-record/pull/48)。
- HaskellのIOを説明する話続きをちょっとだけ。

# 2016/10/29

タイプセーフプリキュアの続き。

[【ファン迷惑】「響け！ユーフォニアム」という文字列だけで遊ぶシェル芸人達 - Togetterまとめ](http://togetter.com/li/1041621#c3187664)というまとめにHaskell版を載せるためにちょっと頑張った。以下がなんのひねりもない私のバージョン。

```haskell
ghc -e 'let s = "響け！ユーフォニアム" in mapM_ putStrLn $ take (length s) $ iterate (\(c:t) -> t ++ [c]) s'
```

その後に、[notogawaさんがもっと短いのを送ってきた...](https://twitter.com/notogawa/status/792258940197273600)。ぜんぜん読めん...。

```haskell
ghc -e '(\s->mapM_ putStrLn$init$scanr((init.).(:))s s)"響け！ユーフォニアム"'
```

# 2016/10/24 - 2016/10/28

- HaskellのIOを説明する話続きをちょっとだけ。
- タイプセーフプリキュアの続きをちょっとだけ。

# 2016/10/23

- タイプセーフプリキュアの続き。魔法つかいプリキュア！の実装が大分できてきた。

# 2016/10/22

- HaskellのIOを説明する話続きをちょっとだけ。
- タイプセーフプリキュアの続きをちょっとだけ。
- 久々にyes-precure5-commandのリポジトリーを眺めていたら、[細かい間違いを見つけてしまったので修正してリリース](https://github.com/igrep/yes-precure5-command/commit/10f1d674bbb5da3e6a53676b47a905e30e27eb51)

# 2016/10/21

タイプセーフプリキュアの続きをちょっとだけ。

# 2016/10/17 - 2016/10/20

タイプセーフプリキュアの続きとHaskellのIOを説明する話続きをちょっとだけ。  
タイプセーフプリキュアをTemplate HaskellでリファクタリングしようとしたらStage restrictionなる制限にハマるハマる。悩ましい。

# 2016/10/16

タイプセーフプリキュアの続き。

# 2016/10/15

- HaskellのIOを説明する話続きをちょっとだけ。
- [Itamaeにしょぼいバグが見つかったので報告](https://github.com/itamae-kitchen/itamae/issues/225)

# 2016/10/11 - 2016/10/14

タイプセーフプリキュアの続きとHaskellのIOを説明する話続きをちょっとだけ。

# 2016/10/10

- HaskellのIOを説明する話のサンプルコードを書いて動作を確認してた。

# 2016/10/09

- タイプセーフプリキュアの続き。
- GHCJSに挑戦。 https://github.com/luite/ghcjs-dom-hello を元に挑戦するも、アップロードされているGHCJSが依存関係の衝突でビルドできず。あれこれ手を招いて https://docs.haskellstack.org/en/stable/ghcjs/ に書いてあるlts-6.20を使った方に書き換えたらやっとビルドできた。超時間かかったのでそこで力尽きた。

# 2016/10/07 - 2016/10/08

タイプセーフプリキュアの続きとHaskellのIOを説明する話続き。

# 2016/10/05 - 2016/10/06

タイプセーフプリキュアの続きとHaskellのIOを説明する話続きをちょっとだけ。

# 2016/10/04

HaskellのIOを説明する話続き。

# 2016/10/03

タイプセーフプリキュアの続きとHaskellのIOを説明する話続き。

# 2016/10/02

ほとんど何もする気が起きなかったが、夜になってタイプセーフプリキュアを進めた。

# 2016/09/30 - 2016/10/01

HaskellのIOを説明する話続き。

# 2016/09/26 - 2016/09/29

タイプセーフプリキュアの続きとHaskellのIOを説明する話続き。

# 2016/09/25

タイプセーフプリキュアの続き。  
魔法つかいプリキュア！の実装がだんだん見えてきた。これができればほかもとんとん拍子にいくはず。

# 2016/09/24

JavaでHaskellのIOを解説する記事をまたほんのちょっとだけ進めた。  
全体の構成に悩んでいるとこ。

# 2016/09/23

JavaでHaskellのIOを解説する記事をほんのちょっとだけ進めた。  
引用してるページのURLを埋めたぐらいか…。

# 2016/09/22

CUFP Tutorialに参加。  
Type-level Generic ProgrammingやExtensible Effectsについておおまかな仕組みを理解できた。

タイプセーフプリキュアをちょっとだけ。

# 2016/09/21

ICFP Day 3に参加。  
他は特になく、いつも通りGHCのドキュメント読んだだけ。

# 2016/09/19 - 2016/09/20

ICFPに参加。

引き続きタイプセーフプリキュアやJavaでHaskellのIOを解説する記事をちょっと進めたり。

# 2016/09/18

昨日のHaskell Dayのまとめを書いたり、タイプセーフプリキュアやJavaでHaskellのIOを解説する記事をちょっと進めたり。

# 2016/09/17

- [Haskell Day 2016](http://connpass.com/event/37892/)で[発表](http://the.igreque.info/slides/2016/09/17-stack-docker-integration.html)
- JavaでHaskellのIOを解説する記事開始。

# 2016/09/13 - 2016/09/16

- Haskell Day 2016の発表資料、訂正したりリハーサルしたり。
- GHCのドキュメント引き続き読んでる。

# 2016/09/12

- Haskell Day 2016の発表資料、これでOKなはず。読み返しながら細かいところをもっと直すかもしれないけど。
- 「タイプセーフプリキュア！」作成開始。

# 2016/09/11

Haskell Day 2016の発表資料作成中。  
もう少しで完成。

# 2016/09/10

Haskell Day 2016の発表資料作成中。  
emojiを入れてみようか悩んで悩んで結局顔文字に変えたり、細かいところを修正したり、デモを1からやって成功させたり。  
後は日本語の注釈をすべてに入れたら完成。

# 2016/09/10

Haskell Day 2016の発表資料作成、のつもりが自宅からPCにアクセスするための設定の続きをチョットやったり、前からやりたかった、仮想マシンを起動したら自動的にターミナルなどを起動する件をやりたくなったので実験してた。

# 2016/09/05 - 2016/09/09

Haskell Day 2016の発表資料作成中。

# 2016/09/04

Haskell Day 2016の発表資料作成中。  
デモで使うアプリケーションを試しに動かしたりしてた。  
なぜかコンテナ側でのstackのインストールがうまくいかない...。

# 2016/09/03

自宅においた自分の高速なPCにVPSを経由してsshでアクセスするために、あれこれ整備。  
Dynamic DNSを使わない、ちょっと代わった方法を考えたのでそのうち方法を公開するかも。

タイプセーフプリキュアの作成に向け、最近はGHCのドキュメントをまた読んでる。  
あと、興味本位でアセンブリーやリバースエンジニアリング関連の本をちょっとずつ読んでる。

# 2016/09/01 - 2016/09/02

Haskell Day 2016の発表資料作成中。
