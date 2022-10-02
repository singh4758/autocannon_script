#!/bin/bash 

echo "no of records"
read noOfRecords
echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../MongooseAutocannon/bulkInsertNestedUser.js $noOfRecords $noOfRequest $noOfConnection > ../MongooseReport/bulkInsertNestedUser"$(date '+%s')".txt