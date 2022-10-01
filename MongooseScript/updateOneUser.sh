#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../MongooseAutocannon/updateOneUser.js $noOfRequest $noOfConnection > ../MongooseReport/updateOneUser"$(date '+%s')".txt