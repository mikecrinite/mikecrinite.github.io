import Image from "next/image";
import {spaceMono} from "@/components/fonts";
import {Container, Space, Stack, Title} from "@mantine/core";
import Links from "@/components/links";

export default function Home() {
    return (
        <Stack justify={'center'} gap={'lg'}>
            <Space h="lg" />
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
                    height : '30%',
                    width: '30%',
                }}
            />
            <Container>
                <Title order={1} className={`${spaceMono.className}`}>
                    Michael Crinite
                </Title>
            </Container>
            <Container>
                <Title order={3} className={`${spaceMono.className}`}>
                    Full Stack Software Engineer
                </Title>
            </Container>
            <Links/>
        </Stack>
    );
}
