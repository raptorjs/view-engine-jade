'use strict';
var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');

var jadeViewEngine = require('../'); // Load this module just to make sure it works
var viewEngine = require('view-engine');
viewEngine.register('jade', jadeViewEngine, {});

describe('view-engine-jade' , function() {

    beforeEach(function(done) {
        for (var k in require.cache) {
            if (require.cache.hasOwnProperty(k)) {
                delete require.cache[k];
            }
        }
        done();
    });

    it('should render a simple template', function(done) {

        var template = viewEngine.load(require.resolve(nodePath.join(__dirname, 'fixtures/simple.jade')));
        template.render({name: 'Frank', colors: ['red', 'green', 'blue']}, function(err, html) {
            if (err) {
                return done(err);
            }

            expect(html).to.equal("Hello Frank!<ul><li class=\"color\">red</li><li class=\"color\">green</li><li class=\"color\">blue</li></ul>");
            done();
        });
    });


});
