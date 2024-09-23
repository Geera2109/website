import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './Pro.css';
import 'boxicons'



function Pro() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <b className='logo'> Champion </b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 start-50 translate-middle-x position-absolute">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                  <b >HOME</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                  <b>ABOUT US</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                  <b>CONTACT US</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                  <b>BLOG</b>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:"white"}}>
                  <b>REVIEW</b>
                </a>
              </li>
            </ul>
            <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}


<nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <b className='logo' style={{color:"black"}}> Champion </b>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{color:"black"}}>
           <b>HOME</b> 
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#"  style={{color:"black"}}>
         <b>ABOUT US</b>
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"  style={{color:"black"}}>
            <b>BLOG</b>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#"  style={{color:"black"}}>
         <b>SERVICE</b>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"  style={{color:"black"}}>
            <b>CONTACT US</b>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true"  style={{color:"Black"}}>
            <b>REVIEW</b>
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-secondary" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bag.jpg"
          alt="First slide"
          height={670}
          width={500}
        />
        <Carousel.Caption className='hyy' style={{ position:"absolute",marginBottom:"270px", textAlign:"center",}}>
        <h1 className='luxe' style={{ fontSize:"45px"}}><i>Luxe handbags for</i> </h1>
       <h1> <b> Every Season, Every Occasion</b></h1>
        <p style={{fontSize:"20px"}}>A Guide To Stylish Bags For Women</p>
        <button type="button" class="btn btn-outline-secondary shop " style={{marginLeft:"-130px", position:"absolute"}}><b>SHOP FOR COLLACTION</b></button>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bag9.jpg"
          alt="Second slide"
          height={670}
          width={500}
        />

      <Carousel.Caption className='hyy' style={{ position:"absolute",marginBottom:"270px", textAlign:"center",}}>
      <h1 className='luxe' style={{ fontSize:"45px"}}><i>Luxe handbags for</i> </h1>
       <h1> <b> Every Season, Every Occasion</b></h1>
        <p style={{fontSize:"20px"}}>A Guide To Stylish Bags For Women</p>
        <button type="button" class="btn btn-outline-secondary shop" style={{marginLeft:"-130px", position:"absolute"}}><b>SHOP FOR COLLACTION</b></button>
      </Carousel.Caption>


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="bag13.jpg"
          alt="Third slide"
          height={670}
          width={500}
        />

      <Carousel.Caption className='hyy' style={{ position:"absolute",marginBottom:"270px", textAlign:"center",}}>
      <h1 className='luxe' style={{ fontSize:"45px"}}><i>Luxe handbags for</i> </h1>
       <h1> <b>Every Season, Every Occasion</b> </h1>
        <p style={{fontSize:"20px"}}>A Guide To Stylish Bags For Women</p>
        <button type="button" class="btn btn-outline-secondary shop " style={{marginLeft:"-130px", position:"absolute"}}><b>SHOP FOR COLLACTION</b></button>
      </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


<div className='mainp'>

<div className='purse'><b>How it works</b></div>

<p className='say' >Say goodbye to the waste, hassle and guilt of constantly buying clothes that’ll quickly be outgrown. 
  Say hello to Bundlee, the “game-changing” rental service that’s helped thousands of parents just like 
  you to get quality styles, the smart way.</p>

  </div>
 
<div className="d-flex flex-wrap justify-content-center">
      <Card border="primary" style={{ width: "25rem", margin: '30px' }}>
        <Card.Body>
          <img src="rent.png" alt="" height={80} width={80} />
          <Card.Title>Rent</Card.Title>
          <Card.Text>
          Rent sets of quality clothes from premium brands. Pick your favourites or let our experts curate a set for you. Delivered to your door on a convenient date, sealed with our cleanliness guarantee. Plans from £24/month, saving 75% off RRP.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: "25rem", margin: '30px' }}>
        <Card.Body>
        <img src="swap.jpg" alt="" height={80} width={80} />
          <Card.Text>
          <Card.Title>Swap</Card.Title>
          Ready for the next size up? The joy of Bundlee is easily swapping your outgrown clothes set for the next size, whenever you like! Returning outgrown clothes is simple with your free returns and reusable packaging.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="success" style={{ width: "25rem", margin: '30px' }}>
        <Card.Body>
        <img src="hbag.png" alt="" height={80} width={80} />
          <Card.Title>Cleanliness guarantee</Card.Title>
          <Card.Text>
          After each rental, we professionally clean and safely sanitise clothes, sealing them with our cleanliness guarantee so they are ready for the next renting family to love. Together we’re saving the planet, one babygrow at a time!
          </Card.Text>
        </Card.Body>
      </Card>
      </div>


<div className='fam'>
<h1 className='family'>Family Favorites</h1>
<div className='brows'>
<div className="box">
  <p>Browse our edit of premium brands including new season ARKET, Mini Rodini, MORI, Bobo Choses, Stella McCartney and LIEWOOD, available to rent for a fraction of the price.</p>
</div>
      
      </div>
      <div className='brows'>
<div className="box">
  <p>From babygrows and knitwear to dungarees and dresses, you’ll find pieces to suit your style. You can even rent outerwear, swimwear, sleeping bags and shoes! Available from 0 - 3 years.</p>
</div>
      
      </div>
      </div>


      {/* <div className='fan'>
        <div className='fancy'><b>Fancy giving Bundlee a try? Get 50% off your first 2 months!</b></div>
        <img src="fan.webp" alt=""  className='fan1'/>
      </div> */}

      <div className='flov'><b>Families love Bundlee</b></div>
      <div className="d-flex flex-wrap justify-content-center boxx">
      <Card  style={{ width: "20rem", margin: '10px'}} className='heda' >
        <Card.Header>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon></Card.Header>
        <Card.Body>
          <Card.Title>Great quality clothes</Card.Title>
          <Card.Text>
          Love the quality of clothes and the choice and overall concept. Thanks Bundlee
          </Card.Text>
        </Card.Body>
      </Card>

      <Card  style={{ width: "20rem", margin: '10px' }} className='heda1'>
        <Card.Header>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon></Card.Header>
        <Card.Body>
          <Card.Title>We love Bundlee!</Card.Title>
          <Card.Text>
          Perfect way of saving money but also keeping my son well dressed!
           Such a great idea, service and delivery times are excellent.
           I recommend them all the time to friends and family.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "20rem", margin: '10px' }} className='heda2'>
        <Card.Header>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
          </Card.Header>
        <Card.Body>
          <Card.Title>Great for the planet</Card.Title>
          <Card.Text>
          Loving how Bundlee is letting us enjoy clothes knowing they have been used 
          and will be again, being kinder to the environment. Lots of thoughtful details.
           Would massively recommend!
          </Card.Text>
        </Card.Body>
      </Card>

      <Card  style={{ width: "20rem", margin: '10px' }} className='heda3'>
        <Card.Header>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon>
        <box-icon type='solid' name='star'></box-icon></Card.Header>
        <Card.Body>
          <Card.Title>Complimented on  her wardrobe</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Suscipit ipsa inventore asperiores, consequuntur soluta 
          nihil dolor facere minima beatae labore magni nisi quia 
          illo autem velit iusto error excepturi molestias.
          </Card.Text>
        </Card.Body>
      </Card>

    </div>

    <div className='peek'><b>Peek into the styles our members are currently renting...</b></div>
     <p className='season'>This season our Personalised Plan members are loving renting form brands <br /> like MORI, Mini Rodini, ARKET and more! Their
        little ones' wardrobes <br /> are getting gold in the style Olympics with pieces for a sporty summer, holidays <br /> and everyday. Clothes form 0 - 3 years.
     </p>

 {/* <marquee scrollamount="30" direcation="right"><div style={{display:'flex'}}>
     <div className="card" style={{ width: "18rem" }}>
  <img src="s1.webp" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some 
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <img src="s1.webp" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some 
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <img src="s1.webp" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some 
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <img src="s1.webp" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some 
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <img src="s1.webp" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <img src="s1.webp" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some 
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

</div>
</marquee> */}

<marquee scrollamount="30" direction="right
">
<div style={{display:'flex',gap:'20px',width:'2000px'}}>
<div style={styles.card}>
      <img
        src="s1.webp"
        alt="Geometric Structured Hobo Bag"
        style={styles.image}
      />
      <div style={styles.info}>
        <div style={styles.rating}>
          <span>4.6</span>
          <span style={styles.star}>★</span>
          <span> | 1k</span>
        </div>
        <h3 style={styles.title}>max</h3>
        <p style={styles.description}>Geometric Structured Hobo Bag</p>
        <p style={styles.price}>Rs. 599</p>
      </div>
    </div>

    <div style={styles.card}>
      <img
        src="s1.webp"
        alt="Geometric Structured Hobo Bag"
        style={styles.image}
      />
      <div style={styles.info}>
        <div style={styles.rating}>
          <span>4.6</span>
          <span style={styles.star}>★</span>
          <span> | 1k</span>
        </div>
        <h3 style={styles.title}>max</h3>
        <p style={styles.description}>Geometric Structured Hobo Bag</p>
        <p style={styles.price}>Rs. 599</p>
      </div>
    </div>

    <div style={styles.card}>
      <img
        src="s1.webp"
        alt="Geometric Structured Hobo Bag"
        style={styles.image}
      />
      <div style={styles.info}>
        <div style={styles.rating}>
          <span>4.6</span>
          <span style={styles.star}>★</span>
          <span> | 1k</span>
        </div>
        <h3 style={styles.title}>max</h3>
        <p style={styles.description}>Geometric Structured Hobo Bag</p>
        <p style={styles.price}>Rs. 599</p>
      </div>
    </div>

    <div style={styles.card}>
      <img
        src="s1.webp"
        alt="Geometric Structured Hobo Bag"
        style={styles.image}
      />
      <div style={styles.info}>
        <div style={styles.rating}>
          <span>4.6</span>
          <span style={styles.star}>★</span>
          <span> | 1k</span>
        </div>
        <h3 style={styles.title}>max</h3>
        <p style={styles.description}>Geometric Structured Hobo Bag</p>
        <p style={styles.price}>Rs. 599</p>
      </div>
    </div>

<div style={styles.card}>
      <img
        src="s1.webp"
        alt="Geometric Structured Hobo Bag"
        style={styles.image}
      />
      <div style={styles.info}>
        <div style={styles.rating}>
          <span>4.6</span>
          <span style={styles.star}>★</span>
          <span> | 1k</span>
        </div>
        <h3 style={styles.title}>max</h3>
        <p style={styles.description}>Geometric Structured Hobo Bag</p>
        <p style={styles.price}>Rs. 599</p>
      </div>
    </div>

    <div style={styles.card}>
      <img
        src="s1.webp"
        alt="Geometric Structured Hobo Bag"
        style={styles.image}
      />
      <div style={styles.info}>
        <div style={styles.rating}>
          <span>4.6</span>
          <span style={styles.star}>★</span>
          <span> | 1k</span>
        </div>
        <h3 style={styles.title}>max</h3>
        <p style={styles.description}>Geometric Structured Hobo Bag</p>
        <p style={styles.price}>Rs. 599</p>
      </div>
    </div>
    <div style={styles.card}>
      <img
        src="s1.webp"
        alt="Geometric Structured Hobo Bag"
        style={styles.image}
      />
      <div style={styles.info}>
        <div style={styles.rating}>
          <span>4.6</span>
          <span style={styles.star}>★</span>
          <span> | 1k</span>
        </div>
        <h3 style={styles.title}>max</h3>
        <p style={styles.description}>Geometric Structured Hobo Bag</p>
        <p style={styles.price}>Rs. 599</p>
      </div>
    </div>
    <div style={styles.card}>
      <img
        src="s1.webp"
        alt="Geometric Structured Hobo Bag"
        style={styles.image}
      />
      <div style={styles.info}>
        <div style={styles.rating}>
          <span>4.6</span>
          <span style={styles.star}>★</span>
          <span> | 1k</span>
        </div>
        <h3 style={styles.title}>max</h3>
        <p style={styles.description}>Geometric Structured Hobo Bag</p>
        <p style={styles.price}>Rs. 599</p>
      </div>
    </div>

    </div>
    </marquee>
     <div className='personal'><b>Personalised Plan is currently : FULL</b></div>
     <p className='limit'>We open up a limited number of Personalised Plan memberships every </p>
     <p className='thos'>season to those on our Waitlist.</p>
     <div className='why'> <b>Why become a member? </b></div>
     <p className='many'>There are many reasons why Families choose to become members of Bundlee, <br/>
      the UK's most loved rental serivce.</p>

 



      <div class="container">
  <div class="row" className='logos'>
    <div class="col">
    <img src="lo1.png" alt="" style={{width:'80px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo2.png" alt="" style={{width:'80px',height:'50px'}}/>
    </div>
    <div class="col">
    <img src="lo3.png" alt="" style={{width:'80px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo4.png" alt="" style={{width:'80px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo5.png" alt="" style={{width:'80px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo6.png" alt="" style={{width:'80px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo7.png" alt="" style={{width:'80px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo8.png" alt="" style={{width:'80px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo9.png" alt="" style={{width:'80px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo10.png" alt="" style={{width:'80px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo11.png" alt="" style={{width:'90px',height:'40px'}}/>
    </div>
    <div class="col">
    <img src="lo12.png" alt="" style={{width:'90px',height:'40px'}}/>
    </div>
  </div>
</div>



<div className='back'>
  <div className='want'>Want to know more?</div>
  <div className='gev'>
  <button style={{backgroundColor:'white',borderRadius:'20px', marginRight:'10px',width:'140px',height:'40px',border:'1px solid white'}}> Get in touch</button>
  <button style={{backgroundColor:'lightcyan',borderRadius:'20px',width:'140px',height:'40px',border:'1px solid rgb(212, 202, 202)'}}> View our FAQs</button></div>
<div class="container">
  <div class="row">
    <div class="col">
      <img src="B.png" alt="" className='bal'/>
      <p className='fol'>Follow us on social</p>
      <p className='bun'><b>@bundleebaby</b></p>
    </div>
    <div class="col">
    <p className='fol'>Have a question?</p>
      <p className='bun1'><b>hello@bundlee.co.uk</b></p>
    </div>
    <div class="col">
    <p className='fol'>Helpful links</p>
      <p className='log'><b>Login <br/>
         About us <br/>
         Blog <br/>
         service <br/>
         Contact us <br/>
         Review </b></p>
       
    </div>
    <div class="col">
      <p className='fol'>Terms</p>
      <p className='log'> <b>T&Cs <br/>
      Privacy policy</b></p>
    </div>
    <div class="col">
    <p className='fol'>bundlee HQ</p>
    <p className='log'><b>Grand Union Studios, London</b></p>
    </div>
  </div>
</div>
<div className='foll'>© 2024 Bundlee Ltd (Company Number 10869679)</div>
</div>
    </div>
    
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "200px",
    padding: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  info: {
    marginTop: "10px",
  },
  rating: {
    fontSize: "14px",
    color: "#333",
  },
  star: {
    color: "#4CAF50",
    marginLeft: "5px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0 5px 0",
  },
  description: {
    fontSize: "14px",
    color: "#777",
    margin: "5px 0",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
};




export default Pro;
