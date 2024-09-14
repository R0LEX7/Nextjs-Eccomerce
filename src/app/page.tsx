'use client'

import { UserButton, UserProfile, useUser } from '@clerk/nextjs'
import { SignIn } from '@clerk/nextjs';



export default function Home() {

  const { isLoaded, isSignedIn, user } = useUser()


  console.log("user " , user)
  if (!isLoaded || !isSignedIn) {
    return null
  }
  return (
    <>
  <SignIn path="/sign_in" routing="path" signUpUrl="/sign-up" redirectUrl="/" />

  <UserButton/>

    </>
  );
}
