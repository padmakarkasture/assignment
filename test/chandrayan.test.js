const Chandrayan = require('../chandrayan.js');
describe('Move chandrayan in North direction',()=>{
    test("Move Forward",()=>{
        const c= new Chandrayan(0,0,0,'N')
        c.move('f')
        expect(c.y).toBe(1)
    })
    test("Move Backward",()=>{
        const c= new Chandrayan(0,0,0,'N')
        c.move('b')
        expect(c.y).toBe(-1)
    })
   
 })

 describe('Move chandrayan in South direction',()=>{
    test("Move Forward",()=>{
        const c= new Chandrayan(0,0,0,'S')
        c.move('f')
        expect(c.y).toBe(-1)
    })
    test("Move Backward",()=>{
        const c= new Chandrayan(0,0,0,'S')
        c.move('b')
        expect(c.y).toBe(1)
    })
   
 })