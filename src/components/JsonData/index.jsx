import React, { useEffect, useState } from "react";
import "./style.css";

const JsonData = () => {
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
                {data?.map((el) => (
                    <div className='content-card' key={el.id}>
                        <h4 className='content-card__title'>{el.title}</h4>
                        <p className='content-card__text'>{el.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JsonData;
