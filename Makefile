deploy:
	git add .
	git commit -m "add"
	git push origin main
	sh docs/.vuepress/deploy.sh