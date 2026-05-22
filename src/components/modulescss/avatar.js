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
    shadow-fah
    
 relative
  inline-flex items-center justify-center
  align-middle
  rounded-full
  overflow-hidden
  h-8 w-8
    
  `,

  Image: `
    object-cover
    w-full h-full
    
     absolute inset-0
  w-full h-full
  object-cover
  z-0
  `,



  Fallback: `
    flex items-center justify-center
    w-full h-full
    text-sm

    bg-slate-100 dark:bg-slate-800

  `,
};

export default avatar;