#!/bin/bash

set -euo pipefail

last_week_commit="$(git log --format=format:%H -1 yesterday.md)"
new_yesterday_md="$(node ./prepare-new-week.mjs yesterday.md "$last_week_commit")"
echo "$new_yesterday_md" > yesterday.md
