// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			message?: string;
			status?: number;
		}

		interface Locals {
			admin: boolean;
		}
	}
}

export type EventClient = {
	id: number,
	date: string,
	createdAt: string,
	updatedAt: string,
	title: string,
	text: string,
	image: string | undefined
};
