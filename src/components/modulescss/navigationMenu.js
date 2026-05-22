const navigationMenu = {
  Root: `
    box-border min-w-max
    text-slate-900 dark:text-white
  `,

  List: `
    flex relative gap-[1px]
    list-none p-0 m-0
  `,

  Trigger: `
    box-border flex items-center justify-center gap-1.5
    h-8 px-3 max-[500px]:px-2
    text-sm font-normal leading-5
    bg-transparent text-slate-900 dark:text-white
    select-none text-decoration-none

    hover:bg-slate-100 dark:hover:bg-slate-900

    data-[popup-open]:bg-slate-100 dark:data-[popup-open]:bg-slate-900

    focus-visible:outline-2 focus-visible:outline-slate-900
    dark:focus-visible:outline-white
  `,

  Icon: `
    flex items-center justify-center
    transition-transform duration-200
    data-[popup-open]:rotate-180
  `,

  Positioner: `
    box-border
    w-[var(--positioner-width)]
    h-[var(--positioner-height)]
    max-w-[var(--available-width)]

    transition-[top,left,right,bottom]
    duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

    data-[instant]:transition-none

    before:content-[''] before:absolute
  `,

  Popup: `
    relative box-border overflow-visible
    w-[var(--popup-width)] h-[var(--popup-height)]
    origin-[var(--transform-origin)]

    border border-slate-900 dark:border-white
    bg-white dark:bg-slate-900
    text-slate-900 dark:text-white

    shadow-[0.25rem_0.25rem_0_rgba(0,0,0,0.12)]
    dark:shadow-none

    transition-[opacity,transform,width,height]
    duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

    data-[starting-style]:opacity-0 data-[ending-style]:opacity-0
    data-[starting-style]:scale-90 data-[ending-style]:scale-90

    data-[ending-style]:duration-150 data-[ending-style]:ease-out
  `,

  Content: `
    box-border
    p-2
    w-[calc(100vw-40px)] max-[500px]:max-w-[400px]
    min-[500px]:w-max

    transition-opacity duration-150 ease-out
    transition-transform

    data-[starting-style]:opacity-0 data-[ending-style]:opacity-0

    data-[activation-direction=left]:data-[starting-style]:-translate-x-1/2
    data-[activation-direction=right]:data-[starting-style]:translate-x-1/2

    data-[activation-direction=left]:data-[ending-style]:translate-x-1/2
    data-[activation-direction=right]:data-[ending-style]:-translate-x-1/2
  `,

  Viewport: `
    relative overflow-hidden w-full h-full
  `,

  GridLinkList: `
    grid grid-cols-2 max-[500px]:grid-cols-1
    list-none p-0 m-0
  `,

  FlexLinkList: `
    flex flex-col justify-center
    max-w-[400px]
    list-none p-0 m-0
  `,

  LinkCard: `
    block w-full h-full p-2
    text-left bg-transparent border-0
    text-inherit

    hover:bg-slate-100 dark:hover:bg-slate-900

    data-[popup-open]:bg-slate-100 dark:data-[popup-open]:bg-slate-900

    focus-visible:outline-2 focus-visible:outline-slate-900
    dark:focus-visible:outline-white
  `,

  LinkTitle: `
    m-0 mb-1
    text-sm font-normal leading-4
  `,

  LinkDescription: `
    m-0
    text-sm leading-5
    text-slate-500 dark:text-slate-300
  `,

  Arrow: `
    relative block w-[12px] h-[6px]
    overflow-hidden

    transition-[left,right] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]

    before:content-['']
    before:block before:absolute
    before:bottom-0 before:left-1/2
    before:w-[8.48px] before:h-[8.48px]
    before:border before:border-slate-900 dark:before:border-white
    before:bg-white dark:before:bg-slate-900
    before:translate-x-[-50%] before:translate-y-[50%]
    before:rotate-45

    data-[side=top]:rotate-180 data-[side=top]:-bottom-[6px]
    data-[side=bottom]:rotate-0 data-[side=bottom]:-top-[6px]
    data-[side=left]:rotate-90 data-[side=left]:-right-[9px]
    data-[side=right]:-rotate-90 data-[side=right]:-left-[9px]
  `,
};

export default navigationMenu;