#!/bin/bash 

echo "no of records"
read noOfRecords
echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../MongooseAutocannon/insertManyNestedUser.js $noOfRecords $noOfRequest $noOfConnection > ../MongooseReport/insertManyNestedUser"$(date '+%s')".txt