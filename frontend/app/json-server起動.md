# json-server起動方法
json-server は手軽に REST API のモックサーバーを作ることのできるパッケージです。
1	"npm install json-server --save" でローカルにjson-server をインストールします。
2	package.jsonを確認し、"scripts"の中に"json-server"があることを確認します。スクリプトの中に"--watch db.json"が記載されていることを追加で確認します。
3	"npm run json-server" を実行します。ターミナルに"Watching..."が表示されればモックサーバーの起動は成功です。
4	モックサーバーはdb.jsonに記載されているデータをレスポンスデータとしています。Watchingであれば、db.jsonが変化するとレスポンスデータが変更されます。


