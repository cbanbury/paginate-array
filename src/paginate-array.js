export default (collection, page = 1, numItems = 10, labels) => {
  if( !Array.isArray(collection) ) {
    throw `Expect array and got ${typeof collection}`;
  }
  const currentPage = parseInt(page);
  const perPage = parseInt(numItems);
  const offset = (page - 1) * perPage;
  const paginatedItems = collection.slice(offset, offset + perPage);

  var res = {
    currentPage,
    perPage,
    total: collection.length,
    totalPages: Math.ceil(collection.length / perPage),
    data: paginatedItems
  };

  if (labels) {
    var keys = Object.keys(res);
    keys.forEach((item)=>{
      if (labels[item]) {
        var temp = res[item];
        delete res[item];
  
        var newKey = labels[item];
        res[newKey] = temp;
      }
    })
  }
  return res;
}
