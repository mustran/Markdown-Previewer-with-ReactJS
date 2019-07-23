import React from "react";
import styles from './styles/input.module.css';

const Input = props => {
    return (
        <div className={styles.inputF} id="edit">
            <textarea id="editor" value={props.inputMD} onChange={props.changeHandler} />
        </div>
    );
};

export default Input;
