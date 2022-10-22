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

mongorestore --drop --archive="../staticData/Mongoose_ODM"

gnome-terminal --tab --command="bash -c 'endyarnstart() { exec bash; }; trap endyarnstart INT; cd ../../Mongoose_ODM; clinic doctor  --collect-only  --dest ../MongooseDoctor/findOneUser/findOneD1R${noOfRequest}C${noOfConnection} -- node ./dist/index.js'"

sleep 2

node ../MongooseAutocannon/findOneUser.js $noOfRequest $noOfConnection > ../MongooseReport/findOneUser"D${noOfRecords}R${noOfRequest}C${noOfConnection} $(date '+%s')".txt