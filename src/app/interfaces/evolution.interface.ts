export interface Evolution
{
    id: number,
    name: string,
    sprite: string,
    min_level: number,
    is_baby: boolean,
    item?: { name: string },
    min_happiness: number
}