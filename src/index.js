import React from 'react';
import { render } from 'react-dom';
import './index.css';

import App from './App/App.js';
import Controls from './Controls/Controls.js'
import Grid from './Grid/Grid.js'

render( <App />, document.getElementById('root') );
render( <Controls />, document.getElementById('controls'))
render( <Grid />, document.getElementById('grid') );
