FROM websphere-liberty:webProfile7

RUN apt-get update && apt-get install -y openssh-server
RUN mkdir /var/run/sshd && \
    echo 'root:xldeploy' | chpasswd

ENV USER xldeploy
RUN adduser --disabled-password --gecos "" $USER && \
    adduser $USER sudo

ADD ./sources/id_rsa.pub /home/$USER/.ssh/authorized_keys
RUN chown $USER /home/$USER/.ssh/authorized_keys && \
    chown -R $USER:$USER /home/$USER/.ssh/authorized_keys &&\
    chmod 700 /home/$USER/.ssh/authorized_keys

CMD    ["/usr/sbin/sshd", "-D"]

# SSH login fix. Otherwise user is kicked off after login

RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"

RUN echo "export VISIBLE=now" >> /etc/profile

ENV LICENSE accept

EXPOSE 22

RUN ["/usr/sbin/sshd"]