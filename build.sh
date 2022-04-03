#!/bin/sh

# entrypoint.shはホスト側で作成したファイルなので
# Dockerコンテキストにコピーしても実行できるようにファイル権限を変更
chmod +x ./backend/entrypoint.sh
chmod +x ./frontend/entrypoint.sh

# ビルド実行
docker-compose up -d