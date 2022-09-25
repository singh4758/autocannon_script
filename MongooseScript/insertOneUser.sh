#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../MongooseAutocannon/insertOneUser.js $noOfRequest $noOfConnection > ../MongooseAutocannon/insertOneUser"$(date '+%s')".txt