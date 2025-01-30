import Image from "next/image";
import {Space_Mono} from "next/font/google";

// TODO: Move to layout
const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: "400"
});

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="justify-items-center flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {/*Center image div*/}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    <Image
                        src={"/Mike_Fushimi_Inari_20191009_160250.jpg"}
                        alt={"Me on my 2019 solo trip to Japan"}
                        width={3456}
                        height={4608}
                        style={{
                            display: 'block',
                            borderRadius: '10%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '30%',
                        }}
                    />
                </div>
                <div
                    style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                    <h1 className={spaceMono.className}>Michael Crinite - Full Stack Software Engineer - Under Construction</h1>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.github.com/mikecrinite"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/github.svg"
                        alt="Github icon"
                        width={16}
                        height={16}
                    />
                    Github
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://www.linkedin.com/in/michael-crinite-98ba6b132/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/linkedin.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    LinkedIn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/Mike_Crinite_2025_01_30.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Resume
                </a>
            </footer>
        </div>
    );
}
