export const shadows = [
  {
    id: 1,
    styles: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    author: "Alice",
  },
  { id: 2, styles: "rgba(149, 157, 165, 0.2) 0px 8px 24px", author: "Bob" },
  { id: 3, styles: "rgba(0, 0, 0, 0.35) 0px 5px 15px", author: "Charlie" },
  { id: 4, styles: "rgba(0, 0, 0, 0.16) 0px 1px 4px", author: "David" },
  { id: 5, styles: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", author: "Emma" },
  { id: 6, styles: "rgba(0, 0, 0, 0.1) 0px 4px 12px", author: "Frank" },
  {
    id: 7,
    styles: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    author: "Grace",
  },
  {
    id: 8,
    styles:
      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    author: "Hank",
  },
  {
    id: 9,
    styles:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    author: "Ivy",
  },
  {
    id: 10,
    styles:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
    author: "Jack",
  },
  {
    id: 11,
    styles:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    author: "Karen",
  },
  {
    id: 12,
    styles:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    author: "Liam",
  },
  { id: 13, styles: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px", author: "AAA" },
  {
    id: 14,
    styles:
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    author: "BBB",
  },
];

export const buttons = [
  {
    id: 1,
    classname: "button1",
    styles: `button{ \n background: #e0e0e0; \n color: #333; \n box-shadow: 4px 4px 8px #b8b8b8, -4px -4px 8px #ffffff; \n transition: 0.3s ease-in-out; \n} \nbutton:hover{ \n box-shadow: inset 4px 4px 8px #b8b8b8, inset -4px -4px 8px #ffffff; \n}`,
  },
  {
    id: 2,
    classname: "button2",
    styles: `button{ \n background: rgb(54, 141, 255); \n color: white; \n transition: background 0.3s ease-in-out; \n} \nbutton:hover{ \n background: rgb(0, 110, 255); \n}`,
  },
  {
    id: 3,
    classname: "button3",
    styles: `button{ \n background: linear-gradient(90deg, #9500ff, #ff00ff); \n color: white; \n border-radius: 30px; \n padding: 0.75em 1.5em; \n transition: background 0.3s ease-in-out; \n} \nbutton:hover{ \n background: linear-gradient(90deg, #ff00ff, #9500ff); \n}`,
  },
  {
    id: 4,
    classname: "button4",
    styles: `button{ \n background: black; \n color: #00ffea; \n border: 2px solid #00ffea; \n text-transform: uppercase; \n letter-spacing: 2px; \n position: relative; \n overflow: hidden; \n} \nbutton::before{ \n content: ""; \n position: absolute; \n top: 0; \n left: -100%; \n width: 100%; \n height: 100%; \n background: rgba(0, 255, 234, 0.2); \n transition: left 0.3s ease-in-out; \n} \nbutton:hover::before{ \n left: 100%; \n}`,
  },
  {
    id: 5,
    classname: "button5",
    styles: `button{ \n background: #ff4747; \n color: white; \n border-radius: 10px; \n padding: 10px 20px; \n font-weight: bold; \n box-shadow: 0px 4px 15px rgba(255, 71, 71, 0.4); \n transition: transform 0.2s ease-in-out; \n} \nbutton:hover{ \n transform: scale(1.1); \n}`,
  },
  {
    id: 6,
    classname: "button6",
    styles: `button{ \n background: transparent; \n color: #ff6347; \n border: 2px solid #ff6347; \n padding: 10px 20px; \n border-radius: 5px; \n transition: background 0.3s ease-in-out, color 0.3s ease-in-out; \n} \nbutton:hover{ \n background: #ff6347; \n color: white; \n}`,
  },
  {
    id: 7,
    classname: "button7",
    styles: `button{ \n background: #008080; \n color: white; \n border-radius: 50px; \n padding: 12px 24px; \n font-weight: bold; \n transition: all 0.3s ease-in-out; \n} \nbutton:hover{ \n box-shadow: 0px 4px 20px rgba(0, 128, 128, 0.6); \n transform: translateY(-3px); \n}`,
  },
  {
    id: 8,
    classname: "button8",
    styles: `button{ \n background: linear-gradient(45deg, #ff6b6b, #f06595); \n color: white; \n border: none; \n padding: 12px 24px; \n border-radius: 8px; \n font-weight: bold; \n box-shadow: 0px 5px 15px rgba(240, 101, 149, 0.4); \n transition: all 0.3s ease-in-out; \n} \nbutton:hover{ \n filter: brightness(1.2); \n}`,
  },
  {
    id: 9,
    classname: "button9",
    styles: `button{ \n background: rgb(140,238,254); \n background: linear-gradient(107deg, rgba(140,238,254,1) 38%, rgba(204,132,255,1) 77%); \n border-radius: 20px; \n padding: 12px 24px; \n font-weight: bold; \n color: white; \n transition: .3s all ease; \n}\n button:hover{ \n filter: brightness(1.3); \n color: black;\n box-shadow: 4px 8px 4px 1px rgba(207, 111, 252, 0.363); \n}`,
  },
  {
    id: 10,
    classname: "button10",
    styles: `button{\n padding: 13px;\n background-color: rgb(255, 187, 0);\n border-radius: 10px;\n transition: .2s all ease-in; \n} \nbutton:hover{ \n box-shadow: 4px 8px 1px black; \n transform: translateY(-5px); \n}`,
  },
  {
    id: 11,
    classname: "button11",
    styles: `button{ \n padding: 1em;\n background-color: #272727;\n color: #eeee;\n border: 1px solid #272727;\n transition: .2s background; \n} \n button:hover{ \n  background-color: transparent;\n color: #272727;\n}`,
  },
  {
    id: 12,
    classname: "button12",
    styles: `button{\n padding: 1em; \n background-color: transparent; \n color: #272727; \n border: 1px solid #272727; \n transition: .2s background;\n } \nbutton:hover{ \n background-color: #272727;\n color: #eeee;\n }`,
  },
];

export const cards = [
  {
    id: 1,
    image: "assets/images/cards/1.png",
    codeText: {
      codeHTML: `<div class="project-card">
        <img src="../image.jpg" alt="image description" />
        <div class="card-content">
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </p>
          <div class="tags">
            <span>Tag 1</span>
            <span>Tag 2</span>
            <span>Tag 3</span>
          </div>
          <a href="#" target="_blank" class="btn">Button URL</a>
        </div>
    </div>`,
      codeCSS: `.project-card {
    width: 300px;
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    transition: transform 0.3s ease;
    font-family: sans-serif;
  }
  
  .project-card:hover {
    transform: scale(1.02);
  }
  
  .project-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-content h3 {
    margin: 0 0 8px;
    font-size: 1.5rem;
    color: #111;
  }
  
  .card-content p {
    font-size: 0.9rem;
    color: #444;
    margin-bottom: 12px;
  }
  
  .tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  
  .tags span {
    background: #f1f1f1;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 0.75rem;
    color: #333;
  }
  
  .btn {
    display: inline-block;
    background: #000;
    color: #fff;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: background 0.3s ease;
  }
  
  .btn:hover {
    background: #333;
  }
  `
    }
  },
  {
    id: 2,
    image: "assets/images/cards/2.png",
    codeText: {
      codeHTML: `<div class="card-glass">
    <h3 class="title">PROJECT TITLE</h3>
    <p class="text">Project description goes here. Short summary of what it does.</p>
    <a href="#" class="link" target="_blank">Live Site →</a>
  </div>`,
      codeCSS: `.card-glass {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    padding: 20px;
    color: #fff;
    max-width: 300px;
    transition: transform 0.3s ease;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .card-glass:hover {
    transform: translateY(-5px);
  }
  
  .card-glass a {
    display: inline-block;
    color: #ff4800;
    text-decoration: none;
    margin-top: 10px;
  }`
    }
  },
  {
    id: 3,
    image: "assets/images/cards/3.png",
    codeText: {
      codeHTML: `<div class="card-terminal">
    <div class="terminal-bar">
      <span class="title">PROJECT TITLE</span> - Project
    </div>
    <div class="terminal-content">
      <p class="text">> Short description of the project</p>
      <p class="text">> Tech stack used (React, CSS, etc)</p>
      <a href="#" class="link" target="_blank">> Launch</a>
    </div>
  </div>`,
      codeCSS: `.card-terminal {
    background: #111;
    color: #0f0;
    font-family: 'Courier New', monospace;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    border: 1px solid #0f0;
  }
  
  .terminal-bar {
    background: #0f0;
    color: #000;
    padding: 8px;
    font-weight: bold;
  }
  
  .terminal-content {
    padding: 16px;
  }
  
  .terminal-content a {
    color: #0f0;
    text-decoration: underline;
  }`
    }
  },
  {
    id: 4,
    image: "assets/images/cards/4.png",
    codeText: {
      codeHTML: `<div class="card-flip">
    <div class="card-inner">
      <div class="card-front">
        <h3 class="title">PROJECT TITLE</h3>
        <p class="text">Short project name/description</p>
      </div>
      <div class="card-back">
        <p class="text">Tech stack | Features</p>
        <a href="#" class="link" target="_blank">View Project</a>
      </div>
    </div>
  </div>`,
      codeCSS: `.card-flip {
    perspective: 1000px;
    width: 250px;
    height: 150px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  
  .card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }
  
  .card-flip:hover .card-inner {
    transform: rotateY(180deg) translateX(-40px);
    
  }
  
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  
  .card-front {
    background: #222;
    color: #fff;
  }
  
  .card-back {
    background: #ffffff;
    color: #000;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }`
    }
  },
  {
    id: 5,
    image: "assets/images/cards/5.png",
    codeText: {
      codeHTML: `<div class="app-card">
    <img src="https://m.media-amazon.com/images/I/61qbMx4oXJL._AC_UF1000,1000_QL80_.jpg" alt="project preview" class="image">
    <div class="info">
      <h4 class="title">PROJECT TITLE</h4>
      <p class="text">Project description with key features.</p>
      <div class="tech text">React · JS · CSS</div>
      <a href="#" class="link" target="_blank">Visit</a>
    </div>
  </div>`,
      codeCSS: `.app-card {
    width: 280px;
    background: #f8f8f8;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    font-family: sans-serif;
  }
  
  .app-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  
  .app-card .info {
    padding: 12px;
  }
  
  .app-card .info h4 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .app-card .info p {
    font-size: 0.85rem;
    color: #555;
  }
  
  .app-card .info .tech {
    font-size: 0.75rem;
    margin: 8px 0;
    color: #888;
  }
  
  .app-card .info a {
    text-decoration: none;
    background: #222;
    color: #fff;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 0.85rem;
    display: inline-block;
  }
  `
    }
  },
  {
    id: 6,
    image: "assets/images/cards/6.png",
    codeText: {
      codeHTML: `<div className='card-bg'>
            <div className=card>
                <div className="info">
                    <h1>Like Apple App Store</h1>
                    <p>Text here, wow!</p>
                </div>
                <div className="info-hidden">
                    <h2>Paradise Island</h2>
                    <p>Experience the ultimate getaway at Paradise Island, where crystal-clear waters meet pristine sandy beaches. Enjoy luxurious accommodations, world-class dining, and a variety of water sports and activities. Whether you're looking to relax or explore, Paradise Island has something for everyone.</p>
                    <button>Button</button>
                </div>
            </div>
        </div>`,
      codeCSS: `.card{
    margin: 0 auto;
    height: 500px;
    max-width: 750px;
    background-image: url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/5c/paradise-island.jpg?w=1400&h=1400&s=1');
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;

    .info, .info-hidden{
        padding: 1em;
    }
    .info-hidden{
        background-color: rgb(39, 39, 39);
        color: white;
        width: 100%;
        /*transform: translateY(-9999px);*/
        display: none;
        transition: all 0.3s ease-in-out;
        animation: fadeIn 0.3s ease-in-out;
        cursor: default;
    }

    &:hover{
        cursor: pointer;
    }
}

.card-bg-active{
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.438);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0; bottom: 0; left: 0; right: 0;
    z-index: 1000;
}

.card-bg{
    width: auto;
    height: auto;
    
}

.active{
    width: 70%;
    height: 600px;

    .info-hidden{
        display: block;
        animation: info 0.5s ease-in-out;
    }
}


@keyframes fadeIn {
    from {
        scale: 0.9;
    }
    to {
        scale: 1;
    }
    
}

@keyframes info{
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`,
      codeJS: `const card = document.querySelector('.card');
      const cardBg = document.querySelector('.card-bg');  
      card.addEventListener('click', () => {
          card.classList.toggle('active');
          cardBg.classList.toggle('card-bg-active');
      });
      `
    }
  }
]
