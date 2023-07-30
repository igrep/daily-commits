# 2023/07/24 - 2023/07/30

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/07/24: `transpileModule`が吐き出したコードを無事Data URLとして`import`しようとしたけど、謎の「`Invalid URL`なるエラーに。Data URLの構文自体には問題なさそうだし、多分JSの構文エラーなんだろうけど、ぱっと見わからん
                    - `import {} from ".."`になっているせいかと思いきや、違うっぽいし
                - 2023/07/25: 件の問題とは関係ないだろうけど、`export default`が適切に着けられてないバグを見つけた
                    - 件の問題は、恐らく`data`なのに相対パスで`import`仕様としているからだろうな
                - 2023/07/26: `export default`の問題を直した
                    - 例の問題はビンゴだった: <https://twitter.com/igrep/status/1684107002514116608>
                    - 例の問題回避のためにファイル名を生成するモジュールを作成開始
                - 2023/07/27: ファイル名を生成するモジュール作り
                - 2023/07/28: 昨日までに作ったモジュールを使ってテストの修正を少し
                - 2023/07/29: meta.testを通せた。でも残りのテストの失敗理由がようわからんな...。lib/baseとlib/commonの循環依存だろうか。でもなんでここで...？
                    - `lib/common.ts`における循環importをほどいたらテストが通った。やっぱりそうだったか
                    - しかしそのループにはまりそうなテストは他にいくらでもあるのに、全くハマらないのはなんでだろう。もしかして素のNode.jsとviteとで循環importの取り扱いが違うんだろうか。多分他のケースはworkerでimportしてるから、って気がするんだよな
                - 2023/07/30: テスト全部通せたのでリファクタリングしてる
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/e56e4c605d2348cb0299299aabc4f40c8d2b86b0>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Design 2023年6月号](https://gihyo.jp/magazine/SD/archive/2023/202306)
        - 2023/06/26 - 2023/07/23
    - [Software Design 2023年7月号](https://gihyo.jp/magazine/SD/archive/2023/202307)
        - 2023/07/24 - 2023/07/30

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/16d89d7b58b32c2ee4ee536d3febe2918502bb2c/yesterday.md)
