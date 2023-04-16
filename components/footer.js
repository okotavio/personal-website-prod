import React from "react";
import AnimatedLogo from "./animatedlogo";
import Container from "./container";

export default function Footer({}) {
  return (
    <footer>
      <Container>
        <div className="footer-content">
          <div className="logo">
            <AnimatedLogo />
          </div>

          <div className="footer-end">
            <ul className="footer-links">
              <li>
                <a
                  href="https://linkedin.com/in/otaviovidal"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.figma.com/@okotavio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Figma
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/okotavio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
            <p>© 2023 Otavio Vidal</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
