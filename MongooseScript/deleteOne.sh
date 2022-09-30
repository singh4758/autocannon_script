#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../MongooseAutocannon/deleteOneUser.js $noOfRequest $noOfConnection > ../MongooseReport/deleteOneUser"$(date '+%s')".txt