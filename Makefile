help:
	@echo "mkdocs_gh"
	@echo "mkdocs_local"
mkdocs_gh:
	mkdocs gh-deploy
	sudo rm -r site
mkdocs_local:
	mkdocs serve
