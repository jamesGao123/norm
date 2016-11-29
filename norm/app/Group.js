import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';
import A from './a.js';
import bg from './asset/image/bg.jpg';
import less from './test.less';

class Group extends Component{
    render() {
        return (
            <div className={`${styles.root} testLess`}>
                <div>{config.greetText}</div>
                <div>
                    <img src={bg} />
                    <img src={bg} />
                </div>
            </div>
        );
    }
}


export default Group