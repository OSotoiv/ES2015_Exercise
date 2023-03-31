import React from 'react'
import { choices, remove } from './helpers'
import foods from './foods'

const Message = () => {
    let food = choices(foods);
    let fruit = remove(foods, food);
    return (<>
        <p>I'd like one {fruit}, please</p>
        <p>Here you go: {fruit}</p>
        <p>Delicious! May I have another?</p>
        <p>I'm sorry, we're all out. We have {foods} left</p>
    </>)
}

export default Message;