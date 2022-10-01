#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../NativeAutocannon/insertOneNestedUser.js $noOfRequest $noOfConnection > ../NativeReport/insertOneNestedUser"$(date '+%s')".txt