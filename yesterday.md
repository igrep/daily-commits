# 2023/01/30 - 2023/02/05

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 6
            - [ ] `importJs`:
                - [ ] `fs/promises`の関数を呼べるように
                - [ ] globalの関数を呼べるように
            - [ ] `asyncFn`
            - [ ] `asyncScope`
            - [ ] `constAwait`
            - [ ] `readString`, `evaluate`
                - 2023/01/30: とりあえずbase.test.tsを一部修正したけど、Replオブジェクトをテスト間で共有するような工夫をしたいねぇ。都度スレッド作成は重いと思うし...
                    - と、思ったけど実際にどれくらい重いか分からないし、結構重たい修正になりそうだし、ひとまずテスト終了後にスレッドが残っちゃうのを防ぐような実装に変えた
                - 2023/01/31:
                    - internal/env.test.ts についてまだテストが落ちていたので修正
                    - 新しい仕様に移行できたはずの eval/base.test.ts の調査中。もしかしてログファイルはスレッドごとに書き出さないとダメかー
                        - ううー、スレッドごとに分けたはずがログファイルに何も書き込まれていないように見えるんだけどなんで...
                - 2023/02/01: なぜか何をしても出力が一切出ない。多分。`test`関数を実行しようとした時点でなぜかエラーになっているっぽい
                    - 多分、`test`を実行しようとした時点でvitestが`postMessage`していて、その`postMessage`するオブジェクトになぜか関数が混ざってしまっている模様
                - 2023/02/02: とりあえずvitestを更新したり再現ケースの最小化にチャレンジしたり
                    - と思ったらvitest更新できてない！npmの使い方間違ってる！
                - 2023/02/03: npm-check-update でvitestなどを更新。件のエラーは相変わらず発生するものの、より詳細になった
            - [ ] コマンドライン引数で指定したプログラムを評価できるようにする
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- [ ] 個人用URL修正bookmarkletのプロジェクト
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2023/01/30 - 2023/02/03

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/e998db763b6afb7ad3a92b7e90b181989cdb5ad8/yesterday.md)
