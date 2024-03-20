export async function getPlaylists() {
    const response = await fetch(
        "https://api.spotify.com/v1/me/playlists",
        {
            headers: {
                Authorization: `Bearer ${process.env.SPOTIFY_REFRESH_TOKEN}`,
            },
        }
    );
    const data = await response.json();
    return data;
}