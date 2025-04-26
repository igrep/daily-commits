# 2025/04/21 - 2025/04/27

- custard:
    - [ ] replで複数行を扱えるように
        - 2025/04/21: `keepassxc_proxy_client`を修正
        - 2025/04/22 - 2025/04/25: `keepassxc_proxy_client`を運用フローに取り込むために設定変更
        - 2025/04/26: `keepass_proxy_client`を運用フローに取り込むために設定変更。
            - 名前を`keepassxc-env`に変えた。KeePassXCの挙動を見ていると、URL毎にkeepassxc_proxyからのアクセスに許可を与えるかどうか尋ねてくるので、`keepassxc-env://`として新しいURLスキームを作成することで、ブラウザーからのアクセスとの区別をつけることにした。
            - 後はvimのラッパーを書くだけ
- 読書など:
    - [実践TLA+](https://www.shoeisha.co.jp/book/detail/9784798169163)
        - 2025/03/25 - 2025/04/26

[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/51bf3da3a46620d40d52e70eae25512338abe71b/yesterday.md)
