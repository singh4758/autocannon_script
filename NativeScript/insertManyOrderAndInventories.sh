#!/bin/bash 

echo "no of records"
read noOfRecords
echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../NativeAutocannon/insertManyOrderAndInventories.js $noOfRecords $noOfRequest $noOfConnection > ../NativeReport/insertManyOrderAndInventories"$(date '+%s')".txt