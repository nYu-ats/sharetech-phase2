#!/bin/sh

if [ ! -e './app' ]; then
  echo "set up application..."
  npm install -g create-react-app react-router-dom axios styled-components \
  && create-react-app app --template typescript
else
  echo "already set up application"
fi

exec "$@"