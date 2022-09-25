#!/bin/bash 

echo "no of records"
read noOfRecords
echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../NativeAutocannon/insertManyUsers.js $noOfRecords $noOfRequest $noOfConnection > ../NativeReport/insertManyUsers"$(date '+%s')".txt