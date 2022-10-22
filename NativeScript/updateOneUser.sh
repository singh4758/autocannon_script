#!/bin/bash 

echo "no of request"
read noOfRequest
echo "no of connection"
read noOfConnection
echo "request sending start"
echo ""


rm -rf ../dataGenerated
mkdir ../dataGenerated
cp /home/abhishek/Documents/Myself/script/staticData/*.js /home/abhishek/Documents/Myself/script/dataGenerated

mongorestore --drop --archive="../staticData/Native_Driver"

gnome-terminal --tab --command="bash -c 'endyarnstart() { exec bash; }; trap endyarnstart INT; cd ../../Native_Driver; clinic doctor  --collect-only  --dest ../NativeDoctor/updateOneUser/insertOneD1R${noOfRequest}C${noOfConnection} -- node ./dist/index.js'"

sleep 2


node ../NativeAutocannon/updateOneUser.js $noOfRequest $noOfConnection > ../NativeReport/updateOneUser"D${noOfRecords}R${noOfRequest}C${noOfConnection} $(date '+%s')".txt