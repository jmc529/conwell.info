import type { Segment } from '$lib/types';

export interface AboutBlock {
	paragraphs: Segment[][];
}

/**
 * NOTE FOR REVIEW: this copy was written in 2021 and is still in the present
 * tense. "I am currently a mathematics student at Virginia Tech" and the
 * "10+ / 4+ / 1+ years" counts all need a refresh.
 */
export const about: AboutBlock = {
	paragraphs: [
		[
			{
				text: 'I like to think of myself as an openminded person. The kind of person that tries a different item off the menu each time I go back to a restaurant. I am currently a mathematics student at Virginia Tech with a minor in computer science and philosophy. I was recently grant funded for a project my team calls '
			},
			{ text: '"EvolutionEd"', href: 'https://evolutionEd.gitlab.io' },
			{
				text: '. I am somewhat of an avid cook, last year I started a sourdough mother and a kombucha mother (both are now dead RIP).'
			}
		],
		[
			{
				text: 'Drummer and musician for 10+ years. Professional cook for 4+ years. Researcher for 1+ years.'
			}
		]
	]
};
