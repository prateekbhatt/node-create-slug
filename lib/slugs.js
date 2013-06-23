module.exports = function (text) {
  var slug = text.toString().toLowerCase()
              .replace(/\s+/g, '-');

  return slug;
};