import React from "react";
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <div className="footer__group">
          <section className="footer__section">
            <h6>PURCHASE</h6>
            <ul>
              <li>
                <Link href="/category/women">For her</Link>
              </li>
              <li>
                <Link href="/category/men">For him</Link>
              </li>
              <li>
                <Link href="/category/child">For a child</Link>
              </li>
            </ul>
          </section>
          <section className="footer__section">
            <h6>INFORMATIONS ABOUT COMPANY</h6>
            <ul>
              <li>Work at PPA</li>
              <li>About PPA Group</li>
              <li>Our responsibility</li>
              <li>For media</li>
              <li>Investor relations</li>
              <li>Corporate governance</li>
            </ul>
          </section>
          <section className="footer__section">
            <h6> ASSISTANCE </h6>
            <ul>
              <li>Customer service </li>
              <li>My PPA</li>
              <li>Find a shop</li>
              <li>Privacy Policy and Regulations</li>
              <li>
                <Link href="/contact/">Contact</Link>
              </li>
              <li>Gift cards</li>
            </ul>
          </section>
          <section className="footer__section">
            <h6>JOIN NOW</h6>
            <p className="footer__section--p">
              Join the loyalty program and get a 10% discount + free standard delivery on your next purchases.{" "}
            </p>
          </section>
        </div>
        <div className="footer__i">
          <span aria-hidden="true" className="fab fa-facebook-f"></span>
          <span aria-hidden="true" className="fab fa-twitter"></span>
          <span aria-hidden="true" className="fab fa-instagram"></span>
          <span aria-hidden="true" className="fab fa-youtube"></span>
          <span aria-hidden="true" className="fab fa-pinterest"></span>
        </div>
        <p className="footer__copyright">
          The content of this website is protected by copyright and is owned by PPA. PPA offers a quality fashion that
          is friendly to people, the environment and the wallet. Since our founding in 2020, we have been constantly
          developing - today PPA is one of the largest clothing companies in the world.
        </p>
        <span className="footer__logo">JAKUB GABRIEL ARTUR</span>
        <span className="footer__language">Polska | PLN</span>
      </Container>
    </footer>
  );
};

export default Footer;
