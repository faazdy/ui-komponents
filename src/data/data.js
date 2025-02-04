export const generalComponents = [
    {
      "id": 1,
      "title": "Button Primary",
      "description": "Un botón estilizado con hover",
      "code": "<button class='btn-primary'>Click Me</button>",
      "style": ".btn-primary { background: #007BFF; color: white; border: none; padding: 10px 20px; border-radius: 5px; }"
    },
    {
      "id": 2,
      "title": "Card Component",
      "description": "Un diseño de tarjeta simple",
      "code": "<div class='card'><h3>Card Title</h3><p>Card content...</p></div>",
      "style": ".card { border: 1px solid #ddd; padding: 20px; border-radius: 5px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }"
    }
  ]

  export const shadows = [
    { id: 1, styles: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", author: "Alice" },
    { id: 2, styles: "rgba(149, 157, 165, 0.2) 0px 8px 24px", author: "Bob" },
    { id: 3, styles: "rgba(0, 0, 0, 0.35) 0px 5px 15px", author: "Charlie" },
    { id: 4, styles: "rgba(0, 0, 0, 0.16) 0px 1px 4px", author: "David" },
    { id: 5, styles: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", author: "Emma" },
    { id: 6, styles: "rgba(0, 0, 0, 0.1) 0px 4px 12px", author: "Frank" },
    { id: 7, styles: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px", author: "Grace" },
    { id: 8, styles: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", author: "Hank" },
    { id: 9, styles: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px", author: "Ivy" },
    { id: 10, styles: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", author: "Jack" },
    { id: 11, styles: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px", author: "Karen" },
    { id: 12, styles: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", author: "Liam" },
    { id: 13, styles: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px", author: "AAA" },
    { id: 14, styles: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px", author: "BBB" }
  ];

  export const buttons = [
    {
      id: 1,
      classname: "button1",
      styles: `button{ \n background: #e0e0e0; \n color: #333; \n box-shadow: 4px 4px 8px #b8b8b8, -4px -4px 8px #ffffff; \n transition: 0.3s ease-in-out; \n} \nbutton:hover{ \n box-shadow: inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #ffffff; \n}`
    },
    {
      id: 2,
      classname: "button2",
      styles: `button{ \n background: rgb(54, 141, 255); \n color: white; \n transition: background 0.3s ease-in-out; \n} \nbutton:hover{ \n background: rgb(0, 110, 255); \n}`
    },
    {
      id: 3,
      classname: "button3",
      styles: `button{ \n background: linear-gradient(90deg, #9500ff, #ff00ff); \n color: white; \n border-radius: 30px; \n padding: 0.75em 1.5em; \n transition: background 0.3s ease-in-out; \n} \nbutton:hover{ \n background: linear-gradient(90deg, #ff00ff, #9500ff); \n}`
    },
    {
      id: 4,
      classname: "button4",
      styles: `button{ \n background: black; \n color: #00ffea; \n border: 2px solid #00ffea; \n text-transform: uppercase; \n letter-spacing: 2px; \n position: relative; \n overflow: hidden; \n} \nbutton::before{ \n content: ""; \n position: absolute; \n top: 0; \n left: -100%; \n width: 100%; \n height: 100%; \n background: rgba(0, 255, 234, 0.2); \n transition: left 0.3s ease-in-out; \n} \nbutton:hover::before{ \n left: 100%; \n}`
    },
    {
      id: 5,
      classname: "button5",
      styles: `button{ \n background: #ff4747; \n color: white; \n border-radius: 10px; \n padding: 10px 20px; \n font-weight: bold; \n box-shadow: 0px 4px 15px rgba(255, 71, 71, 0.4); \n transition: transform 0.2s ease-in-out; \n} \nbutton:hover{ \n transform: scale(1.1); \n}`
    },
    {
      id: 6,
      classname: "button6",
      styles: `button{ \n background: transparent; \n color: #ff6347; \n border: 2px solid #ff6347; \n padding: 10px 20px; \n border-radius: 5px; \n transition: background 0.3s ease-in-out, color 0.3s ease-in-out; \n} \nbutton:hover{ \n background: #ff6347; \n color: white; \n}`
    },
    {
      id: 7,
      classname: "button7",
      styles: `button{ \n background: #008080; \n color: white; \n border-radius: 50px; \n padding: 12px 24px; \n font-weight: bold; \n transition: all 0.3s ease-in-out; \n} \nbutton:hover{ \n box-shadow: 0px 4px 20px rgba(0, 128, 128, 0.6); \n transform: translateY(-3px); \n}`
    },
    {
      id: 8,
      classname: "button8",
      styles: `button{ \n background: linear-gradient(45deg, #ff6b6b, #f06595); \n color: white; \n border: none; \n padding: 12px 24px; \n border-radius: 8px; \n font-weight: bold; \n box-shadow: 0px 5px 15px rgba(240, 101, 149, 0.4); \n transition: all 0.3s ease-in-out; \n} \nbutton:hover{ \n filter: brightness(1.2); \n}`
    },
    {
      id: 9,
      classname: "button9",
      styles: `button{ \n background: rgb(140,238,254); \n background: linear-gradient(107deg, rgba(140,238,254,1) 38%, rgba(204,132,255,1) 77%); \n border-radius: 20px; \n padding: 12px 24px; \n font-weight: bold; \n color: white; \n transition: .3s all ease; \n}\n button:hover{ \n filter: brightness(1.3); \n color: black;\n box-shadow: 4px 8px 4px 1px rgba(207, 111, 252, 0.363); \n}`
    },
    {
      id: 10,
      classname: "button10",
      styles: `button{\n padding: 13px;\n background-color: rgb(255, 187, 0);\n border-radius: 10px;\n transition: .2s all ease-in; \n} \nbutton:hover{ \n box-shadow: 4px 8px 1px black; \n transform: translateY(-5px); \n}`
    },
    {
      id: 11,
      classname: "button11",
      styles: `button{ \n padding: 1em;\n background-color: #272727;\n color: #eeee;\n border: 1px solid #272727;\n transition: .2s background; \n} \n button:hover{ \n  background-color: transparent;\n color: #272727;\n}`
    },
    {
      id: 12,
      classname: "button12",
      styles: `button{\n padding: 1em; \n background-color: transparent; \n color: #272727; \n border: 1px solid #272727; \n transition: .2s background;\n } \nbutton:hover{ \n background-color: #272727;\n color: #eeee;\n }`
    }
  ];


  
  
