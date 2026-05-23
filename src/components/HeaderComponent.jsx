import { header } from "motion/react-client";
import navigationMenu from './modulescss/navigationMenu.js'
import { Autocomplete, Avatar, Drawer, NavigationMenu, Accordion } from "@base-ui/react";
import api from '../config/api/api.js'
import { useState, useEffect } from "react";
import { Menu } from "@base-ui/react";
import menu from './modulescss/menu.js'
import avatar from './modulescss/avatar.js'
import drawer from './modulescss/drawer.js'
import { IoIosSettings } from "react-icons/io";
import autocomplete from './modulescss/autocomplete.js'
import { CgClose } from "react-icons/cg";
import accordion from './modulescss/accordion.js'


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
        <header className="container mx-auto px-4 dark:text-slate-50 flex justify-between pt-4">
            <NavigationMenu.Root className={navigationMenu.Root}>
                <NavigationMenu.List className={`${navigationMenu.List} `}>

                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className={`${navigationMenu.Trigger} `}>
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
                            Services
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

            <Autocomplete.Root items={departments}>
                <label className={autocomplete.Label}>
                    <Autocomplete.Input placeholder="cerca qualcosa..." className={` ${autocomplete.Input}`} />
                </label>

                <Autocomplete.Portal >
                    <Autocomplete.Positioner className={autocomplete.Positioner} sideOffset={4}>
                        <Autocomplete.Popup className={autocomplete.Popup}>
                            <Autocomplete.Empty>
                                <div className={autocomplete.Empty}>No tags found.</div>
                            </Autocomplete.Empty>
                            <Autocomplete.List className={autocomplete.List}>
                                {(department) => (
                                    <Autocomplete.Item
                                        key={department.id}
                                        className={autocomplete.Item}
                                        value={department.name}
                                    >
                                        {department.name}
                                    </Autocomplete.Item>
                                )}
                            </Autocomplete.List>
                        </Autocomplete.Popup>
                    </Autocomplete.Positioner>
                </Autocomplete.Portal>
            </Autocomplete.Root>

            {/* 

                <div >
                    <Avatar.Root className={avatar.Root}>
                        <Avatar.Image
                            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
                            width="48"
                            height="48"
                            className={avatar.Image}
                        />
                        <Avatar.Fallback delay={600} className={avatar.Fallback}>
                            LT
                        </Avatar.Fallback>
                    </Avatar.Root>
                    <Avatar.Root className={avatar.Root}>LT</Avatar.Root>
                </div> */}

            <div className="flex">


                {/* <Avatar.Root className={avatar.Root}>LT</Avatar.Root> */}
                <Drawer.Root swipeDirection="right">
                    <Drawer.Trigger className={drawer.Button}>
                        <div className={drawer.Overlay}></div>
                        <Avatar.Root className={avatar.Root}>
                            <Avatar.Image
                                src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
                                width="48"
                                height="48"
                                className={avatar.Image}
                            />
                            <Avatar.Fallback delay={600} className={avatar.Fallback}>
                                LT
                            </Avatar.Fallback>
                        </Avatar.Root>

                    </Drawer.Trigger>
                    <Drawer.Portal>
                        <Drawer.Backdrop className={drawer.Backdrop} />
                        <Drawer.Viewport className={drawer.Viewport}>
                            <Drawer.Popup className={drawer.Popup}>
                                <Drawer.Content className={`${drawer.Content} flex flex-col justify-between min-h-full`}>
                                    <div className="drawer-top flex justify-between">
                                        <Avatar.Root className={`${avatar.Root}`}>
                                            <Avatar.Image
                                                src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
                                                width="48"
                                                height="48"
                                                className={avatar.Image}
                                            />
                                            <Avatar.Fallback delay={600} className={avatar.Fallback}>
                                                LT
                                            </Avatar.Fallback>
                                        </Avatar.Root>
                                        <div className={drawer.Actions}>
                                            <Drawer.Close className={`${drawer.Button}`}>
                                                <CgClose className="h-7 w-6 " />
                                            </Drawer.Close>
                                        </div>
                                    </div>
                                    <div className="drawer-middle flex-1 mt-6">
                                        <NavigationMenu.Root className={navigationMenu.Root}>
                                            <NavigationMenu.List className={`${navigationMenu.List} flex flex-col`} >


                                                <NavigationMenu.Item className={navigationMenu.Item}>
                                                    <Link className={`${navigationMenu.TriggerDrawer}`} href="https://github.com/mui/base-ui">
                                                        Offers
                                                    </Link>
                                                </NavigationMenu.Item>
                                                <NavigationMenu.Item>
                                                    <Link className={navigationMenu.TriggerDrawer} href="https://github.com/mui/base-ui">
                                                        Visits
                                                    </Link>
                                                </NavigationMenu.Item>
                                                <NavigationMenu.Item>
                                                    <Link className={navigationMenu.TriggerDrawer} href="https://github.com/mui/base-ui">
                                                        Reservations
                                                    </Link>
                                                </NavigationMenu.Item>
                                                <NavigationMenu.Item>
                                                    <Link className={navigationMenu.TriggerDrawer} href="https://github.com/mui/base-ui">
                                                        Profile settings
                                                    </Link>
                                                </NavigationMenu.Item>
                                            </NavigationMenu.List>


                                        </NavigationMenu.Root>
                                    
                                    </div>
                                    <div className="flex justify-between">
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
                                        <Menu.Root>
                                            <Menu.Trigger className={menu.Button}>
                                                Lang <CaretDownIcon />
                                            </Menu.Trigger>
                                            <Menu.Portal>
                                                <Menu.Positioner className={menu.Positioner} sideOffset={8}>
                                                    <Menu.Popup className={menu.Popup}>
                                                        <Menu.Item className={menu.Item}>IT</Menu.Item>
                                                        <Menu.Item className={menu.Item}>EN</Menu.Item>
                                                        <Menu.Item className={menu.Item}>FR</Menu.Item>
                                                        <Menu.Item className={menu.Item}>DU</Menu.Item>

                                                    </Menu.Popup>
                                                </Menu.Positioner>
                                            </Menu.Portal>
                                        </Menu.Root>
                                    </div>


                                </Drawer.Content>
                            </Drawer.Popup>
                        </Drawer.Viewport>
                    </Drawer.Portal>
                </Drawer.Root>
            </div>


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

function PlusIcon(props) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            strokeLinejoin="round"
            {...props}
            style={{ display: 'block', ...props.style }}
        >
            <path d="M1.5 8h13M8 14.5v-13" />
        </svg>
    );
}
