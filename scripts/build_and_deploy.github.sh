set -e
work_dir=$(pwd)

apps=("get_user" "save_user")
for app_name in "${apps[@]}"
do
  cd "$work_dir/src/$app_name"
    npm install
    npm run pack
    aws lambda update-function-code \
        --function-name $app_name \
        --zip-file "fileb://$work_dir/src/$app_name/$app_name.zip" \
        >> "$work_dir/src/$app_name/$app_name.json"
  cd $work_dir
done