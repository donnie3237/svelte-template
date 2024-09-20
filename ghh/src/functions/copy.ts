export function copy(text: string): void {
	navigator.clipboard.writeText(text);
}
