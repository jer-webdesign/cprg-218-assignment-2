const graphicsImage = document.getElementById('graphics-image');
const descriptionText = document.getElementById('description-text');

// Select buttons
const buttons = [
  document.getElementById('introduction'),
  document.getElementById('mastering-sculpting'),
  document.getElementById('assets-development'),
  document.getElementById('expanding-3d-horizons'),
];

// Event listeners for introduction
document.getElementById('introduction').addEventListener('click', function () {
 // Update body class name
 document.body.className = 'introduction';

  // Update image and description
  graphicsImage.src = 'jack_nicholson.jpg';
  graphicsImage.alt = 'Jack Nicholson 3D Graphics Image';
  descriptionText.innerHTML = `
   <h2>Early 3D Achievements</h2> 
  <p>My journey into 3D graphics began in 2007 when I developed an interest in 3D modeling and character animation. 
      To learn the basics, I took a short certification course at 3DSense School of Digital Art in Singapore. 
      There, I was introduced to Autodesk Maya, a powerful tool for 3D design. 
      My first project was creating a character animation walk cycle, where I practiced the principles of animation. 
      This project helped me understand the importance of movement and timing in bringing characters to life.</p>
  <p>After that, I joined a game development project where I created 3D assets and props. 
      We used the Truevision game engine and Ogre3D for the game, and I also contributed by programming in C++. 
      Working on this project taught me how to combine creativity and technical skills to build interactive experiences.</p>
  <p>A big highlight of my journey was participating in an online CGFeedback 3D challenge. 
      The task was to model and render Jack Nicholson. To my surprise and excitement, 
      I won the challenge! This experience helped me improve my skills and gave me the chance to connect with talented 
      3D artists from around the world. The feedback I received during the process was incredibly helpful and inspired me 
      to keep improving.</p>    
  <p>These early experiences taught me a lot and fueled my passion for creating in the world of 3D graphics.</p>`;
  
  // Reset buttons background color
  buttons[0].style.backgroundColor = '#33fefe';
  buttons[1].style.backgroundColor = '#bad6d6';
  buttons[2].style.backgroundColor = '#bad6d6';
  buttons[3].style.backgroundColor = '#bad6d6';
});

// Event listeners for mastering-sculpting
document.getElementById('mastering-sculpting').addEventListener('click', function () {
  // Update body class name
  document.body.className = 'mastering-sculpting';

  // Update image and description
  graphicsImage.src = 'aztec_warlord.jpg';
  graphicsImage.alt = 'Aztec Warlord 3D Graphics Image';
  descriptionText.innerHTML = `
   <h2>Mastering 3D Sculpting</h2> 
    <p>Between 2012 and 2013, I continued to grow my skills and explore new areas in 3D graphics. In addition to hard surface modeling, 
    I started learning 3D sculpting, which opened up new creative possibilities for me. I used Mudbox, a sculpting tool originally created by 
    Weta Digital and later acquired by Autodesk, and ZBrush, developed by Pixologic (now owned by Maxon). 
    Both tools are powerful and offer unique features. I liked Mudbox because of its simple and user-friendly interface, 
    which made it easy to learn and use. On the other hand, ZBrush stood out for its ability to handle very detailed work, making it perfect 
    for creating complex and intricate designs.</p>
    <p>During this period, I participated in the Gnomon Workshop Challenge, which had a 'Fantasy Warlord' theme. The challenge required artists 
    to come up with their own original concepts and designs for a character. I was fascinated by the Aztec civilization and chose an Aztec warrior 
    as the inspiration for my character concept. Drawing from the rich history and culture of the Aztecs, I focused on creating a warrior design 
    that combined elaborate ceremonial elements with battle-ready armor.</p>
    <p>To my excitement, I won 2nd place in the challenge! Winners were allowed to select DVD tutorials from Gnomon’s extensive library, 
    which were shipped to their home countries based on their rank.</p>
    <p>Winning 2nd place was a proud moment for me. The process of researching the Aztec civilization and bringing their warrior culture to life in
    a unique design was both inspiring and rewarding. The challenge pushed me to think creatively and improve my concept design skills. This experience, 
    combined with my work in Mudbox and ZBrush, helped me deepen my understanding of 3D sculpting and character creation, laying a strong foundation for future projects.</p>`;
  
  // Reset buttons background color
  buttons[0].style.backgroundColor = '#bad6d6';
  buttons[1].style.backgroundColor = '#33fefe';
  buttons[2].style.backgroundColor = '#bad6d6';
  buttons[3].style.backgroundColor = '#bad6d6';
});

// Event listeners for assets-development
document.getElementById('assets-development').addEventListener('click', function () {
  // Update body class
  document.body.className = 'assets-development';

  // Update image and description
  graphicsImage.src = 'pegasus_helmet.jpg';
  graphicsImage.alt = 'Pegasus Helmet 3D Graphics Image';
  descriptionText.innerHTML = `
  <h2>3D Assets Development</h2>
    <p>I joined the Gnomon Workshop 3D Monthly Challenge, which had the theme "Fantasy Helm." For my entry, I created the Pegasus Helm, inspired by the mythical winged 
    horse and the epic style of The Lord of the Rings.</p>
    <p>The helmet had beautiful wings made of shiny silver and gold, designed to show the grace and power of Pegasus. The wings were decorated with detailed feather 
    patterns, and the helmet itself had carvings that made it look both majestic and magical. I added weathered textures to make it feel like an ancient relic, as if 
    it had been used in great battles.</p>
    <p>I carefully balanced shiny metal parts with worn, aged details to give the helmet a sense of history and beauty. Working on this project helped me improve my 3D modeling 
    and texturing skills. Placing 3rd in the challenge was a proud achievement. It enhanced my 3D modeling, texturing, and overall 3D asset development skills while motivating me 
    to continue creating fantasy-inspired designs for games and storytelling.</p>`;
  
  // Reset buttons background color
  buttons[0].style.backgroundColor = '#bad6d6';
  buttons[1].style.backgroundColor = '#bad6d6';
  buttons[2].style.backgroundColor = '#33fefe';
  buttons[3].style.backgroundColor = '#bad6d6';
});

// Event listeners for expanding-3d-horizons
document.getElementById('expanding-3d-horizons').addEventListener('click', function () {
  // Update body class
  document.body.className = 'expanding-3d-horizons';

  // Update image and description
  graphicsImage.src = 'mutant.jpg';
  graphicsImage.alt = 'Mutant Head 3D Graphics Image';
  descriptionText.innerHTML = `
  <h2>Expanding 3D Horizons</h2>
    <p>I participated in the Gnomon Workshop 3D Monthly Challenge with the theme "Mutant Head Study." I created a mutant character that was both disturbing and emotional, 
    set in a sterile, clinical environment.</p>
    <p>I used ZBrush for sculpting the character, focusing on distorted features to tell a story of pain and experimentation. For texturing, I relied on Mudbox to add realistic 
    skin details, scars, and imperfections. The final render was done in Autodesk 3DS Max using Arnold, where I set up dramatic lighting to enhance the cold, clinical atmosphere.</p>
    <p>Placing 2nd in the challenge was a proud moment. It helped me sharpen my skills in sculpting, texturing, and rendering, and motivated me to keep creating 3D characters with 
    unique stories.</p>
    <p>In addition to these experiences, I’ve expanded my 3D skills by learning Blender, a powerful open-source software for creating 3D models, animations, and visual effects. 
    I recently used Blender to create 3D popcorn commercials in our Digital Media class at the Southern Alberta Institute of Technology. Blender has added a new layer of versatility 
    to my workflow, and I’m excited to continue exploring its robust features in future projects.</p>`;

  
  // Reset buttons background color
  buttons[0].style.backgroundColor = '#bad6d6';
  buttons[1].style.backgroundColor = '#bad6d6';
  buttons[2].style.backgroundColor = '#bad6d6';
  buttons[3].style.backgroundColor = '#33fefe';
});


 // Trigger the click event for the Introduction button on page load
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('introduction').click();
});






