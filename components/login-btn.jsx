import { useSession, signIn, signOut } from 'next-auth/react'

export default function AuthLogin() {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <img src={session.user.image} at="auth profile picture" className="h-14 w-14" />
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign In</button>
        </>
    )
}