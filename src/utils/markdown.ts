export type BoldPart =
  | { type: 'strong'; text: string }
  | { type: 'text'; text: string };

/** Split a string on **bold** markers for simple inline emphasis. */
export function renderBold(text: string): BoldPart[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return { type: 'strong' as const, text: part.slice(2, -2) };
    }
    return { type: 'text' as const, text: part };
  });
}
