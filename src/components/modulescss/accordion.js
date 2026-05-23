const accordion = {
  Accordion: `
    box-border
    flex flex-col
    w-full max-w-80

    border border-slate-900 dark:border-slate-100

    text-slate-900 dark:text-slate-100
    bg-white dark:bg-slate-900
  `,

  Item: `
    border-t border-slate-900 dark:border-slate-100

    first:border-t-0
  `,

  Header: `
    m-0
  `,

  Trigger: `
    box-border
    flex items-center justify-between gap-4
    group
    w-full
    px-3 py-2
    m-0

    border-none
    bg-transparent

    text-left
    text-sm leading-5 font-normal
    font-inherit

    text-slate-900 dark:text-slate-100

    select-none

    hover:bg-slate-200 dark:hover:bg-slate-800

    focus-visible:relative
    focus-visible:z-10
    focus-visible:outline-2
    focus-visible:outline-slate-900
    dark:focus-visible:outline-slate-100
  `,

  Icon: `
    transition-transform duration-100 ease-out

    group-data-[panel-open]:rotate-45

  `,

  Panel: `
    box-border
    overflow-hidden

    h-[var(--accordion-panel-height)]

    text-sm leading-5

    transition-[height]
    duration-150
    ease-out

    data-[starting-style]:h-0
    data-[ending-style]:h-0
  `,

  Content: `
    px-3 py-2
  `,
};

export default accordion;