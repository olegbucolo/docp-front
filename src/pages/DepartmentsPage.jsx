import axios from 'axios';
import "./DepartmentsPage.css"
import { Accordion } from '@base-ui/react';
import accordion from './modulescss/accordion.module.css';
import drawer from './modulescss/drawer.module.css'
import { Drawer } from '@base-ui/react';

const fah = 'shadow-fah transition-all duration-200';
// const fahHover = '';
const fahHover = 'hover:shadow-fahHover active:shadow-fahActive';
// const fah = '';
// const localFah = 'shadow-s';
const localFah = '';

export function DepartmentsPage() {
    return (
        <>
            <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4">

                <div className={`${fah} ${fahHover} bg-orange-300 rounded-xl p-4`}>
                    1
                </div>

                <div className={`${fah} ${fahHover} bg-blue-300 rounded-xl p-4 row-span-2`}>
                    Row Span 2
                </div>

                <div className={`${fah} ${fahHover} bg-green-300 rounded-xl p-4`}>
                    3
                </div>

                <div className={`${fah} ${fahHover} bg-red-300 rounded-xl p-4`}>
                    4
                </div>

                <div className={`${fah} ${fahHover} bg-purple-300 rounded-2xl p-4`}>
                    A
                </div>

                <div className={`${fah} ${fahHover} bg-pink-300 rounded-2xl p-4`}>
                    B
                </div>

                <div className={`${fah} ${fahHover} bg-yellow-300 rounded-2xl p-4`}>
                    C
                </div>

                <div className={`${fah} ${fahHover} bg-cyan-300 rounded-2xl p-4`}>
                    D
                </div>

                <div className={`${fah} ${fahHover} bg-slate-300 rounded-xl p-4`}>
                    6
                </div>

                <div className={`${fah} ${fahHover} bg-indigo-300 rounded-xl p-4`}>
                    7
                </div>

                <div className={`${fah} ${fahHover} bg-teal-300 rounded-xl p-4`}>
                    8
                </div>

            </div>
            <Accordion.Root className={`ACC-ROOT ${accordion.Accordion}`}>
                <Accordion.Item className={`ACC-ITEM ${accordion.Item}`}>
                    <Accordion.Header className={accordion.Header}>
                        <Accordion.Trigger className={accordion.Trigger}>
                            What is Base UI?
                            <PlusIcon className={accordion.Icon} />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className={`ACC-PANEL ${accordion.Panel}`}>
                        <div className={accordion.Content}>
                            Base UI is a library of high-quality unstyled React components for design systems and
                            web apps.
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={accordion.Item}>
                    <Accordion.Header className={accordion.Header}>
                        <Accordion.Trigger className={accordion.Trigger}>
                            How do I get started?
                            <PlusIcon className={accordion.Icon} />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className={accordion.Panel}>
                        <div className={accordion.Content}>
                            Head to the “Quick start” guide in the docs. If you’ve used unstyled libraries before,
                            you’ll feel at home.
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={accordion.Item}>
                    <Accordion.Header className={accordion.Header}>
                        <Accordion.Trigger className={accordion.Trigger}>
                            Can I use it for my project?
                            <PlusIcon className={accordion.Icon} />
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className={accordion.Panel}>
                        <div className={accordion.Content}>Of course! Base UI is free and open source.</div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion.Root>

            <Accordion.Root className={accordion.Root}>
                <Accordion.Item className={accordion.Item}>
                    <Accordion.Header className={`${accordion.Header} `}>
                        <Accordion.Trigger className={`${accordion.Trigger}`}>
                            Fahhhhhh
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className={`${accordion.Panel} p-4 rounded-xl ${fah} ${fahHover}`}>
                        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus porro asperiores unde earum reprehenderit sapiente id quisquam quaerat est fugiat qui, quasi molestiae corporis tenetur magnam alias obcaecati! Atque delectus velit sapiente adipisci incidunt nisi, culpa debitis vero odit suscipit iste praesentium ipsam ipsum explicabo, tempore, asperiores accusantium eaque natus!</div>
                    </Accordion.Panel>
                </Accordion.Item>

            </Accordion.Root>

            <Drawer.Root swipeDirection="right">
                <Drawer.Trigger className={drawer.Button}>Open drawer</Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Backdrop className={drawer.Backdrop} />
                    <Drawer.Viewport className={drawer.Viewport}>
                        <Drawer.Popup className={drawer.Popup}>
                            <Drawer.Content className={drawer.Content}>
                                <Drawer.Title className={drawer.Title}>Drawer</Drawer.Title>
                                <Drawer.Description className={drawer.Description}>
                                    This is a drawer that slides in from the side. You can swipe to dismiss it.
                                </Drawer.Description>
                                <div className={drawer.Actions}>
                                    <Drawer.Close className={drawer.Button}>Close</Drawer.Close>
                                </div>
                            </Drawer.Content>
                        </Drawer.Popup>
                    </Drawer.Viewport>
                </Drawer.Portal>
            </Drawer.Root>

        </>
    )
}

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
