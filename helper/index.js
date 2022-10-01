const fs = require('fs');

const storeId = (ObjectIds, collectionName) => {
  let existingData;
  const pathExists = fs.existsSync(`../dataGenerated/${collectionName}Ids.json`);
  if (pathExists) {
    existingData = fs.readFileSync(`../dataGenerated/${collectionName}Ids.json`, { encoding: "utf-8" });
  }
  const data = existingData ? JSON.parse(existingData) : [];
  const ids = Object.values(ObjectIds);
  data.unshift(...ids);
  fs.writeFileSync(`../dataGenerated/${collectionName}Ids.json`, JSON.stringify(data));
}

const readIdsRemove = (collectionName, noIds) => {
  const pathExists = fs.existsSync(`../dataGenerated/${collectionName}Ids.json`);
  if (!pathExists) {
    return [];
  }
  const ids = JSON.parse(fs.readFileSync(`../dataGenerated/${collectionName}Ids.json`, { encoding: "utf-8" }))
  const extractedIds = ids.splice(0, noIds);
  fs.writeFileSync(`../dataGenerated/${collectionName}Ids.json`, JSON.stringify(ids));
  return extractedIds;
}

const readIds = (collectionName, noIds) => {
  const pathExists = fs.existsSync(`../dataGenerated/${collectionName}Ids.json`);
  if (!pathExists) {
    return [];
  }
  const ids = JSON.parse(fs.readFileSync(`../dataGenerated/${collectionName}Ids.json`, { encoding: "utf-8" }))
  const extractedIds = ids.splice(0, noIds);
  ids.push(...extractedIds);
  fs.writeFileSync(`../dataGenerated/${collectionName}Ids.json`, JSON.stringify(ids));
  return extractedIds;
}

const countIds = (collectionName) => {
  const pathExists = fs.existsSync(`../dataGenerated/${collectionName}Ids.json`);
  if (!pathExists) {
    return 0;
  }
  const ids = JSON.parse(fs.readFileSync(`../dataGenerated/${collectionName}Ids.json`, { encoding: "utf-8" }))
  return ids.length || 0;
}

module.exports = { storeId, readIds, readIdsRemove, countIds };
