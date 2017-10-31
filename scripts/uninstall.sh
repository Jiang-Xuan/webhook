echo "################################
#
# @author jiangxuan
# @email 645762213@qq.com
# @github https://github.com/Jiang-Xuan
# @desc init webhook
#
################################"

echo "移除 /app /www/dev /www/prod目录"

if [ -x '/' ];then
    rm -r /app
    rm -r /www/dev
    rm -r /www/prod
fi

if [ ! -d '/app' ];then
    echo '/app移除成功'
fi

if [ ! -d '/www/dev' ];then
    echo '/www/dev移除成功'
fi

if [ ! -d '/www/prod' ];then
    echo '/www/prod移除成功'
fi
