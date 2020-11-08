#!/bin/bash

set -eu

last_week_commit="$(git log --format=format:%H -1 yesterday.md)"

sed -i -e "s|^\[先週の記録はこちら\](.*)$|[先週の記録はこちら](https://github.com/igrep/daily-commits/blob/$last_week_commit/yesterday.md)|" yesterday.md
