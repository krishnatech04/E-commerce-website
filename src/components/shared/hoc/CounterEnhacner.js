import { useState } from "react";

const CounterEnhancer = (Component) => {
    const Counter = () => {
        const [count, setCount] = useState(0);
        const handler = () => {
            setCount( prevState => {return {count: prevState + 1}})
            setCount(count + 1);
        }
        return <Component count={count} handler={handler}/>
    }
    return Counter;
}

export default CounterEnhancer;