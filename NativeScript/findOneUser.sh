#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../NativeAutocannon/findOneUser.js $noOfRequest $noOfConnection > ../NativeReport/findOneUser"$(date '+%s')".txt