import { NUMBER } from "../actions/action_constants";


INITAL_STATE = {
  
    Title: 'Lucifer',
    Year: '2016–2021',
    Rated: 'TV-14',
    Released: '25 Jan 2016',
    Runtime: '42 min',
    Genre: 'Crime, Drama, Fantasy',
    Director: 'N/A',
    Writer: 'Tom Kapinos',
    Actors: 'Tom Ellis, Lauren German, Kevin Alejandro',
    Plot: "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",
    Language: 'English',
    Country: 'United States',
    Awards: 'Nominated for 1 Primetime Emmy. 2 wins & 20 nominations total',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
    Ratings: [
      {
        Source: 'Internet Movie Database',
        Value: '8.1/10',
      },
    ],
    Metascore: 'N/A',
    imdbRating: '8.1',
    imdbVotes: '316,584',
    imdbID: 'tt4052886',
    Type: 'series',
    totalSeasons: '6',
    Response: 'True',
  
};

const count_reducer = (state=INITAL_STATE,action) => {
    switch (action.type) {
        case NUMBER:
            return {
                ...state,count:count+1
            }
        default:
            return state
        }
}

export default count_reducer;