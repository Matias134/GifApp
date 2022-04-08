import ReactDOMClient from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './index.css';

const app = document.querySelector('#app');

const root = ReactDOMClient.createRoot( app );

root.render( <GifExpertApp /> );