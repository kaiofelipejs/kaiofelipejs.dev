import React from "react"
import Layout from "components/Layout"
import SEO from "components/seo"

import { MainContent } from "components/Post/styled"
import SocialLinks from "components/SocialLinks"

const projects = [
  {
    name: "kaiofelipejs.dev",
    description: "My blog using Gatsby and React95.",
    tools: ["ReactJS", "React95 lib", "Netlify", "GraphQL", "Gatsby"],
    urls: {
      sourceCode: "https://github.com/kaiofelipejs/kaiofelipejs.dev",
      appUrl: "https://kaiofelipejs.dev",
    },
  },
  {
    name: "Remote HeartCount",
    description: `In the HR (Human Resources) world, the indicator headcount represents the number of employees in the company. In my team, we decided to name it HeartCount. The HeartCount represents the number of hires/placements we do. We chose the word "heart" instead of "head", to reflect how much we care about our candidates.`,
    tools: ["NodeJS", "React", "Knex", "Postgres", "Heroku"],
    urls: {
      sourceCode: "https://github.com/kaiofelipejs/remoteheartcount-frontend",
      appUrl: "https://remoteheartcount.herokuapp.com/",
    },
  },
  {
    name: "Website Psicóloga Vanessa Mattos",
    description:
      "An institutional website with a blog for Psychologist Vanessa Mattos. This is my first project created from scratch (from design to hosting).",
    tools: ["Figma", "PHP", "Javascript", "Wordpress"],
    urls: {
      sourceCode: "https://github.com/kaiofelipejs/psico-vanessa-mattos",
      appUrl: "http://www.vanessamattos.com.br/",
    },
  },
]

const ProjectPage = () => (
  <>
    <SEO
      title="Meus Projetos"
      description="Saiba um pouco mais sobre os meus projetos"
    />

    <Layout>
      <MainContent>
        <section>
          <h1>Meus Projetos</h1>
        </section>

        <section>
          {projects.map(k => (
            <section key={k.name}>
              <h3>{k.name}</h3>
              <p>
                <strong>Descrição: </strong>
                {k.description}
              </p>
              <p>
                <strong>Tecnologias: </strong>
                {k.tools.join(", ")}
              </p>
              <p>
                <strong>
                  Código Fonte:{" "}
                  <a
                    href={k.urls.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar
                  </a>
                </strong>
              </p>
              <p>
                <strong>
                  Site:{" "}
                  <a
                    href={k.urls.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar
                  </a>
                </strong>
              </p>
            </section>
          ))}
        </section>

        <h3>Sinta-se à vontade para entrar em contato!</h3>
      </MainContent>
      <SocialLinks />
    </Layout>
  </>
)

export default ProjectPage
