import { html } from '../lib.js'

const portfolioTemplate = () => html`
<ul class="style1">
    <li>
        <p class="date"><a href="#"><b>2019</b></a></p>
        <h3><a href="http://bau-se.de" target="_blank">S.E. BAU</a></h3>
        <p>Done with WordPress. This is my first Web Application.</p>
        <a href="http://www.bau-se.de" target="_blank"><img class = 'fb'  src="./images/seBau.png" alt=""></a>
    </li>
</ul>
<footer id="copyright">
		<span>&copy;Design by Mehmet Ismail </span>
		<span>Berlin, Germany | Developer Enthusiast</span>
	</footer>
`;

export function portFolioPage(ctx) {
    ctx.render(portfolioTemplate())
}