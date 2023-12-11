import { Counter } from "../counter";

export default function Page() {
    return (
        <h2
            style={{
                color: "tomato",
            }}
        >
            PARALLEL [...PATHS] <Counter />
        </h2>
    );
}
