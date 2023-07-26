# 2023/07/24 - 2023/07/30

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/07/24: `transpileModule`が吐き出したコードを無事Data URLとして`import`しようとしたけど、謎の「`Invalid URL`なるエラーに。Data URLの構文自体には問題なさそうだし、多分JSの構文エラーなんだろうけど、ぱっと見わからん
                    - `import {} from ".."`になっているせいかと思いきや、違うっぽいし
                - 2023/07/25: 件の問題とは関係ないだろうけど、`export default`が適切に着けられてないバグを見つけた
                    - 件の問題は、恐らく`data`なのに相対パスで`import`仕様としているからだろうな
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Design 2023年6月号](https://gihyo.jp/magazine/SD/archive/2023/202306)
        - 2023/06/26 - 2023/07/25

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/16d89d7b58b32c2ee4ee536d3febe2918502bb2c/yesterday.md)
