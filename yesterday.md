# 2022/11/21 - 2022/11/27

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にTypeScriptでやる
        - [ ] Step 5の実装
            - [ ] `recursive`
                - 2022/11/21: ここまで env.test.ts に書いたテストをすべて通せた。後は同じようなテストをコピペで作れば完璧
                - 2022/11/22: `referTo`の動作確認ができた。あとは`set`が再帰呼び出しの原因になり得る不正なshadowingをしたときエラーにするテストだけ
                - 2022/11/23: `set`のテストができたはず
                - 2022/11/24: テストの間違いを修正
                - 2022/11/25: `set`の実装に着手
            - [ ] 末尾再帰の最適化
                - [ ] よく考えたら今すぐには必要ないよなぁ。ちょっと挑戦してみて難しそうだったら諦めよう
- Haskell入門コンテンツ:
    - [ ] 課題16の不足箇所を埋める
- [ ] stackからcabal-installに乗り換えて、cabal replで、私がstack replでやっていたことができるか試すチャレンジ
- 読書など:
    - [Modern Compiler Design](https://www.springer.com/jp/book/9781461446989)
        - 2022/11/21 - 2022/11/25

------

- [ ] ブログとQiitaに同時投稿するのをサポートするツール
    - [ ] Zennのサポート
    - [ ] リリース
    - [ ] Qrunchに書いていた記事をZennに

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/2580e30467eef8438154d0b5147a86009180c227/yesterday.md)
