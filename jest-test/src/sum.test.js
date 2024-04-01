import sum from './sum'

test('testing the sum function', () => {
    expect(sum(2,3)).toBe(5)
})

test('testing the sum function', () => {
    let a = 3;
    let b = 5;
    let output = 8;
    expect(sum(a,b)).toBe(output)
})