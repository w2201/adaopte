import { useQuery } from "@tanstack/react-query";
import { sql } from "./sql";


type AnimalType = {
    id: number;
    name: string;
}; 

export function useAnimalTypes() {
    return useQuery<AnimalType[]>({
        queryKey: ["animalTypes"],
        queryFn: async () => {
            const result = await sql`SELECT id, name FROM animal_types`;
            return result.rows;
        },
    }); 
}