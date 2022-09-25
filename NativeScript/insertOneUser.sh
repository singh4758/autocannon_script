#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../NativeAutocannon/insertOneUser.js $noOfRequest $noOfConnection > ../NativeReport/insertOneUser"$(date '+%s')".txt