#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../NativeAutocannon/updateOneUser.js $noOfRequest $noOfConnection > ../NativeReport/updateOneUser"$(date '+%s')".txt