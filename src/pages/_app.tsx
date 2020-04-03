import React, {ReactElement} from 'react';
import App, {AppProps} from 'next/app';
// Unfortunately createGlobalStyle (from styled-components) is web-only
// But we can import normal stylesheets in _this_ file (only this file)!
// for example: import '../public/styles.css';

export default class NextApp extends App<AppProps> {
    render(): ReactElement {
        const {Component, pageProps} = this.props;

        return <Component {...pageProps} />;
    }
}
