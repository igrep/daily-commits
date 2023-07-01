# 2023/06/26 - 2023/07/02

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
                - 2023/06/26: ようやく`module.ts`の箇所以外を直せた
                - 2023/06/27: 型チェック通せた
                - 2023/06/28 - 2023/06/29: ちょっとバグ修正
                - 2023/06/30: ここまでのバグを直してテストを通せた
                - 2023/07/01: ここまでの変更をgit commitし、次の設計を考えた
                    - やっぱり`import`と普通のソースを一緒に`Writer`の戻り値にして組み立てるのは失敗だったかも。単純にオーバーキルではないかって気はする
                    - それはそれとして、`builtinModulePaths`のモジュールはどうやって`import`させたものか
- Haskell入門コンテンツ:
    - [ ] 課題17の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Design 2023年6月号](https://gihyo.jp/magazine/SD/archive/2023/202306)
        - 2023/06/26 - 2023/07/01

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/7a64dc04abf28d5df96f32b07c59b6462e5be299/yesterday.md)
