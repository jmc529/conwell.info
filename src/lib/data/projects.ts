export interface Project {
	title: string;
	href: string;
	image: string;
	alt: string;
	summary: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		title: 'VTHacks',
		href: 'https://vthacks.com/',
		image: '/images/vthacks.png',
		alt: 'VTHacks banner',
		summary:
			'VTHacks is an organization that hosts MLH certified hackathons at Virginia Tech. I work on maintaining and building upon their website with a few other developers.',
		tags: ['VueJS', 'JavaScript', 'HTML', 'CSS']
	},
	{
		title: 'M3: A Mini Modular Music Player',
		href: 'https://github.com/jmc529/m3',
		image: '/images/M3.png',
		alt: 'M3 banner',
		summary:
			'M3 is a project I started Janurary 2019 after using and feeling disatisfied with the current webapp musicplayers that were available. It is still in development.',
		tags: ['JavaScript', 'HTML', 'CSS']
	},
	{
		title: 'Space Invaders',
		href: 'https://github.com/jmc529/spaceinvaders',
		image: '/images/spaceinvaders.png',
		alt: 'spaceinvaders banner',
		summary:
			'This project was originally intended as a comparison for Entity Component System vs Object Oriented design in video games. I unfortunately put this on hold while in school last semester.',
		tags: ['Love2D', 'Lua']
	}
];
