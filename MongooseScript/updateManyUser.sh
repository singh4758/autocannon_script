#!/bin/bash 

echo "no of records"
read noOfRecords
echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../MongooseAutocannon/updateManyUser.js $noOfRecords $noOfRequest $noOfConnection > ../MongooseReport/updateManyUser"$(date '+%s')".txt