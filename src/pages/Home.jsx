import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCard from '../components/ImageCard';


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="images">
          <div className="image">
            <ImageCard />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;