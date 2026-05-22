const autocomplete = {
  Input: `
    box-border
    w-64 h-8
    px-4 m-0
    
    bg-slate-100 dark:bg-slate-900
    text-slate-900 dark:text-white
    font-normal text-sm leading-5
    font-inherit
    outline-none w-auto
    shadow-fah

    placeholder:text-slate-500 dark:placeholder:text-slate-400

    

    motion-safe:text-base motion-safe:leading-6
    rounded-3xl
  `,

  Label: `
    flex flex-col gap-1 flex-1
    text-sm leading-5 font-bold
    text-slate-900 dark:text-white
    mx-5 
  `,

  Positioner: `
    outline-none 
  `,

  Popup: `
    box-border
    bg-slate-100 dark:bg-slate-900
    text-slate-900 dark:text-white

    w-[var(--anchor-width)]
    max-w-[var(--available-width)]

    border border-slate-900 dark:border-white
    shadow-[0.25rem_0.25rem_0_rgb(0_0_0_/_12%)]
    dark:shadow-none 
  `,

  List: `
    box-border
    overflow-y-auto
    overscroll-contain

    py-1
    max-h-[22.5rem]
    scroll-py-1

    outline-none

    data-[empty]:p-0
  `,

  Item: `
    box-border
    relative
    flex
    cursor-default
    select-none
    outline-none

    px-2 py-2
    text-sm leading-4

    data-[highlighted]:z-0
    data-[highlighted]:text-white
    dark:data-[highlighted]:text-slate-900

    data-[highlighted]:before:content-['']
    data-[highlighted]:before:absolute
    data-[highlighted]:before:inset-0
    data-[highlighted]:before:-z-10
    data-[highlighted]:before:bg-slate-900
    dark:data-[highlighted]:before:bg-white
  `,

  Separator: `
    mx-4 my-1.5
    h-px 
    bg-slate-100 dark:bg-slate-800
  `,

  Empty: `
    box-border
    p-4 pl-2
    text-sm leading-4
    text-slate-500 dark:text-slate-400 
  `,
};

export default autocomplete;