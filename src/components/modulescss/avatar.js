const avatar = {
  Root: `
    inline-flex items-center justify-center
    align-middle
    rounded-full
    select-none
    font-normal
    text-sm leading-none
    overflow-hidden
    h-8 w-8

    text-slate-900 dark:text-white
    bg-slate-200 dark:bg-slate-900
  `,

  Image: `
    object-cover
    w-full h-full
  `,

  Fallback: `
    flex items-center justify-center
    w-full h-full
    text-sm
  `,
};

export default avatar;