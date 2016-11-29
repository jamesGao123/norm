import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';
import A from './a.js';

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                <div>{config.greetText}</div>
                <div className={styles.bg}></div>
                <A />
            </div>
        );
    }
}


export default Greeter