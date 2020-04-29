"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (collection) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var numItems = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var labels = arguments[3];

  if (!Array.isArray(collection)) {
    throw "Expect array and got " + (typeof collection === "undefined" ? "undefined" : _typeof(collection));
  }
  var currentPage = parseInt(page);
  var perPage = parseInt(numItems);
  var offset = (page - 1) * perPage;
  var paginatedItems = collection.slice(offset, offset + perPage);

  var res = {
    currentPage: currentPage,
    perPage: perPage,
    total: collection.length,
    totalPages: Math.ceil(collection.length / perPage),
    data: paginatedItems
  };

  if (labels) {
    var keys = Object.keys(res);
    keys.forEach(function (item) {
      if (labels[item]) {
        var temp = res[item];
        delete res[item];

        var newKey = labels[item];
        res[newKey] = temp;
      }
    });
  }
  return res;
};

module.exports = exports["default"];