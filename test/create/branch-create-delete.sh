echo "
############## 创建分支 Shell 脚本 ##############
#
#@author jiangxuan
#@date 2017.11.6
#
###############################################
"
function randomId() {
    echo "$(($RANDOM%4))"
}

branchName="v$(randomId).$(randomId).$(randomId)"

git branch ${branchName}

git push origin ${branchName}

echo "### ${branchName}本地分支创建成功, 远程分支PUSH成功 ###"

sleep 30

wait $!

git branch -d ${branchName}

git push origin ":${branchName}"

echo "### ${branchName}本地分支删除成功, 远程分支删除成功"
