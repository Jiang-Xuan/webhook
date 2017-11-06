echo "
############## 创建分支 Shell 脚本 ##############
#
#@author jiangxuan
#@date 2017.11.6
#
###############################################
"
function randomId() {
    echo "$(($RANDOM%10))"
}

function deleteBranch() {
    branchName=$1

    git branch -d ${branchName}
    git push origin ":${branchName}"
    echo "### ${branchName}本地分支删除成功, 远程分支删除成功"
}

branchName="v$(randomId).$(randomId).$(randomId)"

echo "生成随机分支名成功, ${branchName}"

git branch ${branchName}

git push origin ${branchName}

echo "### ${branchName}本地分支创建成功, 远程分支PUSH成功 ###"

echo "请选择你接下来想要进行的步骤, 输入你想选择的序号并按下 Enter 键:)"

select action in "删除该测试分支" "留着该分支"
do
    case "$REPLY" in
        1 ) deleteBranch $branchName; break;;
        2 ) echo '保留分支'; break;;
        * ) "无效选项, 试试其他的."; continue;;
    esac
done
