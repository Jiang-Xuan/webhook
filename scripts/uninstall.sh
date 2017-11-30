echo "################################
#
# @author jiangxuan
# @email 645762213@qq.com
# @github https://github.com/Jiang-Xuan
# @desc init webhook
#
################################"

echo "移除 /app /www/dev/frontend /www/prod/backend目录"

if [ -x '/' ];then
    rm -r /app
    rm -r /www/dev/frontend
    rm -r /www/prod/backend
fi

if [ ! -d '/app' ];then
    echo '/app移除成功'
fi

if [ ! -d '/www/dev/frontend' ];then
    echo '/www/dev/frontend移除成功'
fi

if [ ! -d '/www/prod/backend' ];then
    echo '/www/prod/backend移除成功'
fi
