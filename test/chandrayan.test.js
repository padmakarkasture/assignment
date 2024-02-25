const Chandrayan = require('../chandrayan.js');
describe('move chandrayan  towards North',()=>{
    test("move Forward",()=>{
        const c= new Chandrayan(0,0,0,'N')
        c.move('f')
        expect(c.y).toBe(1)
    })
   
 })