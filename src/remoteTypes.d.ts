///<reference types="react" />

declare module 'app1/CounterAppOne' {
    const CounterAppOne: React.ComponentType<{name: string}>;

    export default CounterAppOne;
}

declare module 'app1/TextArea' {
    const TextArea: React.ComponentType<>;

    export default TextArea;
}

// declare module 'app2/CounterAppTwo' {
//     const CounterAppTwo: React.ComponentType;

//     export default CounterAppTwo;
// }