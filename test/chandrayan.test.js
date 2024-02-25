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

 describe('Move chandrayan in East direction',()=>{
    test("Move Forward",()=>{
        const c= new Chandrayan(0,0,0,'E')
        c.move('f')
        expect(c.x).toBe(1)
    })
    test("Move Backward",()=>{
        const c= new Chandrayan(0,0,0,'E')
        c.move('b')
        expect(c.x).toBe(-1)
    })
   
 })

 describe('Move chandrayan in West direction',()=>{
    test("Move Forward",()=>{
        const c= new Chandrayan(0,0,0,'W')
        c.move('f')
        expect(c.x).toBe(-1)
    })
    test("Move Backward",()=>{
        const c= new Chandrayan(0,0,0,'W')
        c.move('b')
        expect(c.x).toBe(1)
    })
   
 })

 describe('Move chandrayan in upward direction',()=>{
    test("Move Forward",()=>{
        const c= new Chandrayan(0,0,0,'U')
        c.move('f')
        expect(c.z).toBe(1)
    })
    test("Move Backward",()=>{
        const c= new Chandrayan(0,0,0,'U')
        c.move('b')
        expect(c.z).toBe(-1)
    })
   
 })

 describe('Move chandrayan in downward direction',()=>{
    test("Move Forward",()=>{
        const c= new Chandrayan(0,0,0,'D')
        c.move('f')
        expect(c.z).toBe(-1)
    })
    test("Move Backward",()=>{
        const c= new Chandrayan(0,0,0,'D')
        c.move('b')
        expect(c.z).toBe(1)
    })
   
 })
