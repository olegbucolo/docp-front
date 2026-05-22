const menu = {
  Button: `
    box-border flex items-center justify-center gap-1.5
    h-8 px-1 m-0
    bg-slate-100 dark:bg-slate-900
    text-slate-900 dark:text-white
    text-sm font-normal leading-none whitespace-nowrap
    select-none outline-none

    transition-al
    duration-200

    active:bg-slate-300 dark:active:bg-slate-700

    data-[popup-open]:bg-slate-200
    dark:data-[popup-open]:bg-slate-800

    data-[disabled]:text-slate-400
    data-[disabled]:border-slate-400

    dark:data-[disabled]:text-slate-500
    dark:data-[disabled]:border-slate-500

    focus-visible:outline-2
    focus-visible:outline-slate-900
    dark:focus-visible:outline-white
    focus-visible:outline-offset-[-1px]
  `,

  Positioner: `
    outline-none
  `,

  Popup: `
    box-border relative outline-none
    py-1
    border border-slate-900 dark:border-slate-100
    bg-slate-100 dark:bg-slate-900
    text-slate-900 dark:text-white

    shadow-[0.25rem_0.25rem_0_rgb(0_0_0_/_12%)]
    dark:shadow-none

    origin-[var(--transform-origin)]

    transition-all duration-100 ease-out

    data-[starting-style]:opacity-0
    data-[starting-style]:scale-[0.98]

    data-[ending-style]:opacity-0
    data-[ending-style]:scale-[0.98]
  `,

  Item: `
    relative z-0
    flex cursor-default select-none
    px-4 pr-8 py-2
    text-sm leading-4
    outline-none

    data-[highlighted]:text-white
    dark:data-[highlighted]:text-slate-900

    before:content-['']
    before:absolute
    before:inset-y-0
    before:left-1
    before:right-1
    before:-z-10

    data-[highlighted]:before:bg-slate-900
    dark:data-[highlighted]:before:bg-white

    data-[disabled]:text-slate-400
    dark:data-[disabled]:text-slate-500
  `,

  Separator: `
    mx-1 my-1 h-px
    bg-slate-900 dark:bg-white
  `,
};

export default menu;