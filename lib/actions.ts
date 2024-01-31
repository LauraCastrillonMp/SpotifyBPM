const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

export async function getAccessToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(client_id + ":" + client_secret),
    },
    body: "grant_type=refresh_token&refresh_token=" + refresh_token,
  });
  return response.json();
}

export async function getPlaylists(accessToken: string) {
  const response = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
  return response.json();
}

export async function getPlaylistTracks(accessToken: string, playlistId: string) {
  const response = await fetch(
    "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks",
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
  return response.json();
}

export async function getTrack(accessToken: string, trackId: string) {
  const response = await fetch(
    "https://api.spotify.com/v1/tracks/" + trackId, 
    {
        headers: {
        Authorization: "Bearer " + accessToken,
        },
    }
  );
  return response.json();
}

export async function searchTracks(accessToken: string, query: string) {
  const response = await fetch(
    "https://api.spotify.com/v1/search?q=" + query + "&type=track",
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );
  return response.json();
}
