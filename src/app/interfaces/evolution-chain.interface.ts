export interface EvolutionChain
{
    chain:
    {
        
        // Primeira evolução
        evolves_to?: [
        {
            evolution_details: [
            {
                min_level: number
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
                    min_level: number
                }];
                species: 
                {
                    name: string
                };
            }];
        }];

        // Primeira evolução - NOME
        species:
        {
            name: string
        };
    }
}