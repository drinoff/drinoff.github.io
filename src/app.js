import { render } from './lib.js';
import { page } from './lib.js';
import { homePage } from './views/home.js'
import { portFolioPage } from './views/portfolio.js';
import { skillsPage } from './views/skills.js';



const main = document.getElementById('main');


page('', decorateContext, homePage);
page('/', decorateContext, homePage);
page('/skills', decorateContext, skillsPage)
page('/portfolio', decorateContext, portFolioPage)

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main)
    next();
}
