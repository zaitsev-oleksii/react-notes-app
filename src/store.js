import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import notes from './redux/reducers';

export const store = createStore(notes, devToolsEnhancer());