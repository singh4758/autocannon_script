#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""
node ../NativeAutocannon/deleteOneUser.js $noOfRequest $noOfConnection > ../NativeReport/deleteOneUser"$(date '+%s')".txt