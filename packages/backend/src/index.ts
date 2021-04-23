import { createApp } from './app';

const appServer = createApp();

appServer.listen(3001, () => console.log(`App listening at http://localhost:3000 !!!`));
