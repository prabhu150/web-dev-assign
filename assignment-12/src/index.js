import React from 'react';
import {render} from 'react-dom';
import './styles.css';

import Product from './product';
import * as serviceWorker from './serviceWorker';

render(<Product />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
