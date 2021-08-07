# 2021/08/02 - 2021/08/08

- [ ] 週刊アスキーへの道
    - [ ] ライブラリーの実装
        - [ ] plug/jackを繋げる処理
            - 2021/08/02: エッジの位置を計算する関数がすべて実装できたつもり。しかし動かぬ。
            - 2021/08/03: 動かない原因はエッジの`line`要素の位置がおかしいからだった。半分修正。
            - 2021/08/04: 修正できたはず、と思いきや、まだうまく行かず。なぜかエッジが動かなくなる瞬間がある
                - どうやら、マウスポインターがvertexの上を通っているときでないとエッジが動かないらしい
            - 2021/08/05: 何の仕様か、どうも`verton-garage`要素を直接`mouseover`しているときには`pointermove`イベントが発生していないらしい。そしてなぜか`verton-vertex`ではちゃんと発生する。`.edge`に`pointer-events: none`を適用しているせいかと思いきやそれも関係ない
                - <https://pm.dartus.fr/blog/a-complete-guide-on-shadow-dom-and-event-propagation/> が関係している？
            - 2021/08/06: 昨日見つけた記事を読んだ。ちょっと関係しているっぽい。
            - [ ] 繋げたエッジも動かす処理
        - [ ] ノードを動かした時のz-indexの制御
        - [ ] エッジの削除
        - [ ] ノードの削除
        - [ ] ノードのパラメーター: 定数ノードの設定方法など
        - [ ] 初期位置のレイアウト
        - [ ] serialize/deserialize
        - [ ] document
    - [ ] 企画の実装
- Haskell入門コンテンツ:
    - [ ] 課題12の不足箇所を埋める
        - 2021/08/07: 少し進めた
- [ ] Slack-logの更新 <https://github.com/haskell-jp/slack-log/issues/50>
- 読書など:
    - [The Art of WebAssembly](https://nostarch.com/art-webassembly)
        - 2021/08/02 - 2021/08/06
    - The Implementation of Functional Programming Languages
        - 後回し

------

- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
    - cabalファイル内の（other-modulesも含む）すべてのモジュールを`:r`でリロードできる状態にする
- [ ] ブログとQiitaに同時投稿するのをサポートするツール

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/1403391eae0792ebfd3625e9ce2f0222a2f5ab7e/yesterday.md)
