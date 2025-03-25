function myEach(collection, callback) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < newCollection.length; i++) {
      result.push(callback(newCollection[i]));
    }
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    
    if (acc === undefined) {
      acc = newCollection[0];
      startIndex = 1;
    }
  
    for (let i = startIndex; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i], collection);
    }
    
    return acc;
  }
  
  function myFind(collection, predicate) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) {
        return newCollection[i];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) {
        result.push(newCollection[i]);
      }
    }
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  // Export functions for testing
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
  };
  