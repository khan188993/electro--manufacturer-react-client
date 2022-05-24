module.exports = {
   content: ['./src/**/*.{html,js}'],
   theme: {
      extend: {},
   },
   daisyui: {
      themes: [
        //Light Theme Color 
         // {
         //    mytheme: {
         //       primary: '#1a8ae6',
         //       secondary: '#653aff',
         //       accent: '#653aff',
         //       neutral: '#1E1D2A',
         //       'base-100': '#ffffff',
         //       info: '#6D87E3',
         //       success: '#41E6D0',
         //       warning: '#F1C227',
         //       error: '#FA3F1E',
         //    },
         // },

         //Dark Theme Color
        //  {
        //     dark: {
        //        primary: '#e0ed31',
        //        secondary: '#3ffccd',
        //        accent: '#a8e283',
        //        neutral: '#28203C',
        //        'base-100': '#F4F3F6',
        //        info: '#6596CD',
        //        success: '#5EE4AE',
        //        warning: '#CD840E',
        //        error: '#E35962',
        //     },
        //  },
        "light", "dark",
      ],
   },
   plugins: [require('daisyui')],
};
