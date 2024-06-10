
const sum = require('./Sum');

test("there is no I am in Team",()=>{
    expect('team').not.toMatch(/I/);
})
  /*beforeEach(() => {
    initializeCityDatabase();
  });
  
  afterEach(() => {
    clearCityDatabase();
  });
  
  test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
  });
  
  test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
  });

test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });


const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
test("shoping list has milk on it",()=>{
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

test("there is no I am in Team",()=>{
    expect('team').not.toMatch(/I/);
})

test("Adding Floating Point Number",()=>{
    const data=0.1+0.2;
    expect(data).toBe(0.4);
});

test("two plus two",()=>{
    let data=2+2;
    expect(data).toBeGreaterThan(3);
    expect(data).toBeGreaterThanOrEqual(3.5);
    expect(data).toBeLessThan(5);
    expect(data).toBeLessThanOrEqual(4.5);
});
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test("to expect",()=>{
   let data=20;
   expect(data).toBe(20);
});
test("expect object",()=>{
    let obj={name:'anil',email:'anil.kumar4@essindia.com'};
    expect(obj).toEqual({name:'anil',email:'anil.kumar4@essindia.com'});
});
test("Adding postive number is not zero",()=>{
    for(let a=1;a<10;a++){
        for(let b=1;b<10;b++){
            expect(a+b).not.toBe(0);
        }
    }
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

test("Zero",()=>{
    const n=0;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});*/


