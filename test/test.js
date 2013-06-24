var assert = require("assert")
  , makeSlug = require("../");

describe('node-slugs', function(){

  it('should convert numbers to string', function(){
    var slug = makeSlug(4242);
    assert.equal(slug, '4242');
  });

  it('should convert string to lower case', function(){
    assert.equal(makeSlug('HeLLoWorld'), 'helloworld');
  });

  it('should trim any spaces at the beginning of the string', function(){
    assert.equal(makeSlug('   hello-world'), 'hello-world');
  });

  it('should trim any spaces at the end of the string', function(){
    assert.equal(makeSlug('hello-world    '), 'hello-world');
  });

  it('should replace spaces in the middle with hyphens', function(){
    assert.equal(makeSlug('hello  world    4242'), 'hello-world-4242');
  });

});