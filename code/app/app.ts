import { Sample } from './Sample';

export class App {
    public static run(): void {
        let msg = "Hello, jtower";
        let s = new Sample();
        s.doSomething((v) => { console.log(`value: ${v}`) });
    }
}

App.run();