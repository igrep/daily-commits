# 2024/01/08 - 2024/01/14

- custard:
    - [ ] Conjure・vim-sexpの設定・習得
    - アプリケーション作り:
        - [ ] MisskeyかBlueSkyでの発言を保存
            - [ ] 全てを結合するプログラム・スタートアップへの登録
        - [ ] igrep-cashbookのCLI版
            - 2024/01/08: test packageを分割し、`npm run`で`custard`コマンドを呼べるようにした。が、まだ`custard transpile`でエラーが発生する模様。どうやら、transpile時に指定したmoduleにあるmacroを収集するために`import`する件について、またハマっているようだ。今度はどう直すのが正解なんだろう
                - やっぱり、npmパッケージのパス解決を実装するしかないっぽいなぁ。save-postsから`@atproto/api`も見えなくなっているみたいだし
                    - 調べてみたところ、nodeの`--experimental-import-meta-resolve`を有効にすれば、`import.meta.resolve`に私のやりたいことを実現する機能がつきそうだ。やっぱbundlerとかでそういう需要があるんだろうね。あんまりnodeに強く依存したくなかったけど、しゃあないな。どうせ`node:fs`とかバリバリ使ってるし...
            - 2024/01/09: というわけで`import.meta.resolve`を試してみたが、`TypeError: __vite_ssr_import_meta__.resolve is not a function`なるエラーが。またvitestに振り回されるのか...
                - 今度こそvitestを止めるべきなのでは。<https://github.com/vitejs/vite/discussions/14405>見た感じまだサポートするかどうかさえ分からないし
                    - 設定で止められるかもしれない。<https://vitest.dev/config/#server-deps>を読む限り、<https://vitejs.dev/config/ssr-options.html>にある`ssr.external`（あるいは`server.deps.external`）で依存ライブラリーってことにしちゃえばいいのだろうか
                        - 関連: <https://github.com/vitejs/vite/blob/v4.5.1/packages/vite/src/node/ssr/ssrTransform.ts#L35>で関係のある処理をしているようだ。
            - 2024/01/10: `server.deps.external`が効いたようだ。
            - 2024/01/11: 残念ながら、Nodeの`import.meta.resolve`がやっていることは現状普通の`path.resolve`と大差ない、今回は役立たずなものらしい。バグっぽいし直して欲しいし、とりあえずNodeを最新版に上げてまた試してからコミュニティーで聞いてみるか...
            - 2024/01/12: Nodeを最新版に上げてもダメだった。再現ケースを作るために試したところ、普通の依存パッケージについては正しく解決できるっぽい？
            - 2024/01/13: 再現ケースのためのリポジトリーを作った。普通に動くし、やっぱりこちら側の使い方がミスってる予感
            - 2024/01/14: よかったやっぱりこちら側のバグだ。denoみたいに`npm:`プロトコルを実装しようかな。
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
- Haskell入門コンテンツ:
    - [ ] 課題18の不足箇所を埋める
        - <https://github.com/haskell-jp/makeMistakesToLearnHaskell/commit/63b8762252f761db0e0bb99a890830c314fff91a>
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Software Foundations Volume 1 Logical Foundations](https://softwarefoundations.cis.upenn.edu/lf-current/index.html)
        - 2023/08/24 - 2024/01/14

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/dd4f76dd5cfa68a776a641b34c53ce71385628fb/yesterday.md)
