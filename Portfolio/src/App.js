import logo from './Images/logo.png'
import lifeImg from './Images/life.png'
import './App.css';

function App() {
  return (
    <>
      <Navebar />
      <br />
      <Home />
      <br /><br /><br />
      <About />
      <br /><br /><br />
      <Skill />
      <br /><br /><br />
      <Project />
      <br /><br /><br />
      <ContactForm />
      <br /><br /><br /><br />
      <Footer />
    </>
  );
}


//Navebar Here
function Navebar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgb(132, 47, 189)' }} data-bs-theme="dark">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <img id='imgLogo' src={logo} />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" style={{ cursor: 'pointer' }}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#About">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Skill">Skill</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Project">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#Contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


// Home Here
function Home() {
  return (
    <>
      <div id='Home'>
        <div id='homeDiv'>
          <h1>Hi I'm <span id='name'>Tarate Virendra</span></h1>
          <br /><br />
          <span id='text'>I take pride in creating innovative and user-friendly applications that leave
            a lasting impact on users. I am always eager to learn and adapt to new trends in
            the ever-evolving world of software development.</span>
          <br /><br /><br />
          <SocialMedia />
          <br />
          <a className='btn btn-outline-secondary' target='_blank' href='https://drive.google.com/file/d/0B5dV8zLbW7VBc3RhcnRlcl9maWxl/view?usp=drive_link&resourcekey=0-94f_tCHzAL68dfVoL98utw'>Download CV</a>
        </div>

        <img id='imgDiv' src={lifeImg} />

      </div>
    </>
  );
}

// social Media 
function SocialMedia() {
  return (
    <>
      <div class="parent">
      <a target='_blank' href='https://www.linkedin.com/in/virendra-tarate-88595b253'>
        <div class="child child-1">
          <button class="button btn-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            
            </svg>
          </button>
        </div>
        </a>
        <a target='_blank' href='https://instagram.com/virendra.tarate.devloper'>
        <div class="child child-2">
          <button class="button btn-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#ff00ff"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></button>
        </div>
        </a>
        <a target='_blank' href='https://github.com/virendra-tarate'>
        <div class="child child-3">
          <button class="button btn-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></button>
        </div>
        </a>
      </div>

    </>
  );
}

// About Section
function About() {
  return (
    <>
      <div id='About'>
        <img id='aboutImgDiv' src={lifeImg} />

        <div id='aboutDiv'>
          <h1>About</h1>
          <br /><br />
          <span id='text'>
            I have a strong foundation in Information Technology and have
            honed my skills through hands-on experience in various projects.
            My journey began with web development, where I mastered HTML, CSS, and
            JavaScript, building responsive and visually appealing websites that cater to diverse
            audiences. Over time, I felt the need to explore the mobile world, and that's when I ventured
            into Android app development. Since then, I have been crafting intuitive and feature-rich apps
            that have garnered positive reviews on the OPPO App Market And XIAOMI Getapps.
          </span>
          <br /><br /><br />
          <br />
        </div>
      </div>
    </>
  );
}

// Skill Here
function Skill() {
  return (
    <>
      <div id='Skill'>
        <h1>Skills</h1>
        <br /><br />
        <div id='skillContainer'>
          <div>
            <h3>Web Development</h3>
            <div style={{ width: '45%' }} class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: '87%' }}>87%</div>
            </div>
          </div>
          <br /><br />
          <div>
            <h3>Android Application Development</h3>
            <div style={{ width: '45%' }} class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: '74%' }}>74%</div>
            </div>
          </div>
          <br /><br />
          <div>
            <h3>Java Programming</h3>
            <div style={{ width: '45%' }} class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: '80%' }}>80%</div>
            </div>
          </div>
          <br /><br />
          <div>
            <h3>Python Programming</h3>
            <div style={{ width: '45%' }} class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{ width: '76%' }}>76%</div>
            </div>
          </div>
          <br /><br />
        </div>
      </div>
    </>
  );
}

// Project
function Project() {
  return (
    <>
      <div id='Project'>
        <h1 style={{ textAlign: 'center' }}>Projects</h1>
        <br /><br />
        <div id='cardContainer'>
          {/* 1st Card */}
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h5 class="card-title">YT Downloader</h5>
              <p class="card-text">YT Downloader is an Android app that allows you to download YouTube videos for offline viewing. With an intuitive interface and fast download speeds, it's a convenient tool for saving your favorite videos directly to your device.</p>
              <a target='_blank' href="https://github.com/virendra-tarate/YT-Downloader" class="btn btn-primary">View on Github</a>
            </div>
          </div>
          {/* /// */}

          {/* 2nd Card */}
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h5 class="card-title">Stack Tower</h5>
              <p class="card-text">Stack Tower is a fun and addictive Android game where your goal is to build the tallest tower possible. Test your timing and precision as you stack blocks on top of each other. Be careful, though, as any misplaced block can lead to a wobbly tower or even its collapse!</p>
              <a target='_blank' href="https://github.com/virendra-tarate/Stack-Tower" class="btn btn-primary">View on Github</a>
            </div>
          </div>
          {/* /// */}


          {/* 3rd Card */}
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h5 class="card-title">Tic Tac Toe</h5>
              <p class="card-text">Tic Tac Toe is a classic two-player game where you can challenge your friends or test your strategic skills. The objective of the game is to get three of your symbols in a row, either horizontally, vertically, or diagonally.</p>
              <a target='_blank' href="https://github.com/virendra-tarate/Tic-Tac-Toe-Android" class="btn btn-primary">View on Github</a>
            </div>
          </div>
          {/* /// */}


          {/* 4th Card */}
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h5 class="card-title">Cube Crusher 3D</h5>
              <p class="card-text">Cube Crusher 3D is an exciting and addictive Android game where your objective is to crush cubes and achieve the highest score possible. The game is designed to challenge your reflexes and strategic thinking, making it a perfect choice for players of all ages.</p>
              <a target='_blank' href="https://github.com/virendra-tarate/Cube-Crusher-3D" class="btn btn-primary">View on Github</a>
            </div>
          </div>
          {/* /// */}


          {/* 5th Card */}
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h5 class="card-title">PassGen-Pro</h5>
              <p class="card-text">A simple Password Generator app that generates strong and secure passwords for your online accounts.Generate strong and secure passwords effortlessly with the Password Generator App. This simple yet powerful tool allows you to create complex passwords tailored to your needs.</p>
              <a target='_blank' href="https://github.com/virendra-tarate/PassGen-Pro" class="btn btn-primary">View on Github</a>
            </div>
          </div>
          {/* /// */}


          {/* 6th Card */}
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h5 class="card-title">Anonymous Browser</h5>
              <p class="card-text">Welcome to the Anonymous Browser app repository! This app allows users to browse the internet privately and anonymously, protecting their identity and online activities.</p>
              <a target='_blank' href="https://github.com/virendra-tarate/Anonymous-Browser" class="btn btn-primary">View on Github</a>
            </div>
          </div>
          {/* /// */}

          {/* 7th Card */}
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-body">
              <h5 class="card-title">QuickChat</h5>
              <p class="card-text">The QuickChat is a secure and private messaging platform that uses the Advanced Encryption Standard (AES) to protect all messages exchanged between users. This app offers users the ability to communicate with each other in a secure and confidential manner, ensuring that their conversations remain private and cannot be accessed by anyone else.</p>
              <a target='_blank' href="https://github.com/virendra-tarate/Anonymous-Browser" class="btn btn-primary">View on Github</a>
            </div>
          </div>
          {/* /// */}
        </div>
      </div>
    </>
  );
}

// Contact Form
function ContactForm() {
  return (
    <>
      <div id='Contact'>
        <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
        <br /><br />
        <div id='ContactContainer'>
          <form>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="your Name" />
              <label for="floatingInput">Your Name</label>
            </div>
            <br />
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <br />
            <div class="form-floating mb-6">

              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Write Your Message ...' rows="3"></textarea>
              <label for="exampleFormControlTextarea1">Write Message Here</label>
            </div>
            <br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// Footer
function Footer() {
  return (
    <>
      <footer class="py-5" id='myFooter'>
        <div class="d-flex justify-content-center py-4 border-top border-bottom">
          <p>&copy; All Rights Reserved by Tarate Virendra.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
