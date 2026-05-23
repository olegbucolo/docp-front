const separator = {
    Container: `
    flex
    gap-4
    whitespace-nowrap
    relative pt-2
  `,

    Separator: `
    absolute inset-0
     bg-slate-300 dark:bg-slate-700

  data-[orientation=horizontal]:h-px
  data-[orientation=horizontal]:w-full

  data-[orientation=vertical]:w-px
  data-[orientation=vertical]:h-full
    
  `,

    Link: `
    text-sm leading-5
    text-slate-900 dark:text-white

    no-underline
    decoration-slate-300 dark:decoration-slate-700
    decoration-1
    underline-offset-2

    hover:underline

    focus-visible:outline-2
    focus-visible:outline-slate-900
    dark:focus-visible:outline-white
    focus-visible:outline-offset-2
  `,
};

export default separator;