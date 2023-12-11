import Link from "next/link";

export default function RootLayout({ children, parallel }) {
    return (
        <html>
            <head />
            <body>
                <nav
                    style={{
                        display: "flex",
                        gap: "1rem",
                    }}
                >
                    <Link href="/">Home</Link>
                    <Link href="/other">/other</Link>
                </nav>
                {parallel}
                {children}
            </body>
        </html>
    );
}
