import csharp from 'devicon/icons/csharp/csharp-original.svg';
import css3 from 'devicon/icons/css3/css3-original.svg';
import cplusplus from 'devicon/icons/cplusplus/cplusplus-original.svg';
import firebase from 'devicon/icons/firebase/firebase-original.svg';
import git from 'devicon/icons/git/git-original.svg';
import gimp from 'devicon/icons/gimp/gimp-original.svg';
import heroku from 'devicon/icons/heroku/heroku-original.svg';
import html5 from 'devicon/icons/html5/html5-original.svg';
import java from 'devicon/icons/java/java-original.svg';
import javascript from 'devicon/icons/javascript/javascript-original.svg';
import jquery from 'devicon/icons/jquery/jquery-original.svg';
import love2d from 'devicon/icons/love2d/love2d-original.svg';
import lua from 'devicon/icons/lua/lua-original.svg';
import mongodb from 'devicon/icons/mongodb/mongodb-original.svg';
import nodejs from 'devicon/icons/nodejs/nodejs-original.svg';
import python from 'devicon/icons/python/python-original.svg';
import unity from 'devicon/icons/unity/unity-original.svg';
import unreal from 'devicon/icons/unrealengine/unrealengine-original.svg';
import vuejs from 'devicon/icons/vuejs/vuejs-original.svg';

/**
 * Brand icons resolve to individual SVG modules so the bundler only emits the
 * ones actually referenced — unlike devicon's icon webfont, which is a single
 * ~1.5MB file no amount of tree-shaking can split up.
 *
 * devicon has no Sublime Text icon, so that entry stays a local file.
 */
export const icons = {
	csharp,
	css3,
	cplusplus,
	firebase,
	git,
	gimp,
	heroku,
	html5,
	java,
	javascript,
	jquery,
	love2d,
	lua,
	mongodb,
	nodejs,
	python,
	sublime: '/svgs/sublime.svg',
	unity,
	unreal,
	vuejs
};

export type IconName = keyof typeof icons;
