up:
	compose_up
stop:
	compose_stop
clean:
	compose_stop compose_clean

compose_up:
	docker-compose up

compose_stop:
	docker-compose stop

compose_clean:
	docker-compose rm -f

xl-deploy:
	docker-compose run xldeploy

config_gogs:
	curl 'http://192.168.99.100:3000/install' \
	-H 'Origin: null' -H 'Accept-Encoding: gzip, deflate' \
	-H 'Accept-Language: fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4' \
	-H 'Upgrade-Insecure-Requests: 1' \
	-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36' \
	-H 'Content-Type: application/x-www-form-urlencoded' \
	-H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' \
	-H 'Cache-Control: max-age=0' \
	-H 'Cookie: _ga=GA1.1.221947403.1432575239; lang=fr-FR; i_like_gogits=4e8b96e2a97347e0; _csrf=0NHae8OjPYKJ6xiplpZcsUhkwu86MTQ0MTExMTA2MDEyMzQ4ODk0Ng%3D%3D' \
	-H 'Connection: keep-alive' \
	--data 'db_type=MySQL&db_host=mysql%3A3306&db_user=gogs_user&db_passwd=gogspass&db_name=gogs&ssl_mode=disable&db_path=data%2Fgogs.db&app_name=Gogs%3A+Go+Git+Service&repo_root_path=%2Fhome%2Fgit%2Fgogs-repositories&run_user=git&domain=192.168.99.100&ssh_port=22&http_port=3000&app_url=http%3A%2F%2F192.168.99.100%3A3000%2F&smtp_host=&smtp_from=&smtp_email=&smtp_passwd=&admin_name=&admin_passwd=&admin_confirm_passwd=&admin_email=' --compressed