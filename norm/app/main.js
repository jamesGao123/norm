import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Order from './Order';
import Group from './Group';

import './main.css';//ʹ��require����css�ļ�

render(<div>
    <Greeter />
    <Order />
    <Group />
</div>, document.getElementById('root'));

