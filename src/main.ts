import * as express from 'express';
import { ExpressjsAdapter } from './adapter/ExpressjsAdapter';
import { App } from './app';

const app = express();

app.get('/', new ExpressjsAdapter(new App()).handler());
app.listen(3000, () => console.log('Example app listening on port 3000!'));
