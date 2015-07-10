var assert = require('assert');
var load = require('./lib/load_images');
var ImageMSE = require('../index');

describe('ImageMSE module', function(){
    it('should compare different images', function(done) {
        load('./test/images/wheel.png', './test/images/wheel-pixelized.png', function(images){
            var res = ImageMSE.compare(images[0], images[1]);
            assert(res.mse > 0);
            assert(res.psnr > 0);
            assert(res.psnr < Infinity);
            done();
        });
    });

    it('should compare same images', function(done) {
        load('./test/images/wheel-pixelized.png', './test/images/wheel-pixelized.png', function(images){
            var res = ImageMSE.compare(images[0], images[1]);
            assert(res.mse === 0);
            assert(res.psnr === Infinity);
            done();
        });
    });
});
