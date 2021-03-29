import { html } from '../lib.js'


const homeTemplate = () => html`

<div id="welcome">
	<div class="title">
		<h2></h2>
		<span class="byline">Developer Enthusiast, Football and Modern Cooking Lover</span>
	</div>
	<p> Living and working in Berlin, Germany, I started studying Web Development on early 2020.
		The goal is to become Junior Front End Developer. My Tech Stack is JS,HTML,CSS,C#,RESTFul Services.
		Soon i am planing to Start with React.Js.
	</p>
</div>
<div id="banner">
	<img src="/../../images/background.jpg" alt="https://ibb.co/qm0zQLC" class="image-full" />
</div>
<footer id="copyright">
	<span>&copy;Design by Mehmet Ismail </span>
	<span>Berlin, Germany | Developer Enthusiast</span>
</footer>
		
`;

export function homePage(ctx) {
	ctx.render(homeTemplate())
}