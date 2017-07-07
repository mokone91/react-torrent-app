import {ClientFunction} from 'testcafe';

const getPathname = ClientFunction(() => window.location.pathname);

export default getPathname;