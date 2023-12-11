"use client";
import * as React from "react";

export type CounterProps = {};

export function Counter({}: CounterProps) {
    const [count, setCount] = React.useState(0);
    return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
