import {spaceMono} from "@/components/fonts";
import {useDisclosure} from "@mantine/hooks";
import {Menu, Container, Center, Group, Burger, Title} from "@mantine/core";
import { IconChevronDown } from '@tabler/icons-react';
import classes from '@/static/Header.module.css';

const links = [
    // { link: '/about', label: 'About' },
    // {
    //     link: '#1',
    //     label: 'Projects',
    //     links: [
    //         { icon: '', link: '/faq', label: 'mebender', external: false },
    //         { icon: '', link: '/demo', label: 'wednesdaybot', external: false },
    //         { icon: '', link: '/forums', label: 'etc', external: false },
    //     ],
    // },
    {
        link: '#2',
        label: 'Links',
        links: [
            { icon: '', link: 'https://www.github.com/mikecrinite', label: 'Github', external: true},
            { icon: '', link: 'https://www.linkedin.com/in/michael-crinite-98ba6b132/', label: 'LinkedIn', external: true},
            { icon: '', link: '/Mike_Crinite_2025_02_18.pdf', label: 'Resume', external: true}
        ],
    },
    // {
    //     link: '#2',
    //     label: 'Hobbies',
    //     links: [
    //         { link: '/docs', label: 'Photography' },
    //         { link: '/resources', label: 'Music' },
    //         { link: '/community', label: 'Woodworking' },
    //         { link: '/blog', label: 'Etc' },
    //     ],
    // },
];

export default function Header() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => {
            if(item.external) {
                return <a key={item.label}
                          href={`${item.link}`}
                          style={{textDecoration: 'none'}}
                          target="_blank"><Menu.Item>{item.label}</Menu.Item></a>
            }else {
                return <Menu.Item key={item.link}>{item.label}</Menu.Item>
            }

        });

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size={14} stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header} style={{ position: 'fixed', top: '0', width: '100%' }}>
            <Container size="md">
                <div className={classes.inner}>
                    <div style={{padding: '2px'}}>
                        <Title order={5} className={`${spaceMono.className}`}>Michael Crinite</Title>
                    </div>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                    </Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
                </div>
            </Container>
        </header>
    );
}