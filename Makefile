deploy:
	sh docs/.vuepress/deploy.sh
	git add .
	git commit -m "add"
	git push origin main

deployv2:
	sh ai-router-v2/docs/.vuepress/deploy.sh
	git add .
	git commit -m "add"
	git push origin main
