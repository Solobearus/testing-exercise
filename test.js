import { minimumSum } from './index';
import { expect } from 'chai';

describe('TESTS', function () {

    describe('normal cases', function () {
        it('For 7 SHEEEEKEL it should return 5 shekel and shneikel', function () {
            expect(minimumSum(7)).to.eql([0, 1, 1, 0, 0, 0, 0, 0]);
        });
        it('For 1000 it should return 5 200 bills', function () {
            expect(minimumSum(1000)).to.eql([0, 0, 0, 0, 0, 0, 0, 5]);
        });
    });

    describe('edge cases', function () {
        it('For 0 it should return 0 for all elements in array', function () {
            expect(minimumSum(0)).to.eql([0, 0, 0, 0, 0, 0, 0, 0]);
        });
        it('For negetive it should return 0 for all elements in array', function () {
            expect(minimumSum(-100)).to.eql([0, 0, 0, 0, 0, 0, 0, 0]);
        });
    });

    describe('type cases', function () {
        it('For string it should return null', function () {
            expect(minimumSum("a")).to.be.a('null');
        });
        it('For object it should return null', function () {
            expect(minimumSum({})).to.be.a('null');
        });
        it('For array it should return null', function () {
            expect(minimumSum([])).to.be.a('null');
        });
        it('For function it should return null', function () {
            expect(minimumSum(()=>{})).to.be.a('null');
        });
    });
});