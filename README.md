<!--
Execute this vim command to push updates of this file:

:w | !bash -c 'git add README.md ; git commit -m"update" ; git push'
-->

# daily-commits

GitHubのPublic Contribution Mapをどうしても途切れさせたくないために、毎日、OSSに何らかの形で寄与するか、何かしら技術を磨いたりブログ書いたりしたら更新する。

# 2018/01/06 までの目標

- Haskell開発環境再整備
    - Haskell IDE EngineをWindowsでも動かす
- Haskell入門コンテンツ
    - 1つめの課題に対する分析のテスト
    - 2つめの課題まで作成

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
