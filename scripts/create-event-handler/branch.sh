devPath='/www/dev'
appPath='/app'
devRepository=$1
devVersion=$2

repositoryDevPath="${devPath}/${devRepository}"
versionDevPath="${devPath}/${devRepository}/${devVersion}"
appPath="${appPath}/${devRepository}"

if [ ! -d ${appPath} ]; then
    mkdir /app/${devRepository}
fi

cd ${appPath}

# git
git checkout -b "v${devVersion}"
git pull origin "v${devVersion}"
#git end

if [ ! -d "/www/dev/${devRepository}" ]; then
    mkdir -p /www/dev/${devRepository}
fi

if [ ! -d "/www/dev/${devRepository}/${devVersion}" ]; then
    mkdir -p /www/dev/${devRepository}/${devVersion}
fi

cp -r /app/${devRepository}/* /www/dev/${devRepository}/${devVersion}/
