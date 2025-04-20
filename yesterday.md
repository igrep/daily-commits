# 2025/04/14 - 2025/04/20

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/04/14: ここまでのことを本体に楽に適用するため、Claudeの設定。どうやら私が必要なのはavante.nvimというやつらしい
        - 2025/04/15: とりあえずClaude Codeだけでいいんじゃないか、と調べてみたが、Windowsじゃ使えないらしい
            - <https://docs.anthropic.com/ja/docs/agents-and-tools/claude-code/overview>
        - 2025/04/17: 色々悩んでOpenRouterに登録
        - 2025/04/18: avante.nvimの設定修正。安全な環境変数取得のためにkeepassxc-cliの利用を検討。会社との環境差を埋めるのが面倒になってくるねぇ
            - 安全に取得した上でNeovimを起動するスクリプトが必要そうね。簡単にできるなら、まあまたYak shavingになってしまうけどやりたい
        - 2025/04/19:自分で作らなくても良いパッケージがあることが分かったのでソースを軽く読んで試してみたら、動かず。
            - <https://www.npmjs.com/package/keepassxc-browser-cli>
            - <https://pypi.org/project/keepassxc-proxy-client/> の方がいいかなあ？
        - 2025/04/20: Python版、Junieに聞きつつやってたら動いた。もうこれ使ってれば良くない？明日はこれを直すかラップするかして、使いやすくしよう
- 読書など:
    - [実践TLA+](https://www.shoeisha.co.jp/book/detail/9784798169163)
        - 2025/03/25 - 2025/04/20

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/263662e9e4a32a814b3b26dd2dec9ff7930b2926/yesterday.md)
