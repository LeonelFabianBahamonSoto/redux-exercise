import { createSlice } from '@reduxjs/toolkit';

interface Pokemon {
    name: string,
    url?: string,
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [] as Pokemon[],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemon: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
    }
});




export const {
    startLoadingPokemons,
    setPokemon,
} = pokemonSlice.actions;