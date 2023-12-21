'use client'

import { SessionProvider } from "next-auth/react";

export function MiSessionProvider({children}) {
    return <SessionProvider>{children}</SessionProvider>
}