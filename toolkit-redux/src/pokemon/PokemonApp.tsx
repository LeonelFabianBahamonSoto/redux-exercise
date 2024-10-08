import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../store/store';
import { getPokemon } from './pokemonThunk';

interface Pokemon {
    name: string,
    url?: string,
};

interface PokemonInterface {
    isLoading: boolean,
    page: number,
    pokemons: Pokemon[],
};

export const PokemonApp = () => {
    const pokemon: PokemonInterface = useSelector(( state: RootState ) => state.pokemon );
    const dispatch = useDispatch<AppDispatch>();

    const { isLoading, page, pokemons } = pokemon;

    useEffect(() => {
        dispatch( getPokemon() );
    }, []);

    return (
        <div style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            justifyContent: 'center',
            width: '100%',
        }}>
            <text style={ styles.title }>
                Pokemon App
            </text>
            <hr />

            <div style={ styles.listContainer }>
                {
                    ( isLoading )
                        ? ( <span>Loading...</span> )
                        : (
                            <ul>
                                {
                                    pokemons.map(({ name }) => (
                                        <li>{ name }</li>
                                    ))
                                }
                            </ul>
                        )
                }
            </div>

            <div style={ styles.buttonsContainer }>
                <button
                    onClick={() => { dispatch( getPokemon( page - 1 ) ) }}
                    style={ styles.buttons }
                >
                    Previous
                </button>
                <button
                    onClick={() => { dispatch( getPokemon( page + 1 ) ) }}
                    style={ styles.buttons }
                >
                    Next
                </button>
            </div>
        </div>
    )
};

const styles = ({
    title: {
        color: 'orange',
        fontSize: '35px',
        fontWeight: 600,
    },
    buttonsContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        width: '40%',
    },
    listContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'start',
        width: '40%',
    },
    buttons: {
        height: '2.5vh',
        width: '48%',
    },
});