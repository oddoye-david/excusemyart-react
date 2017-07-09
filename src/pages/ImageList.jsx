import React, { Component } from 'react';
import axios from 'axios';

import Loader from '../components/Loader';

class ImageList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      images: [],
      category: 'default'
    }
  }

  objectifyQueryParams = (queryParams) => {
    const z = queryParams.substring(1);
    const arr = z.split('&');

    return arr.map(item => {
      const tempArr = item.split('=');
      return { [tempArr[0]]: tempArr[1] };
    })
      .reduce((accumulator, currentItem) => {
        const key = Object.keys(currentItem)[0];
        accumulator[key] = currentItem[key];
        return accumulator;
      }, {});
  }

  async componentDidMount() {
    // Show spinner
    this.setState({
      loading: true
    });
    // Get category param
    // Load images for the category
    // Show error or render images
    const params = this.objectifyQueryParams(this.props.location.search);

    try {
      const data = await axios.get('https://jsonplaceholder.typicode.com/photos');
      console.log(data);
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 4000);
    } catch (err) {
      console.log(err);
      this.setState({
        loading: false
      });
    }

  }


  render() {
    return (
      <div>
        {this.state.loading ? <Loader /> : <p>Loaded!!!!</p>}
      </div>
    );
  }
}

export default ImageList;