import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"

import { MainContent } from "components/Post/styled"
import SocialLinks from "components/SocialLinks"

const AboutPage = () => (
  <>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre quem está por trás desse blog."
    />
    <Layout>
      <MainContent>
        <h1>
          Olá! Muito prazer!{" "}
          <span role="img" aria-label="waving hand">
            👋🏽
          </span>
        </h1>

        <section>
          <h3>Versão resumida: </h3>
          <p>
            Kaio, 22, manézinho da ilha, desenvolvedor, apaixonado por
            tecnologia, teologia reformada, música, futebol e um bom café.
          </p>
        </section>

        <section>
          <h3>Versão longa: </h3>
          <p>
            Me chamo Kaio Felipe Silva (tem um "José" ai no meio, mas geralmente
            eu tiro), tenho 22 anos e sou natural de Florianópolis/SC — ou como
            a gente diz por aqui, manézinho da ilha. Atualmente trabalho na RD
            Station, a maior plataforma de automação de marketing e vendas para
            pequenas e médias empresas.
          </p>

          <p>
            Gosto de resolver problemas, construir coisas realmente bacanas com
            código e contribuir para o mundo open source de alguma forma.
            Tecnicamente falando, meu foco tem sido em desenvolvimento frontend,
            mas também me viro no backend. Tenho trabalhado principalmente com
            React e Ruby/Rails usando bastante testes com Jest/React Testing
            Library e Rspec.
          </p>

          <p>
            Por hobby, gosto de tocar instrumentos, jogar videogame, ler bons
            livros, assistir e (tentar) jogar futebol e várias outras coisas.
            Uma outra curiosidade sobre mim é que enxergo o mundo apenas pelo
            olho direito e esse é o normal para mim{" "}
            <span role="img" aria-label="wink">
              😉
            </span>
          </p>
        </section>

        <h3>Sinta-se à vontade para entrar em contato!</h3>
      </MainContent>
      <SocialLinks />
    </Layout>
  </>
)
export default AboutPage
