#!/bin/bash 

rm -rf dataGenerated NativeReport MongooseReport staticData node_modules package-lock.json

mkdir dataGenerated NativeReport MongooseReport
tar -xf staticData.tar.xz

npm i
