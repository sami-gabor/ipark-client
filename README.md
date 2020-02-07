`yum -y update`
`yum -y groupinstall "Development Tools"`
yum -y install vim net-tools
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
yum module install nodejs
npm install -g pm2 http-server
    echo "Hello there!" > index.html
    http-server
    
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg
yum -y install yarn

adduser sami
<!-- usermod -aG wheel sami  -->  --> add user as admin
sudo su sami
whoami

cd ~
mkdir .ssh
chmod 700 .ssh
touch .ssh/authorised_keys
chmod 600 .ssh/authorised_keys

cat ~/.ssh/id_rsa.pub


setsebool -P httpd_can_network_connect on
setsebool -P httpd_enable_homedirs on
chcon -Rt httpd_sys_content_t /home/sami/node-app/public

check the state / enable / disable / SELinux
    getenforce
    setenforce 1
    setenforce 0

reat SELinux context (type) of files and processes
    ls -lZ
    ps auxZ


yum install -y epel-release
yum -y install nginx
systemctl start nginx
systemctl status nginx
systemctl enable nginx


cd /etc/nginx/
cp /root/conf.d/samontech.eu.conf .



yum -y install certbot

