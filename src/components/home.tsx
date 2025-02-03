import Image from "next/image";
import {spaceMono} from "@/components/fonts";
import {Center, Container, Space, Stack, Title} from "@mantine/core";
import Links from "@/components/links";

export default function Home() {
    return (
        <Stack justify={'center'} gap={'lg'}>
            {/* kinda wonky... todo: figure out a better way here*/}
            <Space h="xl"/>
            <Space h="xl"/>
            <Center>
                <Image
                    src={"/Mike_Fushimi_Inari_20191009_160250.jpg"}
                    alt={"Me on my 2019 solo trip to Japan"}
                    width={3456}
                    height={4608}
                    style={{
                        display: 'block',
                        borderRadius: '10%',
                        height : '30%',
                        width: '30%',
                    }}
                />
            </Center>
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
