#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "no of records per page"
read noOfRecords
echo "request sending start"
echo ""
node ../NativeAutocannon/findAllUser.js $noOfRequest $noOfConnection $noOfRecords > ../NativeReport/findAllUser"$(date '+%s')".txt