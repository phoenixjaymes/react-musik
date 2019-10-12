import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import FavsLists from './FavsLists';
import Artists from './Artists';
import ArtistsAlbums from './ArtistsAlbums';
import Albums from './Albums';
import AlbumSongs from './AlbumSongs';
import Songs from './Songs';
import Genres from './Genres';
import GenreAlbums from './GenreAlbums';

import withContext from '../Context';

const ArtistsWithContext = withContext(Artists);
const AlbumsWithContext = withContext(Albums);
const SongsWithContext = withContext(Songs);
const GenresWithContext = withContext(Genres);

const Main = () => (
  <main>
    <Route exact path="/" component={Home} />
    <Route path="/favs-lists" component={FavsLists} />
    <Route path="/artists" component={ArtistsWithContext} />
    <Route path="/artist-albums/:id" render={({ match, history }) => <ArtistsAlbums type="all" match={match} history={history} />} />

    <Route path="/albums" component={AlbumsWithContext} />
    <Route path="/albums-single/:id" render={({ match, history }) => <ArtistsAlbums type="single" match={match} history={history} />} />

    <Route path="/album-songs" component={AlbumSongs} />

    {/* <Route path="/artist-songs" render={ () => <Artists type="songs" /> } /> */}

    {/* <Route path="/artist-profile" render={ () => <Artists type="profile" /> } /> */}

    <Route path="/songs" component={SongsWithContext} />
    <Route path="/genres" component={GenresWithContext} />

    <Route path="/genre-albums" component={GenreAlbums} />
  </main>
);

export default Main;
