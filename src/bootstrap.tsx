import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

export function bootstrap() {
  const app = document.getElementById('app');
  ReactDOM.render(<App />, app);
}
