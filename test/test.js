var should = require("should")
  , makeSlug = require("../");

describe('node-slugs', function(){

  it('should convert numbers to string', function(){
    should.equal(makeSlug(4242), '4242');
  });

  it('should convert string to lower case', function(){
    should.equal(makeSlug('HeLLoWorld'), 'helloworld');
  });

  it('should trim any spaces at the beginning of the string', function(){
    should.equal(makeSlug('   hello-world'), 'hello-world');
  });

  it('should trim any spaces at the end of the string', function(){
    should.equal(makeSlug('hello-world    '), 'hello-world');
  });

  it('should replace spaces in the middle with hyphens', function(){
    should.equal(makeSlug('hello  world    4242'), 'hello-world-4242');
  });

});