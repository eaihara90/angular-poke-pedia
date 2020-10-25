export interface Evolution
{
    id: number;
    name: string;
    sprite: string;
    min_level: number;
    is_baby: boolean;
    item?: string;
    min_happines: number;
}