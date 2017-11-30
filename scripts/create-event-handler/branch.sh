############# 参数解释
# $0
# $1 仓库名字
# $2 仓库版本
# $3 仓库 clone_url
# $4 webhook 项目的执行目录
############# 参数解释 END
filepath=$(cd `dirname $0`; pwd)
appPath='/app'
cloneUrl=$3
devVersion=$2
devRepository=$1
webhookExecDir=$4

# 该项目是否已经被安装过, 如果没有被安装  从克隆地址将项目克隆下来
if [ ! -d ${appPath} ]; then
    cd /app

    git clone "${cloneUrl}" # 这里的URL必须用双引号包裹
fi

# 进入该项目的目录
cd "${appPath}/${devRepository}"

# 在该项目目录下面指定 Git 命令来获取该版本的代码
# git
git checkout -b "v${devVersion}"
git pull origin "v${devVersion}"
#git end

# 该命令获取仓库的类型
projectType=`node ${webhookExecDir}/scripts/getConfigFileTypeField.js`

# /www/dev/backend
# /www/dev/frontend
# 获取 ams 的 开发环境路径
devPath="/www/dev/${projectType}"

######### example ########
# /www/dev/backend/webhook
######### example end #######
repositoryDevPath="${devPath}/${devRepository}"

######### example ########
# /www/dev/backend/webhook/6.8.4
######### example end #######
versionDevPath="${devPath}/${devRepository}/${devVersion}"

if [ ! -d "${repositoryDevPath}" ]; then
    mkdir -p "${repositoryDevPath}"
fi

if [ ! -d "${versionDevPath}" ]; then
    mkdir -p "$versionDevPath"
fi

# cp -r /app/webhook/* /www/dev/backend/webhook/6.8.4/
cp -r /app/${devRepository}/* /www/dev/${projectType}/${devRepository}/${devVersion}/
