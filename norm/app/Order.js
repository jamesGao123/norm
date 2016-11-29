import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';
import A from './a.js';

class Order extends Component{
    render() {
        return (
            <div className={styles.root}>
                <div>{config.greetText}</div>
                <A />
            </div>
        );
    }
}


export default Order