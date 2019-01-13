import React, { Component } from "react";
import "../css/SocialCard.css";
import userImage from "../images/users-image.jpg";
import mainImage from "../images/Blueberry-Cake.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsDown,
  faComment,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

class SocialCard extends Component {
  constructor() {
    super();
    this.state = {
      clicked: null
    };

    this.changeColor = this.changeColor.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(e, iconClicked) {
    e.preventDefault();
    if (this.state.clicked === iconClicked) {
      this.setState({ clicked: null });
    } else {
      this.setState({ clicked: iconClicked });
    }
  }

  changeColor(iconClicked) {
    if (this.state.clicked === iconClicked) {
      return "#BB0615";
    } else {
      return "#08699f";
    }
  }

  render() {
    return (
      <div className="card">
        <div className="header-section">
          <p className="users-name">
            <img className="users-pic" src={userImage} alt="users-pic" />
            Carl Obama <span className="time">at 5.16 PM</span>{" "}
          </p>
        </div>
        <div className="img-section">
          <img src={mainImage} alt="main" className="main-image" />
        </div>
        <div className="text-section">
          <p className="text">
            Yeaaaaahhhh :D :D :D I've made it. It took me 3 months to improve my
            blueberry cake. But it's perfect now. :P
          </p>
        </div>
        <hr />
        <div className="icons">
          <span className="icon">
            <FontAwesomeIcon
              icon={faHeart}
              size="lg"
              onClick={e => this.handleChangeColor(e, "like")}
              style={{ color: this.changeColor("like") }}
            />
          </span>
          <span
            className="icon"
            onClick={e => this.handleChangeColor(e, "dislike")}
            style={{ color: this.changeColor("dislike") }}
          >
            <FontAwesomeIcon icon={faThumbsDown} size="lg" />
          </span>
          <span className="icon">
            <FontAwesomeIcon
              icon={faComment}
              size="lg"
              onClick={e => this.handleChangeColor(e, "comment")}
            />
          </span>
          <span className="icon">
            <FontAwesomeIcon
              icon={faBookmark}
              size="lg"
              onClick={e => this.handleChangeColor(e, "bookmark")}
              style={{ color: this.changeColor("bookmark") }}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default SocialCard;
