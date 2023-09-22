import React, { Component } from "react";

export class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "fwafda",
      description: "fasfds",
      image: "",
      author: "fasfsd",
    };
  }

  render() {
    // this.setState({
    //   title: this.props.title,
    //   description: this.props.description,
    //   image: this.props.image,
    //   author: this.props.author,
    // });

    // this.props.title = "lorem Ipsum"; X

    // const { title, description, image, author } = this.state;

    const { title, category, image, author, date, isOfficial, children } =
      this.props;

    return (
      //   <div>
      //     <img src={image} alt="" />
      //     <h1>{title}</h1>
      //     <p> {description}</p>
      //     <p> {author}</p>
      //   </div>

      <div>
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>Category: {category}</p>
        <p>Author: {author}</p>
        <p>Date: {date.slice(0, 10)}</p>
        <p>Official: {isOfficial ? "✅" : "❌"} </p>
        {children}
        {/*
           win + .
          */}
      </div>
    );
  }
}

export default NewsCard;
