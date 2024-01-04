# 2024/01/01 - 2024/01/07

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [ ] 全てを結合するプログラム・スタートアップへの登録
        - [ ] igrep-cashbookのCLI版
            - 2024/01/01:
                - と、思ったけど時間もなくなってきたし、`or`も`any`も一旦2引数のままで
                    - 実装できた
                - monorepo化（正確にはパッケージの分割と`npm workspace`の使用）に着手
            - 2024/01/02: monorepo化むずい。processorとlibraryを分離するのは無理にやらなくていいか...。諦めよう
                - 一通りできたつもりだけど、tscが意図通りに.jsファイルを吐いてくれないな
            - 2024/01/03: <https://skysan87.hatenablog.com/entry/2023/06/06/013501>の修正で問題が直ったかと思いきや、なぜかtscとtypescript-language-serverとで挙動が異なり、tscを呼び出した場合は`command`パッケージから`processor`パッケージが見えていないらしい。tscなどのバージョンを上げたら直るかと思ってやってみたが、現象変わらず。
            - 2024/01/04: typescript-language-serverでも同じ問題に出くわすようになってしまった。exampleを見るに、多分package.jsonのexportsじゃなくてmainを使うしかないんだろうな
                - mainだけにしてみたが、ちょっと動作が安定しない。rootでtscを実行したとき`processor`パッケージが何も出力されず、一旦`cd`してから`tsc`しないとダメらしい
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2024/01/04

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2abf09ab8d8085a14ddf4323b9d4b1523e3794f1/yesterday.md)
