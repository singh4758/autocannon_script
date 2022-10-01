#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "no of records per page"
read noOfRecords
echo "no of innerDocs required"
read noOfInnerDocs

echo "request sending start"
echo ""
node ../NativeAutocannon/orderAndInventoriesLookUp.js $noOfRequest $noOfConnection $noOfRecords $noOfInnerDocs> ../NativeReport/orderAndInventoriesLookUp"$(date '+%s')".txt