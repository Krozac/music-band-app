// lastfmApi.js
const API_KEY = 'ef4a78009c18246f1d92bcd1371f86f4'; // Replace with your Last.fm API key
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/';

class LastFmApi {
  static async fetchArtistInfo(artist) {
    try {
      const response = await fetch(
        `${BASE_URL}?method=artist.getinfo&artist=${encodeURIComponent(artist)}&api_key=${API_KEY}&format=json`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching artist info:', error);
      throw error;
    }
  }

  static async fetchTopTracks(artist) {
    try {
      const response = await fetch(
        `${BASE_URL}?method=artist.gettoptracks&artist=${encodeURIComponent(artist)}&api_key=${API_KEY}&format=json`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching top tracks:', error);
      throw error;
    }
  }

  static async fetchTrackInfo(artist, track) {
    try {
      const response = await fetch(
        `${BASE_URL}?method=track.getInfo&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(track)}&api_key=${API_KEY}&format=json`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching track info:', error);
      throw error;
    }
  }
    
    static async fetchAlbum(artist, album) {
  try {
    const response = await fetch(
      `${BASE_URL}?method=album.getinfo&artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching album info:', error);
    throw error;
  }
}


  // Add more methods as needed...
}



export default LastFmApi;
