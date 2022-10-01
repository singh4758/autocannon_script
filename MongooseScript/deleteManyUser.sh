#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "no of records delete in each request"
read noOfRecords
echo "request sending start"
echo ""
node ../MongooseAutocannon/deleteManyUser.js $noOfRequest $noOfConnection $noOfRecords > ../MongooseReport/deleteManyUser"$(date '+%s')".txt