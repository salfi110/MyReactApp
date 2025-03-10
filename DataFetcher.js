import { useState, useEffect } from "react";

function DataFetcher() {
    const [data, setData] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
            .then((response) => response.json())
            .then((json) => setData(json));
    }, [count]);

    return (
        <div>
            <h2>API Data:</h2>
            {data ? <p>{data.title}</p> : <p>Loading...</p>}
            <button onClick={() => setCount(count + 1)}>Fetch Next</button>
        </div>
    );
}

export default DataFetcher;
