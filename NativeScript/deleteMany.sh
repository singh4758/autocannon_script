#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "no of records delete in each request"
read noOfRecords
echo "request sending start"
echo ""
node ../NativeAutocannon/deleteManyUser.js $noOfRequest $noOfConnection $noOfRecords > ../NativeReport/deleteManyUser"$(date '+%s')".txt