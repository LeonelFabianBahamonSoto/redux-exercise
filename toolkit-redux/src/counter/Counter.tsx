import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { decrement, increment, incrementByAmount } from "../store/slices/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <span>Counter: { count }</span>

            <br/>

            <button
                onClick={ () => dispatch( increment() ) }
            >
                Increment
            </button>

            <button
                onClick={ () => dispatch( decrement() ) }
            >
                Decrement
            </button>

            <button
                onClick={ () => dispatch( incrementByAmount( 2 ) ) }
            >
                Increment By 2
            </button>
        </div>
    )
}

export default Counter;