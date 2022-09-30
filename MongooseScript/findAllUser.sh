#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
read noOfRecords
echo "request sending start"
echo ""
node ../MongooseAutocannon/findAllUser.js $noOfRequest $noOfConnection $noOfRecords > ../MongooseReport/findAllUser"$(date '+%s')".txt