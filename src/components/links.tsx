import {Container, Grid} from "@mantine/core";
import Image from "next/image";

export default function Links() {
    return (
        <Container>
            <Grid justify={"center"} align={"center"}>
                <Grid.Col span={'content'}>
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
                            width={64}
                            height={64}
                        />
                    </a>
                </Grid.Col>
                <Grid.Col span={'content'}>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://www.linkedin.com/in/michael-crinite-98ba6b132/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/linkedin.svg"
                            alt="LinkedIn icon"
                            width={64}
                            height={64}
                        />
                    </a>
                </Grid.Col>
                <Grid.Col span={'content'}>
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
                            width={64}
                            height={64}
                        />
                    </a>
                </Grid.Col>
            </Grid>
        </Container>
    )
}