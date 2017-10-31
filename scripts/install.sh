echo "################################
#
# @author jiangxuan
# @email 645762213@qq.com
# @github https://github.com/Jiang-Xuan
# @desc init webhook
#
################################"

echo "创建 /app /www/dev /www/prod目录"

if [ -x '/' ];then
    mkdir /app
    mkdir -p /www/dev
    mkdir -p /www/prod
fi

if [ -d '/app' ];then
    echo '/app目录创建成功'
fi

if [ -d '/www/dev' ];then
    echo '/www/dev目录创建成功'
fi

if [ -d '/www/prod' ];then
    echo '/www/prod目录创建成功'
fi
