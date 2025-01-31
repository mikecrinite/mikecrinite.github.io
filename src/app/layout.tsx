import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/header"
import {geistSans, geistMono, spaceMono} from "@/components/fonts";
// import {createTheme, MantineProvider} from '@mantine/core';
// import '@mantine/core/styles.css';

// const theme = createTheme({
//     /** Put your mantine theme override here */
// });

export const metadata: Metadata = {
    title: "Mike Crinite",
    description: "For all things mikecrinite",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            {/*<MantineProvider theme={theme}>*/}
                <body
                        className={`${spaceMono.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
                    >
                        <Header/>
                        {children}
                    </body>
            {/*</MantineProvider>*/}
        </html>
    );
}