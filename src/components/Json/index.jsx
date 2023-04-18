import React, { useEffect, useState } from "react";
import JsonItems from "../JsonItems";
import "./style.css";

const Json = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    console.log(data);
    return (
        <div className='container'>
            <div className='content'>
                {data.map((el) => (
                    <JsonItems key={el.id} title={el.title} body={el.body} />
                ))}
            </div>
        </div>
    );
};

export default Json;
