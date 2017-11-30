echo "################################
#
# @author jiangxuan
# @email 645762213@qq.com
# @github https://github.com/Jiang-Xuan
# @desc init webhook
#
################################"

echo "创建 /app /www/dev/frontend /www/prod/backend目录"

if [ -x '/' ];then
    mkdir /app
    mkdir -p /www/dev/frontend
    mkdir -p /www/prod/backend
fi

if [ -d '/app' ];then
    echo '/app目录创建成功'
fi

if [ -d '/www/dev/frontend' ];then
    echo '/www/dev/frontend目录创建成功'
fi

if [ -d '/www/prod/backend' ];then
    echo '/www/prod/backend目录创建成功'
fi
