const Browser = require('zombie')

Browser.localhost('example.com', 3000);

describe('Users can post a peep', function(){
  const browser = new Browser();

  before(function(){
    return browser.visit('/peeps/new');
  });

  describe('submits form', function(){

    before(function(){
      browser
        .fill('message', 'Hello World')
      return browser.pressButton('peep')
    });

    it('should be successful', function(){
      browser.assert.success();
    });
    //
    // it('should see welcome page', function(){
    //   browser.assert.text('title', 'Welcome to Chitter');
    // });
  });

});
