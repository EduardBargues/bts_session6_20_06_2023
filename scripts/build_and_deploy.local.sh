set -e # VARIABLES MY SCRIPT NEEDS
work_dir=$(pwd)
source "$work_dir/scripts/credentials.sh" # SET AWS CREDENTIALS BY READING FROM A FILE

apps=("get_user" "save_user")
for app_name in "${apps[@]}"
do
  cd "$work_dir/src/$app_name"
    rm -rf "node_modules"
    rm -rf "package-lock.json"
    rm -rf "$app_name.zip"
    rm -rf "$app_name.json"
    npm install # INSTALL DEPENDENCIES
    npm run pack # CREATE LAMBDA PACKAGE
    # UPDATE LAMBDA CODE WITH AWS SDK
    aws lambda update-function-code \
        --function-name $app_name \
        --zip-file "fileb://$work_dir/src/$app_name/$app_name.zip" \
        >> "$work_dir/src/$app_name/$app_name.json"
    rm -rf "node_modules"
    rm -rf "package-lock.json"
    rm -rf "$app_name.zip"
    rm -rf "$app_name.json"
  cd $work_dir
done