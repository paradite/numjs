'use strict';

describe('images', function () {

    describe('save', function () {

        it('should be able to render a Grayscale img into a canvas', function(){
            var H = 10, W = 12,
                img = nj.ones([H,W]),
                $cv = document.createElement('canvas');
            $cv.height = H; $cv.width = W;
            nj.images.save(img, $cv);

            expect(nj.images.read($cv).tolist())
                .to.eql(img.tolist());
        });
        it('should be able to render a RGB img into a canvas', function(){
            var H = 10, W = 12,
                img = nj.concatenate(nj.ones([H,W,2]), nj.zeros([H,W,1]), nj.ones([H,W,1]).multiply(255)),
                $cv = document.createElement('canvas');
            $cv.height = H; $cv.width = W;
            nj.images.save(img, $cv);
            expect(nj.images.read($cv).tolist())
                .to.eql(img.tolist());
        });
    });
});