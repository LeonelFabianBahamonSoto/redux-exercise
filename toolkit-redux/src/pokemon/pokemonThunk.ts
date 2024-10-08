import { pokemonApi } from "../api/pokemonApi";
import { setPokemon, startLoadingPokemons } from "../store/slices/pokemon/pokemonSlice";


const getPokemon = ( page: number = 0 ) => {
    return async( dispatch: any, getState: any ) => {
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get( `pokemon?limit=10&offset=${ page * 10 }` );

        dispatch( setPokemon({
            page: page,
            pokemons: data.results,
        }));
    };
};

export {
    getPokemon,
};