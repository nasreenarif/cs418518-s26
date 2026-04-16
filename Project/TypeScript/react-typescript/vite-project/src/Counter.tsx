import { useState } from 'react';

export default function Counter({ start }: { start: number }) {
    const [count, setCount] = useState<number>(start);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
