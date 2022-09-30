#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../MongooseAutocannon/findOneUser.js $noOfRequest $noOfConnection > ../MongooseReport/findOneUser"$(date '+%s')".txt