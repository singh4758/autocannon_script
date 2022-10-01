#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../MongooseAutocannon/insertOneNestedUser.js $noOfRequest $noOfConnection > ../MongooseReport/insertOneNestedUser"$(date '+%s')".txt