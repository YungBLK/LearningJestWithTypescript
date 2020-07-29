function compileAndroidCode() {
    throw new Error('You using the wrong JDK');
}


describe('Compiling android goes as expected', () =>{
    it('Should compile the android code', () => {
        expect(compileAndroidCode).toThrow(Error);
    })
})