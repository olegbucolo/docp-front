import { header } from "motion/react-client";
import navigationMenu from './modulescss/navigationMenu.js'
import { NavigationMenu } from "@base-ui/react";
import api from '../config/api/api.js'
import { useState, useEffect } from "react";
import { Menu } from "@base-ui/react";
import menu from './modulescss/menu.js'

export function HeaderComponent() {

    const [departments, setDepartments] = useState([])

    useEffect(() => {
        api.get("/departments")
            .then(res => {
                console.log(res.data);
                console.log(Array.isArray(res.data));
                setDepartments(res.data);
            })
            .catch(err => {
                console.log('ERROR IN HeaderComponent with /departments: ', err.message)
            })
    }, [])

    return (
        <header className="container mx-auto px-4 dark:text-slate-50 flex justify-between">
            <NavigationMenu.Root className={navigationMenu.Root}>
                <NavigationMenu.List className={`${navigationMenu.List} `}>

                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className={`${navigationMenu.Trigger}`}>
                            Departments
                            <NavigationMenu.Icon className={navigationMenu.Icon}>
                                <CaretDownIcon />
                            </NavigationMenu.Icon>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className={navigationMenu.Content}>
                            <ul className={navigationMenu.GridLinkList}>
                                {departments.map((item) => (

                                    <li key={item.id}>
                                        <Link className={navigationMenu.LinkCard} href={item.id}>
                                            <h3 className={navigationMenu.LinkTitle}>{item.name}</h3>
                                            <p className={navigationMenu.LinkDescription}>{item.description}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item value="b">
                        <NavigationMenu.Trigger className={navigationMenu.Trigger}>
                            Handbook
                            <NavigationMenu.Icon className={navigationMenu.Icon}>
                                <CaretDownIcon />
                            </NavigationMenu.Icon>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className={navigationMenu.Content}>
                            <ul className={navigationMenu.FlexLinkList}>
                                {handbookLinks.map((item) => (
                                    <li key={item.href}>
                                        <Link className={navigationMenu.LinkCard} href={item.href}>
                                            <h3 className={navigationMenu.LinkTitle}>{item.title}</h3>
                                            <p className={navigationMenu.LinkDescription}>{item.description}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <Link className={navigationMenu.Trigger} href="https://github.com/mui/base-ui">
                            GitHub
                        </Link>
                    </NavigationMenu.Item>
                </NavigationMenu.List>

                <NavigationMenu.Portal>
                    <NavigationMenu.Positioner
                        className={navigationMenu.Positioner}
                        sideOffset={10}
                        collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
                        collisionAvoidance={{ side: 'none' }}
                    >
                        <NavigationMenu.Popup className={navigationMenu.Popup}>
                            <NavigationMenu.Arrow className={navigationMenu.Arrow} />
                            <NavigationMenu.Viewport className={navigationMenu.Viewport} />
                        </NavigationMenu.Popup>
                    </NavigationMenu.Positioner>
                </NavigationMenu.Portal>
            </NavigationMenu.Root>
            <Menu.Root>
                <Menu.Trigger className={menu.Button}>
                    Theme <CaretDownIcon />
                </Menu.Trigger>
                <Menu.Portal>
                    <Menu.Positioner className={menu.Positioner} sideOffset={8}>
                        <Menu.Popup className={menu.Popup}>
                            <Menu.Item onClick={() => setTheme("dark")} className={menu.Item}>Dark</Menu.Item>
                            <Menu.Item onClick={() => setTheme("light")} className={menu.Item}>Light</Menu.Item>
                        </Menu.Popup>
                    </Menu.Positioner>
                </Menu.Portal>
            </Menu.Root>
        </header>
    )
}

function Link(props) {
    return (
        <NavigationMenu.Link
            render={
                // Use the `render` prop to render your framework's Link component
                // for client-side routing.
                // e.g. `<NextLink href={props.href} />` instead of `<a />`.
                <a />
            }
            {...props}
        />
    );
}

function CaretDownIcon(props) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            {...props}
            style={{ display: 'block', ...props.style }}
        >
            <path d="M12 6H4l4 4.5z" />
        </svg>
    );
}

const overviewLinks = [
    {
        href: '/react/overview/quick-start',
        title: 'Quick Start',
        description: 'Install and assemble your first component.',
    },
    {
        href: '/react/overview/accessibility',
        title: 'Accessibility',
        description: 'Learn how we build accessible components.',
    },
    {
        href: '/react/overview/releases',
        title: 'Releases',
        description: 'See what’s new in the latest Base UI versions.',
    },
    {
        href: '/react/overview/about',
        title: 'About',
        description: 'Learn more about Base UI and our mission.',
    },
];

const handbookLinks = [
    {
        href: '/react/handbook/styling',
        title: 'Styling',
        description:
            'Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.',
    },
    {
        href: '/react/handbook/animation',
        title: 'Animation',
        description:
            'Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.',
    },
    {
        href: '/react/handbook/composition',
        title: 'Composition',
        description:
            'Base UI components can be replaced and composed with your own existing components.',
    },
];