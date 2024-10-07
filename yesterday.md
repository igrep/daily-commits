# 2024/10/07 - 2024/10/13

- custard:
    - [ ] とりあえず <https://github.com/kanaka/mal> を参考にStep 8までTypeScriptでやる
        - [ ] Step 8: Macros <https://github.com/kanaka/mal/blob/master/process/guide.md#step-8-macros>
            - 2024/10/07: メモリー消費量が少なそうな方法とか先週までに色々考えたけど、やっぱりもっとシンプルな方法でよくないか？どうしても変更料めっちゃ増えちゃうし...。ってことで、概ね当初の設計に戻すような感じに
                - 後は入力の`Block`をどうやって`transpileExpression`で見えるようにするか: 冷静に考えたら`TranspileState`のmoduleはpublicなAPIでは隠蔽されているんだから、entry pointである`transpileModule`関数で作ってしまえばいいんだ
- 読書など:
    - [効率的なGo](https://www.oreilly.co.jp//books/9784814400539/)
        - 2024/08/26 - 2024/10/07

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/5d95cbe9ab769eb795a51a48a2e9b58b8880f38c/yesterday.md)
