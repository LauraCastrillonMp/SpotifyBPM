import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorizationUrl: "https://accounts.spotify.com/authorize",
      profileUrl: "https://api.spotify.com/v1/me",
      scopes: ["user-read-email", "user-read-private", "playlist-read-private", "playlist-read-collaborative"],
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session
    }
  }
})

export { handler as GET, handler as POST }