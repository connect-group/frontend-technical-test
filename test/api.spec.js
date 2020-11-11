import  { getData } from'../src/api';;
import server from '../server';

describe("getData example test", function() {
    beforeEach(() => {
        server.listen(9988);
    });

    it('should respond with an array of vehicles', () => {
        getData((response) => {
            const data = JSON.parse(response);
            expect(Array.isArray(data.vehicles)).to.equal(true);
            done();
        })
    })
});
