import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/models/User";
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
      await connectDB();
      //check if user exists
      const userExists = await User.findOne({ email: profile.email });
      //if not create user
      if (!userExists) {
        //truncate username if long
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      //return true to allow sign in
      return true;
    },
    //Session callback function that modifies the session object
    async session({ session }) {
      // Get user from database
      //Assign user id from the session
    },
  },
};
