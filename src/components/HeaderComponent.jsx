import { header } from "motion/react-client";
import navigationMenu from './modulescss/navigationMenu.js'
import { NavigationMenu } from "@base-ui/react";

export function HeaderComponent() {
    return (
        <header className="dark:text-slate-50">
            <NavigationMenu.Root className={navigationMenu.Root}>
                <NavigationMenu.List className={`${navigationMenu.List} `}>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className={`${navigationMenu.Trigger}`}>
                            Overview
                            <NavigationMenu.Icon className={navigationMenu.Icon}>
                                <CaretDownIcon />
                            </NavigationMenu.Icon>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className={navigationMenu.Content}>
                            <ul className={navigationMenu.GridLinkList}>
                                {overviewLinks.map((item) => (
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