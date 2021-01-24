cd $(dirname $0)
mkdir -p ./src/generated
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/generated ./api/nhentai.proto
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/generated ./api/konachan.proto
