FROM ubuntu:15.10

MAINTAINER wian vos <wvos@xebia.com>

RUN apt-get update && \
    apt-get clean

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y openjdk-8-jre-headless unzip wget --no-install-recommends  && \
    rm -rf /var/lib/apt/lists/*

ARG version='5.0.0'
ARG download_user
ARG download_password

RUN wget --user=${download_user} \
         --password=${download_password} \
         -q https://dist.xebialabs.com/customer/xl-release/${version}/xl-release-${version}-server.zip \
         -O /tmp/xlr.zip && \
    unzip -q /tmp/xlr.zip -d /opt && \
    rm /tmp/xlr.zip

RUN wget --user=${download_user}\
	     --password=${download_password}\
         -q https://dist.xebialabs.com/customer/licenses/download/v3/xl-release-license.lic \
	     -O /opt/xl-release-${version}-server/conf/xl-release-license.lic

ADD xlrelease.answers /opt/xl-release-${version}-server/bin/xlrelease.answers

WORKDIR /opt/xl-release-${version}-server/bin
RUN ["./server.sh", "-setup", "-reinitialize", "-force", "-setup-defaults", "./bin/xlrelease.answers"]

VOLUME /opt/xl-release-${version}-server/conf
VOLUME /opt/xl-release-${version}-server/ext
VOLUME /opt/xl-release-${version}-server/hotfix
VOLUME /opt/xl-release-${version}-server/importablePackages
VOLUME /opt/xl-release-${version}-server/log
VOLUME /opt/xl-release-${version}-server/plugins
VOLUME /opt/xl-release-${version}-server/repository

EXPOSE 5516

CMD ["./server.sh"]
