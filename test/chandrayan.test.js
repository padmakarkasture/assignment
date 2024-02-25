const Chandrayan = require('../chandrayan.js');
describe("Move chandrayan3",()=>{
    describe('Move chandrayan in North direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'N')
            chandrayan3.move('f')
            expect(chandrayan3.y).toBe(1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'N')
            chandrayan3.move('b')
            expect(chandrayan3.y).toBe(-1)
        })
       
     })
    
     describe('Move chandrayan in South direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'S')
            chandrayan3.move('f')
            expect(chandrayan3.y).toBe(-1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'S')
            chandrayan3.move('b')
            expect(chandrayan3.y).toBe(1)
        })
       
     })
    
     describe('Move chandrayan in East direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'E')
            chandrayan3.move('f')
            expect(chandrayan3.x).toBe(1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'E')
            chandrayan3.move('b')
            expect(chandrayan3.x).toBe(-1)
        })
       
     })
    
     describe('Move chandrayan in West direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'W')
            chandrayan3.move('f')
            expect(chandrayan3.x).toBe(-1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'W')
            chandrayan3.move('b')
            expect(chandrayan3.x).toBe(1)
        })
       
     })
    
     describe('Move chandrayan in upward direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'U')
            chandrayan3.move('f')
            expect(chandrayan3.z).toBe(1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'U')
            chandrayan3.move('b')
            expect(chandrayan3.z).toBe(-1)
        })
       
     })
    
     describe('Move chandrayan in downward direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'D')
            chandrayan3.move('f')
            expect(chandrayan3.z).toBe(-1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'D')
            chandrayan3.move('b')
            expect(chandrayan3.z).toBe(1)
        })
       
     })
    
})

describe('Turn chandrayan3', () => { 
test('turn to North',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"N")
    chandrayan3.turn("N")
    expect(chandrayan3.direction).toBe("N")
})
test('turn to South',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"S")
    chandrayan3.turn("S")
    expect(chandrayan3.direction).toBe("S")
})
test('turn to East',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"E")
    chandrayan3.turn("E")
    expect(chandrayan3.direction).toBe("E")
})
test('turn to West',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"W")
    chandrayan3.turn("W")
    expect(chandrayan3.direction).toBe("W")
})
test('turn to Upward',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"U")
    chandrayan3.turn("U")
    expect(chandrayan3.direction).toBe("U")
})
test('turn to Downward',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"D")
    chandrayan3.turn("D")
    expect(chandrayan3.direction).toBe("D")
})

 })