# Makefile

# デプロイ前にビルドを行う
deploy:
	npm run build
	firebase deploy

# テストを実行するターゲット
test:
	npm run test