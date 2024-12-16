import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          respone_type: "code",
        },
      },
    }),
  ],
  callback: {
    //Invoked on successful signup
    async signIn({ profile }) {
      //conect to the database
      //check if user exists
      //if not create user
      //return true to allow sign in
    },
    //Session callback function that modifies the session object
    async session({ session }) {
      // Get user from database
      //Assign user id from the session
    },
  },
};
