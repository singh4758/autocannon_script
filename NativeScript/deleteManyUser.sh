#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "no of records delete in each request"
read noOfRecords
echo "request sending start"
echo ""


rm -rf ../dataGenerated
mkdir ../dataGenerated
cp /home/abhishek/Documents/Myself/script/staticData/*.json /home/abhishek/Documents/Myself/script/dataGenerated

mongorestore --drop --archive="../staticData/Native_Driver"

gnome-terminal --tab --command="bash -c 'endyarnstart() { exec bash; }; trap endyarnstart INT; cd ../../Native_Driver; clinic doctor  --collect-only  --dest ../NestedDoctor/deleteManyUser/deleteManyD${noOfRecords}R${noOfRequest}C${noOfConnection} -- node ./dist/index.js'"

sleep 2


node ../NativeAutocannon/deleteManyUser.js $noOfRequest $noOfConnection $noOfRecords > ../NativeReport/deleteManyUser"D${noOfRecords}R${noOfRequest}C${noOfConnection} $(date '+%s')".txt