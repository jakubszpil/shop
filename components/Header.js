import Link from "next/link";
import React, { Component } from "react";
import Container from "./Container";

const HeaderBasket = () => {
  return null;
};

class Header extends Component {
  state = {};

  render() {
    return (
      <header className="header">
        <Container className="header__container">
          <h2 className="header-title">
            <Link href="/" className="header-title__link">
              PPA
            </Link>
          </h2>
          <nav className="menu">
            <Link href="/category/women/">Women</Link>
            <Link href="/category/men/">Men</Link>
            <div>
              <button type="button">
                <span className="fas fa-search" aria-hidden="true"></span>
                <span>Search</span>
              </button>
              <Link href="/customer/">
                <div>
                  <span className="fas fa-user" aria-hidden="true"></span>
                  <span>Account</span>
                </div>
              </Link>
              <button type="button">
                <span className="fas fa-shopping-cart" aria-hidden="true"></span>
                <span>Basket</span>
              </button>
            </div>
          </nav>
        </Container>
      </header>
    );
  }
}

export default Header;
