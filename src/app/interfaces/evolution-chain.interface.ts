export interface EvolutionChain
{
    chain:
    {
        // Primeira evolução
        evolves_to?: [
        {
            evolution_details: [
            {
                min_level: number,
                item:
                {
                    name?: any;
                }
                min_happiness?: number;
            }];
            species: 
            {
                name: string
            };
            // SEGUNDA EVOLUÇÃO SE HOUVER
            evolves_to?: [
            {
                evolution_details: [
                {
                    min_level: number;
                    item:
                    {
                        name?: any;
                    }
                }];
                species: 
                {
                    name: string
                };
            }];
        }];
        is_baby: boolean;
        // Primeira evolução - NOME
        species:
        {
            name: string
        };
    }
}