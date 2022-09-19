# 2022/09/12 - 2022/09/18

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [x] `while`
                - 2022/09/13: `while`と`break`を含むテストケース追加
                - 2022/09/14: 実装開始。従来の`base`は`safe`にして`safe`と`iteration/unbounded`をまとめたものを`base`と呼ぼう
                    - 名前空間の整理も含めて実装できた、つもりがなぜか無限ループに
                - 2022/09/15: デバッグのやり方で悩んでいた。`node inspect`コマンドちゃんと動いてなくない？まぁChromeのデバッガー使えばいいんだけど...
                - 2022/09/16: なんかEdgeのデバッガーもうまく動かぬ。なぜか最後に出力された情報しか出ないからprintデバッグもしにくい。他のファイルに書き込んでみるか
                - 2022/09/17: デバッガーがうまく動かなかったのは`eval`の中で無限ループが起きていたかららしい。でもなんか`debugger;`文やブレークポイントも無視されていたような...。ともあれ実装できた
                - 2022/09/18: 昨日実装できた時点の`while`はバグっていた。テストの側が間違っているかと思って修正したら、間違っていたのは実装だった
                    - <https://github.com/igrep/custard/commit/ade99e65ed27cfa15fe7f5db215a8c12e2051a68>
            - [ ] `for`
            - [ ] `forEach`
            - [ ] `redo`
            - [ ] `break`
            - [ ] `continue`
            - [ ] 末尾再帰の最適化
                - よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題15の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - [ ] cabalファイルのパース
        - 先週であったエラーを直すべく、`configure`コマンドがどのようにパラメーターを設定しているか調べてた
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/09/12 - 2022/09/18

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/b6e11b489a99afb51faa70d343130c0f82f505a3/yesterday.md)
