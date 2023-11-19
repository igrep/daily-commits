# 2023/11/13 - 2023/11/19

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - 2023/11/13: 一通りできたようなのでtranspileするも、transpilerのバグにハマった模様。先々週実装したdestructuringにまだバグがあるようだ
            - 2023/11/14: 怪しいテストケースを作ってみるも、再現しない。念のため`.js`ファイルもチェックしたけどちゃんと更新されている
            - 2023/11/15: 処理系のバグじゃなかったー！typoだったー！やっぱエラーが発生した場所をちゃんと表示させないと厳しいな...
                - というわけで一通りのtranspile errorを潰して実行。早速ランタイムエラーに。それも多分修正
            - 2023/11/16: また実行時エラーがあったので直して、今度こそできたかな？
                - よく見たら画像の添付がまだできてなかったか
                - 諸々含めてテストするためのpostを作った <https://bsky.app/profile/igreque.info/post/3kebezmzesu2k>
                - 後あれだね、やっぱtranspileしてすぐ実行するコマンドがないと
                    - 多分できた
            - 2023/11/17: 画像の表示機能が多分できた。後は引用ポストかな
            - 2023/11/18: できた、と思って試すも、エスケープがちょっと失敗してる
                - ある程度直したところで、なぜか`text`マクロのバグっぽいものが見つかってしまった
            - 2023/11/19: `text`のバグは単純で、バックスラッシュをエスケープできていないからだった...
                - 今度は連続したスペースでundefinedが（直した）
                - 後は引用ポストのテストか
                    - 余計な`<hr/>`が入ってしまうらしい: 直した
                    - 他の人の引用ポストのテストもできてないな
            - [ ] 未変換のJSONをリストアップするプログラム（.mdファイルのうち日付が最新のものより、新しい .jsonファイルを探す）
            - [ ] JSONを分割するプログラム
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/978f512e00bf661b8804d8dcbfdcd89732c90702>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2023/11/19

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/13a44d41e91f6abf1dfdc0f03e79020e26d5b829/yesterday.md)
