const name = 'Harmonius';

export const site = {
	name,
	homeTitle: `${name} — a journal on design`,
	description: `${name} is an independent journal about the ideas, objects, and details shaping how we live.`,
	footerDescription: 'An independent journal on design and the everyday.',
	tagline: 'Design, detail, everyday.',
	contactEmail: 'hello@fieldnotes.design',
	draftsTitle: 'Draft previews',
	draftPreviewTitle: 'Local draft preview',
};

export function pageTitle(title: string): string {
	return `${title} — ${site.name}`;
}
