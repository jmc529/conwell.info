import type { Segment } from '$lib/types';

export type Accent = 'primary' | 'success' | 'neutral' | 'dark';

export interface Job {
	company: string;
	href: string;
	role: string;
	/** Drives the accent colour of the card's left border. */
	accent: Accent;
	body: Segment[];
}

export const jobs: Job[] = [
	{
		company: 'ARIES Program',
		href: 'https://historyviz.com/',
		role: 'Pathfinder-Applied Researcher',
		accent: 'primary',
		body: [
			{
				text: 'The ARIES team works with virtual and augmented reality to create hands on learning experiences. I first came in contact with the team after my friend '
			},
			{ text: 'Dillon', href: 'https://historyviz.com/portfolio/dillon' },
			{
				text: ' told me about a project he was working on with the team. The CI-SPY project used AR to recreate a, now mostly destroyed, historic black school. I think this sort of material is extremely valuable; any time invested towards creating new ways to learn and solidifying history in a way that may be more digestible is worth it. I currently am working on a few sports simulators where the project aim is to help injured or otherwise benched players refine their tactics.'
			}
		]
	},
	{
		company: '622 North',
		href: 'https://www.622north.com/',
		role: 'Prep Cook 2018-Present',
		accent: 'success',
		body: [
			{
				text: "I began cooking here after hearing about, then trying, their delicious food. As I wanted to further improve my knife skills and palette it was a good fit. I've learned, and am mastering, different cuts (e.g. julienne, chiffonade, brunoise), how to manage multiple dishes at once, and American cooking."
			}
		]
	},
	{
		company: 'Black Hen and Bar Blue',
		href: 'https://www.theblackhenrestaurant.com/',
		role: 'Pantry and Pastry Chef 2016-2017',
		accent: 'neutral',
		body: [
			{
				text: 'I began cooking here after a friend offered me an "in" as a cook. I accepted their offer as I wanted to explore a childhood dream, being a cook. It was a lovely job, yet extremely taxing. I learned finer aspects of cooking (e.g. quenelles, plating techniques) and used modern cooking machinery (e.g. sous vides, vacuum sealers). After a year or so I quit and reentered academia to finish my bachlors degree.'
			}
		]
	},
	{
		company: 'WUVT',
		href: 'https://www.wuvt.vt.edu/',
		role: 'AM Director & Traffic Director 2014-2016',
		accent: 'dark',
		body: [
			{
				text: 'I began working at this radio station in 2013 in hopes of expanding my musical taste and deepening my musical knowledge. I later was offered the position of Traffic Director. As the Traffic Director I was in charge of a group of 16 individuals who, along with myself, were to create automated, yet tasteful, traffic (essentially playlists) for the station. As the AM Director I was in charge of 40+ individuals who were in the process of training to become certified DJs. During that time I created an online '
			},
			{ text: 'guide', href: 'https://www.wuvt.vt.edu/am-guide' },
			{ text: ' to assist DJs when I was not available. This guide is still in use today.' }
		]
	}
];
