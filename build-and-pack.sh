# ./build-npm-package.sh
cd npx-cli
out_file=$(npm pack | tail -n 1)
mv "$out_file" vibe-kanban.tgz
