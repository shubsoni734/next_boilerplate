"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    const [mounted, setMounted] = useState(false)

    // Ensure we only render after the client-side has mounted
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // Optionally, render null or a loading state until the theme is applied
        return <>{children}</>
    }

    return (
        <NextThemesProvider attribute="class" defaultTheme="system" {...props}>
            {children}
        </NextThemesProvider>
    )
}
