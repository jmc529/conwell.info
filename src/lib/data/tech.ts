import type { IconName } from '$lib/data/icons';

export interface TechLink {
	name: string;
	href: string;
	icon: IconName;
}

export interface TechGroup {
	id: string;
	title: string;
	tech: TechLink[];
}

export const techGroups: TechGroup[] = [
	{
		id: 'programming-langs',
		title: 'Programming Languages',
		tech: [
			{ name: 'Lua', href: 'https://www.lua.org/', icon: 'lua' },
			{ name: 'Python', href: 'https://www.python.org/', icon: 'python' },
			{
				name: 'Java',
				href: 'https://www.oracle.com/java/technologies/javase/overview/index.html',
				icon: 'java'
			},
			{ name: 'JavaScript', href: 'https://www.javascript.com/', icon: 'javascript' },
			{ name: 'C#', href: 'https://learn.microsoft.com/en-us/dotnet/csharp/', icon: 'csharp' },
			{ name: 'C++', href: 'https://isocpp.org/', icon: 'cplusplus' }
		]
	},
	{
		id: 'libraries-frameworks',
		title: 'Libraries and Frameworks',
		tech: [
			{ name: 'Node.js', href: 'https://nodejs.org/', icon: 'nodejs' },
			{ name: 'jQuery', href: 'https://jquery.com/', icon: 'jquery' },
			{ name: 'LÖVE', href: 'https://love2d.org/', icon: 'love2d' },
			{ name: 'Vue.js', href: 'https://vuejs.org/', icon: 'vuejs' }
		]
	},
	{
		id: 'web-development',
		title: 'Web Development',
		tech: [
			{ name: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'html5' },
			{ name: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'css3' },
			{ name: 'Firebase', href: 'https://firebase.google.com/', icon: 'firebase' },
			{ name: 'Heroku', href: 'https://www.heroku.com/', icon: 'heroku' }
		]
	},
	{
		id: 'development',
		title: 'Development',
		tech: [
			{ name: 'Sublime Text', href: 'https://www.sublimetext.com/', icon: 'sublime' },
			{ name: 'Unreal Engine', href: 'https://www.unrealengine.com/', icon: 'unreal' },
			{ name: 'Unity', href: 'https://unity.com/', icon: 'unity' },
			{ name: 'GIMP', href: 'https://www.gimp.org/', icon: 'gimp' },
			{ name: 'Git', href: 'https://git-scm.com/', icon: 'git' },
			{ name: 'MongoDB', href: 'https://www.mongodb.com/', icon: 'mongodb' }
		]
	}
];
