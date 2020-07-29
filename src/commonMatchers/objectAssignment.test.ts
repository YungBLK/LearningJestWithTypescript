const object = require('./objectAssignment');

test('object assignment', () => {
    object["two"] = 2;
    expect(object).toEqual({one:1, two: 2});  
})