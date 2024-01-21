# 2024/01/15 - 2024/01/21

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [ ] 全てを結合するプログラム・スタートアップへの登録
        - [ ] igrep-cashbookのCLI版
            - 2024/01/15: 先週からの問題を直す方法の検討。やっぱり`loadModule`でフルパスを求めるより`env`の`findModule`側で`import.meta.resolve`するのがよいのではなかろうか。これまでもパスの面倒を見ているのはその辺だし
            - 2024/01/16: `findModule`の修正ができたはず
            - 2024/01/17: `findModule`の結果を利用する箇所の修正もできたはず
            - 2024/01/18: 昨日出遭った、`import.meta.resolve`の第2引数がURLの形式になってないと行けない問題を直したところ、無事`resolve`できた。ただ、まだエラーが。修正前に立てたプランが間違っていたようだ。data URIで`import`するコードの中で`import`するときは絶対パスじゃないとダメって前から知ってたじゃん！パッケージのパスでも相対パス扱いなの、よく考えたら分かるだろ！
            - 2024/01/19: 昨日の問題を直せた。でもまだテストは落ちる
            - 2024/01/20: 諸々、新しい仕様に合わせてパスの参照先などを変え、ようやくテストを通せた。明日はコミットしてその次はappsの修正かな
            - 2024/01/21: コミットした。久々にpushだね
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/70a64b253b60c29a91dcb8fad09bc142aeaffe86>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2024/01/21

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/877cc8247c12941c8545f3d88a7fd96e0c3dcf33/yesterday.md)
