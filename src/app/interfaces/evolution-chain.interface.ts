export interface EvolutionChain
{
    chain:
    {
        evolves_to?: [
        {
            evolution_details: [
            {
                min_level: number,
                item: { name?: any },
                min_happiness?: number
            }],

            species: { name: string },

            evolves_to?: [
            {
                evolution_details: [
                {
                    min_level: number,
                    item: { name?: any },
                }],

                species: { name: string },
            }],
        }],

        is_baby: boolean,
        species: { name: string }
    }
}