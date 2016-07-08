var expect = require('chai').expect;
var templateRenderer = require('../app/scripts/template-renderer.js').renderView;

describe('templateRenderer', function() {
  var renderedText;

  beforeEach(function() {
    var object = { list:['one','two'] };
    var template = '{% loop list %}{{ index }}{{ item }}{% endloop %}';
    templateRenderer(object,template, function(data) {
      renderedText = data;
    });
  });
  
  it('Should render a loop block', function() {
    expect(renderedText).to.equal('0one1two');
  });
});
