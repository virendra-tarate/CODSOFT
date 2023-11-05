import img1 from './Images/textbg.png'
import './App.css';

function App() {
  return (
    <>
      <Navebar />
      <HomeScreen />
      <PricingScreen />
      <br /><br />
      <h3 id='servicesTitle' style={{ color: 'beige', textAlign: 'center' }}>Services</h3>
      <br /><br /><br />
      <Services />
      <br /><br />
      <h5 id='getStartedTitle' style={{color:'rgb(240, 214, 180)', textAlign:'center'}}>Join 2,002,312 Website Owners</h5>
      <br/><br/>
      
      <br/><br/>
      <SignUPForm/>
      <br/><br/><br />
      <Footer />
    </>
  );
}

function Navebar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div id='nav' class="container-fluid">
          <a id='hosting-name' class="navbar-brand">ABC Hosting</a>
          <button style={{color:'rgb(224, 214, 234)', backgroundColor:'white'}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" style={{cursor:'pointer'}}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#servicesTitle">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#pricingTitle">Prices</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hosting
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Web Hosting</a></li>
                  <li><a class="dropdown-item" href="#">Cloud Hosting</a></li>
                  <li><a class="dropdown-item" href="#">VPS Hosting</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Log in</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


function HomeScreen() {
  return (
    <>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 style={{ color: 'white' }} class="display-4 font-weight-normal">Welcome to ABC Hosting</h1>
          <p style={{ color: 'rgb(193, 193, 193)' }} class="lead font-weight-normal">This is Just a clone website of hosting websites like hostinger for my codesoft projects.</p>
          <a class="btn btn-outline-secondary" href="#getStartedTitle">Get Started</a>
        </div>
        <div id='ratingContainer'>
          <div id='googleRating'>
            <h4>Google</h4>
            <Ratings1 />
          </div>
          <div id='amazonRating'>
            <h4>Amazon</h4>
            <Ratings2 />
          </div>
          <div id='microsoftRating'>
            <h4>Microsoft</h4>
            <Ratings1 />
          </div>

        </div>
        <div class="product-device box-shadow d-none d-md-block"></div>
        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>
    </>
  );
}

function Ratings1() {
  return (

    <>
      <span class="fa fa-star starChecked"></span>
      <span class="fa fa-star starChecked"></span>
      <span class="fa fa-star starChecked"></span>
      <span class="fa fa-star starChecked"></span>
      <span class="fa fa-star starUnchecked"></span>
    </>

  );
}

function Ratings2() {
  return (

    <>
      <span class="fa fa-star starChecked"></span>
      <span class="fa fa-star starChecked"></span>
      <span class="fa fa-star starChecked"></span>
      <span class="fa fa-star starUnchecked"></span>
      <span class="fa fa-star starUnchecked"></span>
    </>

  );
}

function PricingScreen() {
  return (
    <>
      <h2 id='pricingTitle'>Select Your Web Hosting Package</h2>
      <div id='cardContainer'>
        {/* First Card */}

        <div class="card" style={{ width: '18rem' }}>

          <div class="card-body">
            <h5 class="card-title">Premium</h5>
            <p class="card-text">Everything you need to create your website.</p>
            <br />
            <h4 style={{ textAlign: 'center' }}>&#8377; 129.00 /mo</h4>
            <br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a style={{ textAlign: 'center' }} href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i style={{ color: 'orange' }}>&#10003;</i> Standard Performance</li>
            <li class="list-group-item"><i style={{ color: 'orange' }}>&#10003;</i> 100 Websites</li>
            <li class="list-group-item"><i style={{ color: 'orange' }}>&#10003;</i> 100 GB SSD Storage</li>
            <li class="list-group-item"><i style={{ color: 'orange' }}>&#10003;</i> Weekly Backups</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Unlimited Free SSL</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Unlimited Bandwidth</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Free Email</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Free Domain (₹799.00 value)</li>
            <li class="list-group-item"><i style={{ color: 'red' }}>&#10006;</i> Free CDN</li>
            <li class="list-group-item"><i style={{ color: 'red' }}>&#10006;</i> Dedicated IP Address</li>
          </ul>

        </div>


        {/* Second Card */}

        <div class="card" style={{ width: '18rem' }}>

          <div class="card-body">
            <h5 class="card-title">Business</h5>
            <p class="card-text">Level-up with more power and enhanced features.</p>
            <br />
            <h4 style={{ textAlign: 'center' }}>&#8377; 249.00 /mo</h4>
            <br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a style={{ textAlign: 'center' }} href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Increased Performance (Up to 5x)</li>
            <li class="list-group-item"><i style={{ color: 'orange' }}>&#10003;</i> 100 Websites</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> 200 GB NVMe Storage</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Daily Backups (₹1,380.00 value)</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Unlimited Free SSL</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Unlimited Bandwidth</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Free Email</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Free Domain (₹799.00 value)</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Free CDN</li>
            <li class="list-group-item"><i style={{ color: 'red' }}>&#10006;</i> Dedicated IP Address</li>
          </ul>

        </div>



        {/* Third Card */}

        <div class="card" style={{ width: '18rem' }}>

          <div class="card-body">
            <h5 class="card-title">Cloud Startup</h5>
            <p class="card-text">Enjoy optimised performance & guaranteed resources.</p>
            <br />
            <h4 style={{ textAlign: 'center' }}>&#8377; 699.00 /mo</h4>
            <br /><br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a style={{ textAlign: 'center' }} href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Maximum Performance (Up to 10x)</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> 300 Websites</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> 200 GB NVMe Storage</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Daily Backups (₹1,380.00 value)</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Unlimited Free SSL</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Unlimited Bandwidth</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Free Email</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Free Domain (₹799.00 value)</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Free CDN</li>
            <li class="list-group-item"><i style={{ color: 'green' }}>&#10003;</i> Dedicated IP Address</li>
          </ul>

        </div>


      </div>
    </>
  );
}


function Services() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>This is First Service</h5>
              <p>Some thing about First Service.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second Service</h5>
              <p>Some thing about Second Service.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third Service</h5>
              <p>Some thing about Third Service.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}


function Footer() {
  return (
    <>
      <footer class="py-5" id='myFooter'>
        <div class="row border-top">
          <div class="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top border-bottom">
          <p>&copy; All Rights Reserved. Website Created By Tarate Virendra For Codesoft Intership.</p>
        </div>
        <div class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top border-bottom">
          <p>This Website is Created by using React.js And Bootstrap.</p>
        </div>
      </footer>
    </>
  );
}


function SignUPForm(){
  return (
    <>
      <form class="row g-3" id='form'>
      <div class="col-md-6">
          
          <input type="email" placeholder='First Name' class="form-control" id="inputFirstName"/>
        </div>
        <div class="col-md-6">
          
          <input type="email" placeholder='Last Name' class="form-control" id="inputLastName"/>
        </div>
        <div class="col-md-6">
          <input type="email" placeholder='Email' class="form-control" id="inputEmail4"/>
        </div>
        <div class="col-md-6">
          <input type="number" placeholder='Mobile Number' class="form-control" id="inputPassword4"/>
        </div>
        <div class="col-6">
          
          <input type="text" class="form-control" id="inputAddress" placeholder="Address line 1"/>
        </div>
        <div class="col-6">
          
          <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2"/>
        </div>
        <div class="col-md-3">
          <input type="text" placeholder='City' class="form-control" id="inputCity"/>
        </div>
        <div class="col-md-3">
          <select id="inputState" class="form-select">
            <option selected>State</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-3">
          <select id="inputState" class="form-select">
            <option selected>Choose Plan</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-3">
          <input type="text" placeholder='ZIP Code' class="form-control" id="inputZip"/>
        </div>
        <div class="col-12" style={{display:'flex', justifyContent:'center'}}>
          <button type="submit" class="btn btn-primary">Submit Secure Payment</button>
        </div>
      </form>
    </>
  );
}


export default App;
