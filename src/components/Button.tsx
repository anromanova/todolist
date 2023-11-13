import React from 'react';

type PropsType = {
    name: string
    callBack: () => void
    className? : string
    isAddBtnDisabled?: boolean
}
export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.isAddBtnDisabled ? true : false} className={props.className} onClick={onClickHandler}>{props.name}</button>
    );
};