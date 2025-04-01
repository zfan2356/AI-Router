deploy:
	pre-commit run --all-files
	sh docs/.vuepress/deploy.sh
	git add .
	git commit -m "add"
	git push origin main
