import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex justify-center mt-8">
      <SignUp
        signInUrl="/sign-in"
        afterSignUpUrl="/new-user"
      />
    </div>
  )
}
