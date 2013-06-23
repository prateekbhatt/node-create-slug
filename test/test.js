var assert = require("assert")
  , slugs = require("../");

describe('node-slugs', function(){

  it('should convert string to lower case', function(){
    assert.equal(slugs('HelloWorld'), 'helloworld');
  });

  it('should replace space with hyphen', function(){
    assert.equal(slugs('hello  world'), 'hello-world');
  });
});