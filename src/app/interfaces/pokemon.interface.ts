export interface Pokemon
{
    id: number,
    name: string,
    height: string,

    sprites:
    {
        front_default: string,
        other:
        {
            dream_world: { front_default: string },
            official_artwork?: { front_default: string },
        }
    },

    stats: [
    {
        base_stat: number,
        effort: number,
        stat: { name: string }
    }],

    types: [
    {
        slot: number,
        type:
        {
            name: string,
            url?: string
        }
    }],
    
    weight: string
}