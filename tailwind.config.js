/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins:['Poppins'],
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark',
      {
        myTheme: {
           
          "primary": "#4c98ce",
          

 
          "secondary": "#53b8c6",
                    
          
           
          "accent": "#6a6a6a",
                    
          
           
          "neutral": "#4d6376",
                    
          
           
          "base-100": "#1e5A85",
                    
          
           
          "info": "#e9e9e9",
                    
          
           
          "success": "#16a249",
                    
          
           
          "warning": "#db7706",
                    
          
           
          "error": "#dc2828",
        }
      }
    ]
  }
}

