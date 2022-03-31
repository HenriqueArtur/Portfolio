import React, { useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Typewriter from 'typewriter-effect';
import './styles/provisory.scss';

const links = {
  linkedIn: 'https://www.linkedin.com/in/henriqueartur/',
  gitHub: 'https://github.com/HenriqueArtur/',
  telegram: 'https://t.me/HenriqueArtur',
  email: 'contato@henriqueartur.com'
}

const colors = {
  white: '#fff',
  red: '#FF5F56',
  yellow: '#FFBD2E',
  green: '#27C93F',
}

const App: React.FC = () => {
  const [linkedInColor, setLinkedInColor] = useState(colors.white)
  const [gitHubColor, setGitHubColor] = useState(colors.white)
  const [telegramColor, setTelegramColor] = useState(colors.white)

  return (
    <>
      <MobileView>
        <Container>
          <Row>
            <Col sm={12} md={8} lg={6}>
              <div className="circles mobile-circles">
                <FontAwesomeIcon icon={faCircle} size='sm' color={colors.red} className='circle' />
                <FontAwesomeIcon icon={faCircle} size='sm' color={colors.yellow} className='circle' />
                <FontAwesomeIcon icon={faCircle} size='sm' color={colors.green} className='circle' />
              </div>
            </Col>
          </Row>
        </Container>
      </MobileView>
      <Container>
        <Row>
          <Col>
            <div className="all_height">
              <div className="vertical_align">
                <Container>
                  <BrowserView>
                    <Row>
                      <Col sm={{ span: 12, offset: 0 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <div className="circles">
                          <FontAwesomeIcon icon={faCircle} size='sm' color={colors.red} className='circle' />
                          <FontAwesomeIcon icon={faCircle} size='sm' color={colors.yellow} className='circle' />
                          <FontAwesomeIcon icon={faCircle} size='sm' color={colors.green} className='circle' />
                        </div>
                      </Col>
                    </Row>
                  </BrowserView>
                </Container>
                <h1>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('Henrique Artur')
                        .callFunction(function (state) {
                          state.elements.cursor.style.display = 'none';
                        })
                        .start()
                    }}
                    options={{ cursorClassName: 'cursor', delay: 100 }} />
                </h1>
                <h3>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('Full-Stack Developer')
                        .callFunction(function (state) {
                          state.elements.cursor.style.display = 'none';
                        })
                        .start()
                    }}
                    options={{ cursorClassName: 'cursor', delay: 55 }} />
                </h3>
                <span>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('Creativity, Design and Development')
                        .callFunction(function (state) {
                          state.elements.cursor.style.display = 'none';
                        })
                        .start()
                    }}
                    options={{ cursorClassName: 'cursor', delay: 35 }} />
                </span>
                <div className="contact">
                  <div className="icons">
                    <a href={links.linkedIn} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        size="2x"
                        color={linkedInColor}
                        onMouseOver={() => setLinkedInColor(colors.red)}
                        onMouseLeave={() => setLinkedInColor(colors.white)} />
                    </a>
                    <a href={links.gitHub} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        icon={faGithubAlt}
                        size="2x"
                        color={gitHubColor}
                        onMouseOver={() => setGitHubColor(colors.yellow)}
                        onMouseLeave={() => setGitHubColor(colors.white)} />
                    </a>
                    <a href={links.telegram} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        icon={faTelegramPlane}
                        size="2x"
                        color={telegramColor}
                        onMouseOver={() => setTelegramColor(colors.green)}
                        onMouseLeave={() => setTelegramColor(colors.white)} />
                    </a>
                  </div>
                  <span className="mail">
                    <a href={`mailto:${links.email}`}>{links.email}</a>
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
