#!/bin/bash 

echo "no of records"
read noOfRecords
echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../MongooseAutocannon/insertManyUser.js $noOfRecords $noOfRequest $noOfConnection > ../MongooseReport/insertManyUser"$(date '+%s')".txt