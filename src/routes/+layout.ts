import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = () => {
	return {
		sections: [
			{
				name: 'Home',
				id: 'hero'
			},
			{
				name: 'About Me',
				id: 'about'
			},
			{
				name: 'Projects',
				id: 'projects'
			},
			{
				name: 'Experience',
				id: 'experience'
			},
			{
				name: 'Contact',
				id: 'contact'
			}
		]
	};
};
