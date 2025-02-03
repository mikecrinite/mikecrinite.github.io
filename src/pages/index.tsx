import Home from "@/components/home";
import {Center} from "@mantine/core";
import Header from "@/components/header";

export default function HomePage() {
    return (
        <>
            <Header/>
            <Center>
                <Home/>
            </Center>
        </>
    );
}