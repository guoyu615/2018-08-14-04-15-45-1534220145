const main = require('../main/main');

describe('main(a,b)', () => {

    it('should calculate the remaindar', () => {
        expect(main(9, 3)).toBe(0);
        expect(main(11, 4)).toBe(3);
    });
});