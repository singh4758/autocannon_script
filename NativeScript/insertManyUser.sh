#!/bin/bash 

echo "no of records"
read noOfRecords
echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../NativeAutocannon/insertManyUser.js $noOfRecords $noOfRequest $noOfConnection > ../NativeReport/insertManyUser"$(date '+%s')".txt