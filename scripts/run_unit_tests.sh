set -e
work_dir=$(pwd)

cd "$work_dir/tests/unit"
rm -rf "node_modules"
rm -rf "package-lock.json"
npm install
npm run tst
rm -rf "node_modules"
rm -rf "package-lock.json"