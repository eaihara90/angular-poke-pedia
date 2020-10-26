export interface Species
{
    color: { name: string },
    evolution_chain: { url: string },
    flavor_text_entries: [{ flavor_text: string }],
    growth_rate: { name: string },
    name: string,
    habitat: { name: string }
}