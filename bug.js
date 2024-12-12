```javascript
// Incorrect use of $inc operator for updating nested arrays
db.collection.updateOne({"_id":1},{"$inc":{"nestedArray.0.count":1}});
```