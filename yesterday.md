# 2025/11/17 - 2025/11/23

- custard:
    - [ ] Tampermonkeyのスクリプト作成1
        - 2025/11/17: 昨日のJSConf JPを受けてpnpmをインストールしようと試みるが、custardに導入するのはちょっと時間かかりそう。個人用User scriptのリポジトリーで移行できたっぽい
        - 2025/11/18: Gmailの添付ファイルを取得する処理の実装
        - 2025/11/19: 動かしてみようとしたところで、何故か`make`の時に`RuntimeModuleEmissionValues`が見つからないと言われて`custard`コマンドが実行できない。パッケージの中を見た感じものはあるので、どうも古いバージョンをどこかで参照してしまっているように見える
            - `@custard-lang/command`で依存している`@custard-lang/processor`のバージョンが古いのが原因だった。やはり https://pnpm.io/ja/workspaces に移行するべきだね
        - 2025/11/20: 脱線になってしまうが、前からやろうと思っていたClipboardTextListenerを動かしてWSL2の`clip.exe`を使わないでWSL2のNeovimからWindowsのクリップボードにアクセスできるようにする仕組みを作った
- 読書など:
    - [アンダースタンディング コンピュテーション](https://www.oreilly.co.jp/books/9784873116976/)
        - 2025/11/01 - 2025/11/20

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/bfbb324dee6687a8fb726d697713e3d4888178ad/yesterday.md)
