const Chandrayan = require('../chandrayan.js');
describe("Move chandrayan3",()=>{
    describe('Move chandrayan in North direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'N')
            chandrayan3.move('F')
            expect(chandrayan3.y).toBe(1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'N')
            chandrayan3.move('B')
            expect(chandrayan3.y).toBe(-1)
        })
       
     })
    
     describe('Move chandrayan in South direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'S')
            chandrayan3.move('F')
            expect(chandrayan3.y).toBe(-1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'S')
            chandrayan3.move('B')
            expect(chandrayan3.y).toBe(1)
        })
       
     })
    
     describe('Move chandrayan in East direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'E')
            chandrayan3.move('F')
            expect(chandrayan3.x).toBe(1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'E')
            chandrayan3.move('B')
            expect(chandrayan3.x).toBe(-1)
        })
       
     })
    
     describe('Move chandrayan in West direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'W')
            chandrayan3.move('F')
            expect(chandrayan3.x).toBe(-1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'W')
            chandrayan3.move('B')
            expect(chandrayan3.x).toBe(1)
        })
       
     })
    
     describe('Move chandrayan in upward direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'U')
            chandrayan3.move('F')
            expect(chandrayan3.z).toBe(1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'U')
            chandrayan3.move('B')
            expect(chandrayan3.z).toBe(-1)
        })
       
     })
    
     describe('Move chandrayan in downward direction',()=>{
        test("Move Forward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'D')
            chandrayan3.move('F')
            expect(chandrayan3.z).toBe(-1)
        })
        test("Move Backward",()=>{
            const chandrayan3= new Chandrayan(0,0,0,'D')
            chandrayan3.move('B')
            expect(chandrayan3.z).toBe(1)
        })
       
     })
    
})

describe('Turn chandrayan3', () => { 
test('turn to Right',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"N")
    chandrayan3.turn("R")
    expect(chandrayan3.direction).toBe("E")
})
test('turn to Left',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"S")
    chandrayan3.turn("L")
    expect(chandrayan3.direction).toBe("E")
})

test('turn to Upward',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"W")
    chandrayan3.turn("U")
    expect(chandrayan3.direction).toBe("U")
})
test('turn to Downward',()=>{
    const chandrayan3 = new Chandrayan(0,0,0,"E")
    chandrayan3.turn("D")
    expect(chandrayan3.direction).toBe("D")
})

 })

