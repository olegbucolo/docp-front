const form = {
  Form: `
    flex flex-col gap-4
    w-full max-w-64
  `,

  Field: `
    flex flex-col items-start gap-1
  `,

  Label: `
    text-sm leading-5 font-bold
    text-slate-900 dark:text-white
  `,

  Input: `
    box-border
    w-full h-8
    px-2 m-0
    border border-slate-900 dark:border-white
    bg-slate-100 dark:bg-slate-900
    text-slate-900 dark:text-white
    font-normal text-sm leading-5
    font-inherit

    placeholder:text-slate-500 dark:placeholder:text-slate-400

    focus:outline-2
    focus:outline-slate-900
    dark:focus:outline-white
    focus:outline-offset-[-1px]

    motion-safe:text-base motion-safe:leading-6
  `,

  Error: `
    text-sm leading-5
    text-red-600 dark:text-red-400
  `,

  Button: `
    box-border flex items-center justify-center gap-2
    h-8 px-3 m-0
    border border-slate-900 dark:border-white
    bg-slate-100 dark:bg-slate-900
    text-slate-900 dark:text-white
    text-sm font-normal leading-none
    select-none
    outline-none

    hover:bg-slate-200 dark:hover:bg-slate-800
    active:bg-slate-300 dark:active:bg-slate-700

    data-[disabled]:text-slate-400
    data-[disabled]:border-slate-400
    dark:data-[disabled]:text-slate-500
    dark:data-[disabled]:border-slate-500

    focus-visible:outline-2
    focus-visible:outline-slate-900
    dark:focus-visible:outline-white
    focus-visible:outline-offset-[-1px]
  `,
};

export default form;