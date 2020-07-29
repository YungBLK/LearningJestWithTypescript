declare global {
    namespace jest {
        interface Matchers<R> {
            toBeWithinRange(a: number, b: number): R;
        }
        interface Expect<> {
            toBeWithinRange(a: number, b: number): R;
        }
    }
}



export {};