const Browser = require('zombie')

Browser.localhost('example.com', 3000);

describe('Users can visit the sign up page', function(){
  const browser = new Browser();

  before(function(){
    return browser.visit('/signup');
  });

  describe('submits form', function(){

    before(function(){
      browser
        .fill('email', 'zombie@example.com')
        .fill('password', 'password')
      return browser.pressButton('Sign me up!')
    });

    it('should be successful', function(){
      browser.assert.success();
    });

    it('should see welcome page', function(){
      browser.assert.text('title', 'Welcome to Chitter');
    });
  });

});
