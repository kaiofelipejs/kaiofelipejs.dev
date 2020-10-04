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
        <h2>Versão resumida: </h2>
        <p>
          Engenheiro de Software, apaixonado por tecnologia, teologia reformada,
          livros, música, futebol e um bom café.
        </p>
        <h2>Versão longa: </h2>
        <p>
          Me chamo Kaio Felipe Silva, tenho 21 anos e sou natural de
          Florianópolis/SC. Atualmente trabalho na RD Station, a maior
          plataforma de automação de marketing e vendas para pequenas e médias
          empresas.
        </p>
        <p>
          Gosto de resolver problemas, construir coisas incríveis com código e
          contribuir para projetos de código aberto. A grande parte das minhas
          habilidades é lidando com frontend, mas às vezes me arrisco no
          backend. Por hobby, gosto de estudar (juro que é verdade), tocar
          instrumentos, jogar videogame, ler bons livros, assistir e (tentar)
          jogar futebol e várias outras coisas.
        </p>

        <h3>Sinta-se à vontade para entrar em contato! :)</h3>
      </MainContent>
      <SocialLinks />
    </Layout>
  </>
)
export default AboutPage
