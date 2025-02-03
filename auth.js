import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authOptions = {
    providers:[Google],
    callbacks:{
         async jwt({ token, account, profile }) {
          //console.log(token,account,profile);
            // When the user signs in for the first time:
            if (account && profile) {
              token.googleId = profile.sub;
            }
            return token;
          },
          async session({ session, token }){
            session.user.googleId = token.googleId || null; // Ensure it's passed to the session

            return session;
          },

    }
};

export const {handlers,signIn,signOut,auth} = NextAuth(authOptions)
