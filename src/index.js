import { h, render } from 'preact';
import App from './App';

const node = document.getElementById('root');
render(<App value={5} />, node);
