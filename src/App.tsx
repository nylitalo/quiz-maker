import * as React from 'react';

import { Home } from './components/Home/Home';

export interface Props {

}

export class App extends React.Component implements Props {
    render() {
        return (
            <Home />
        );
    }
}