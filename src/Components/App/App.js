import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults:[],
      playlistName: '',
      playlistTracks:[]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.find(trackIndex => trackIndex.id === track.id)) {
     tracks.push(track);
     this.setState({playlistTracks: tracks});
    }
  }

  removeTrack(track) {
    let playlistTracks = this.state.playlistTracks;
    playlistTracks.splice(playlistTracks.index0f(track), 1);
    this.setState({playlistTracks: playlistTracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    const trackURIs = this.playlistTracks
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.SearchResults} onAdd={this.addTrack()}/>
            <Playlist playlistName={this.playlistName} playlistTracks={this.playlistTracks} onRemove={this.removeTrack()} onNameChange={this.updatePlaylistName()}/>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
