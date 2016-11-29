import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Order from './Order';
import Group from './Group';

import './main.css';//使用require导入css文件

render(<div>
    <Greeter />
    <Order />
    <Group />
</div>, document.getElementById('root'));

