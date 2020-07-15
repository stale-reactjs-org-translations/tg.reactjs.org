/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 */

import Layout from 'components/Layout';
import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import React from 'react';
import {urlRoot} from 'site-constants';
import {sharedStyles} from 'theme';

import names from '../../content/acknowledgements.yml';

const Acknowlegements = ({data, location}) => (
  <Layout location={location}>
    <Container>
      <div css={sharedStyles.articleLayout.container}>
        <div css={sharedStyles.articleLayout.content}>
          <Header>Изҳори сипос</Header>
          <TitleAndMetaTags
            canonicalUrl={`${urlRoot}/acknowledgements.html`}
            title="React - Acknowledgements"
          />

          <div css={sharedStyles.markdown}>
            <p>Мо ба ҳамаи саҳмгузорон як чаҳон ташаккур мегӯем:</p>

            <ul
              css={{
                display: 'flex',
                flexWrap: 'wrap',
              }}>
              {names.map((name, index) => (
                <li
                  css={{
                    flex: '1 0 200px',
                  }}
                  key={index}>
                  {name}
                </li>
              ))}
            </ul>

            <p>Алалхусус, ба саҳмгузорони зерин миннатдорем:</p>
            <ul>
              <li>
                <a href="https://github.com/jeffbski">Jeff Barczewski </a>
                ба мо имкони истифодаи бастаи {' '}
                <a href="https://www.npmjs.com/package/react">react</a> бо номи npm -ро  пешниҳод кард.
              </li>
              <li>
                <a href="https://christopheraue.net/">Christopher Aue</a>  ба
                 мо имкон медиҳад то  домени {' '}
                <a href="https://reactjs.com/">reactjs.com</a> ва ҳисоб-ном дар Twitter <a href="https://twitter.com/reactjs">@reactjs</a> бемалол истифода барем.

              </li>
              <li>
                <a href="https://github.com/ProjectMoon">ProjectMoon</a> ба
                мо имкони истифодаи бастаи бо номи {' '}
                <a href="https://www.npmjs.com/package/flux">flux</a> -ро пешниҳод кард.
              </li>
              <li>
                Shane Anderson ба мо имкон дод то истифодаи {' '}
                <a href="https://github.com/react">react</a> org дар GitHub бемалол бошад.
              </li>
              <li>
                <a href="https://github.com/voronianski">Dmitri Voronianski</a>{' '}
                ба мо иҷозат дод то нақшаи рангии {' '}
                <a href="https://labs.voronianski.com/oceanic-next-color-scheme/">
                  Oceanic Next
                </a>{' '}-ро
                дар сомонаи худ истифода барем.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </Layout>
);

export default Acknowlegements;
