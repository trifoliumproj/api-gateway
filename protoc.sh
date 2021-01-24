cd $(dirname $0)
mkdir -p ./src/generated
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/generated --ts_proto_opt=nestJs=true ./api/nhentai.proto
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/generated --ts_proto_opt=nestJs=true ./api/konachan.proto
