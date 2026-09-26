import type { Segment } from '$lib/types';

export interface AboutBlock {
	paragraphs: Segment[][];
}

export const about: AboutBlock = {
	paragraphs: [
		[
			{
				text: 'I like to think of myself as an open-minded person. The kind of person that tries a different item off the menu each time I go back to a restaurant. I have a background in mathematics and computer science from Virginia Tech, with a minor in philosophy. I was grant funded for a project my team called '
			},
			{ text: '"EvolutionEd"', href: 'https://evolutionEd.gitlab.io' },
			{
				text: '. I am somewhat of an avid cook — I once started a sourdough mother and a kombucha mother (both are now dead, RIP).'
			}
		],
		[
			{
				text: 'Drummer and musician for 15+ years. Professional developer for ~4 years. Professional cook for ~4 years. Researcher for ~2 years.'
			}
		]
	]
};
