import { useState } from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';

function SelectQuantity() {
    const [count, setCount] = useState(0);
    const increment = () => {
        if (count < 10) setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };
    return (
        <>
            <MdRemove onClick={decrement} />
            {count}
            <MdAdd onClick={increment} />
        </>
    );
}

export default SelectQuantity;