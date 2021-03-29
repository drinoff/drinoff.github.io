import { html } from '../lib.js'

const skillsTemplate = () => html`
<ul class="style1">
    <li class="first">
        <p class="date"><a href="#"><b>JS</b></a></p>
        <h3>JavaScript</h3>
        <p>Familiar with fundamental and advanced techniques of JS, DOM Manipulation, SPA, Routing, Templating,
            Asynchronous Programming.
            Familiar with ES6 features.Knowledge of Page.js and Lit-HTML.js. Knowledge of Testing via PlayWright, Mocha
            and Chai.
        </p>
    </li>
    <li>
        <p class="date"><a href="#"><b>HTML CSS</b></a></p>
        <h3>HTML and CSS</h3>
        <p>Curently studying HTML and CSS.Planing to start with SASS and LESS.</p>
    </li>
    <li>
        <p class="date"><a href="#">REACT<b>JS</b></a></p>
        <h3>React.JS</h3>
        <p>Starting with React.js soon.</p>
    </li>
    <li>
        <p class="date"><a href="#"><b>REST</b></a></p>
        <h3>RESTful Services</h3>
        <p>Consuming and manipulating REST API's. Familiar with CRUD , Remote Data and Authentication, BaaS. </p>
    </li>
    <li>
        <p class="date"><a href="#"><b>C#</b></a></p>
        <h3>C# Knowledge</h3>
        <p>Knowledge of Object Oriented Programing, LINQ, SOLID and More. </p>
    </li>
    <li>
        <p class="date"><a href="#"><b>Utils</b></a></p>
        <h3>Utilities</h3>
        <p>VS Code , Basic SQL , WebStorm, Google Dev Tools, WordPress</p>
    </li>
    <li>
        <p class="date"><a href="#"><b>PLAN</b></a></p>
        <h3>The Plan</h3>
        <p>The Plan is simple. Go for REACT.JS, master HTML and CSS, learn SAAS,LESS,MonogoDB,Docker,CI and more.</p>
    </li>
</ul>
<footer id="copyright">
    <span>&copy;Design by Mehmet Ismail </span>
    <span>Berlin, Germany | Developer Enthusiast</span>
</footer>
`;

export function skillsPage(ctx) {
    ctx.render(skillsTemplate());
}