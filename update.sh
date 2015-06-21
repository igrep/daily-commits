#!/bin/bash

cd `dirname $0`
git add README.md && git commit -m"update" && git push
