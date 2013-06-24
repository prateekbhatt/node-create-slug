module.exports = function slugs (text) {
  var slug = text
              .toString()
              .toLowerCase()
              .replace(/^\s+/, '')
              .replace(/\s+$/, '')
              .replace(/\s+/g, '-');

  return slug;
};