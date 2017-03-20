export class Sample {
    doSomething(complete: (value: number) => void) {
        console.log('runnnig');
        complete(5)
    }
}