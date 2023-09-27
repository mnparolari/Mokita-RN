import { useState, useEffect } from 'react';

const useCounter = (props: any) => {
    const { initial, stock } = props;

    const [counterValue, setCounterValue] = useState(initial || 0);
    const [block, setBlock] = useState(false);

    useEffect(() => {
        if (typeof stock !== 'undefined' && counterValue >= stock) {
            setBlock(true)
        }
        return () => {
            setBlock(false)
        }
    }, [stock, counterValue]);

    const increment = () => {
        setCounterValue(counterValue + 1);
    };

    const decrement = () => {
        if (counterValue > 1) {
            setCounterValue(counterValue - 1);
        };
    };

    return { counterValue, block, increment, decrement }

}

export default useCounter