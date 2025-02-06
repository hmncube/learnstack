import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || '',
            clientSecret: process.env.GOOGLE_SECRET || '',
          }),
    ],
    pages: {
        signIn: '/auth/signup',
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
    },
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
