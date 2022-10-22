module.exports = (requests, context) => {
  const { noOfData, noOfInnerData } = context;
  const page = parseInt(Math.random() * (500000/noOfData))+1;
  requests.path = `/api/test-lookup/populate?page=${page}&limit=${noOfData}&lookUpLimit=${noOfInnerData}`;
  return requests;
}