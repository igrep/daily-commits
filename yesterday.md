# 2026/02/23 - 2026/03/01

- custard:
    - [ ] sum-moneyの改善
        - 設計:
            - 日付にマッチする行を返す
                - => コメントがマッチする行だけを返す（grepでよさそう）
                    - => 合計のみを出す
                    - => 内訳を出す
        - 2026/02/23 - 2026/02/24: オブジェクトのdestructuring assignmentの実装引き続き。なんだか`assign`の実装がおかしい気がするなぁ。本来なら`transpilingForVariableDeclaration`と同じような構成となるべきなのに、そうなってない。違いは途中途中で`tryToSet`を呼び出すことで、変数が宣言済みかどうかを確認しているだけなんだ。だからコピペしても動くはず
            - `transpilingForVariableDeclaration`では同じスコープで宣言済みかどうかを見る一方、`asign`では`Var`として（親のスコープも含めて）宣言済みかどうかを見るのが違い。
                - と、思ったけど`assign`では代入しようとしている変数が`canBePseudoTopLevel`であるかどうかも見ている。だからJSのdestructuring assignmentを直接使わないで実装してるのか
        - 2026/02/25: 昨日分かったことを`assign`のコメントにも書いておき、オブジェクトのdestructuring assignmentの実装がとりあえずできた。まだテストがめっちゃ落ちるけど
- 読書など:
    - [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch)
        - 2026/02/01 - 2026/02/25

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/c8f22c5741db84de73d6a1789d850aa47658448a/yesterday.md)
