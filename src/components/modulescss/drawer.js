const drawer = {
   Button: `
  group
  relative
  box-border flex items-center justify-center gap-2
  m-0 mx-2
  h-8 w-8
  rounded-full

  bg-slate-100 dark:bg-slate-900
  text-slate-900 dark:text-white

  text-sm font-normal leading-none whitespace-nowrap
  select-none font-inherit

  data-[disabled]:text-slate-400
  dark:data-[disabled]:text-slate-500

  focus-visible:outline-2
  focus-visible:outline-slate-900
  dark:focus-visible:outline-white
  focus-visible:outline-offset-[-1px]

`,

   Overlay: `
     absolute inset-0
  z-10
  rounded-full
  pointer-events-none

  shadow-fah

  group-active:shadow-fahActive
transition-all
duration-200
`,

    Backdrop: `
    fixed inset-0
    min-h-dvh
    bg-black

    opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))]

    transition-opacity
    duration-[450ms]
    ease-[cubic-bezier(0.32,0.72,0,1)]

    dark:[--backdrop-opacity:0.7]
    [--backdrop-opacity:0.2]

    data-[starting-style]:opacity-0
    data-[ending-style]:opacity-0

    data-[swiping]:transition-none
  `,

    Viewport: `
    fixed inset-0
    flex justify-end
    p-0
    supports-[(-webkit-touch-callout:none)]:p-[0.625rem]
  `,

    Popup: `
    box-border
    w-[calc(20rem+3rem)]
    max-w-[calc(100vw-3rem+3rem)]
    h-full

    p-6 pr-[calc(1.5rem+3rem)]
    -mr-[3rem]

    border-l border-slate-900 dark:border-white
    bg-white dark:bg-slate-900
    text-slate-900 dark:text-white

    shadow-[0.25rem_0.25rem_0_rgb(0_0_0_/_12%)]
    dark:shadow-none

    overflow-y-auto
    overscroll-contain
    outline-none

    will-change-transform
    transition-transform duration-[450ms]
    ease-[cubic-bezier(0.32,0.72,0,1)]

    data-[swiping]:select-none

    data-[starting-style]:translate-x-[calc(100%-3rem)]
    data-[ending-style]:translate-x-[calc(100%-3rem)]

    supports-[(-webkit-touch-callout:none)]:border
    supports-[(-webkit-touch-callout:none)]:mr-0
  `,

    Content: `
    w-full max-w-2xl
    mx-auto
  `,

    Title: `
    mt-0 mb-1
    text-base font-bold leading-6
  `,

    Description: `
    m-0 mb-6
    text-sm leading-5
    text-slate-600 dark:text-slate-400
  `,

    Actions: `
    flex justify-end gap-3
  `,
};

export default drawer;