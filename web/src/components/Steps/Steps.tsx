import React from 'react'
import Code from 'src/components/Code/Code'

const importyaml = `project:
  name: recipe-redwoodjs
  tags:
    - zerops-recipe
services:
  - hostname: app
    type: nodejs@20
    buildFromGit: https://github.com/zeropsio/recipe-redwoodjs
    enableSubdomainAccess: true

  - hostname: db
    type: postgresql@17
    mode: NON_HA
    priority: 1`.trim()

    const zeropsyaml = `zerops:
    - setup: app
      build:
        base: nodejs@20
        buildCommands:
          - yarn
          - yarn rw build
        deployFiles: ./
      run:
        base: nodejs@20
        envVariables:
          DATABASE_URL: \${db_connectionString}
        ports:
          - port: 8910
            httpSupport: true
          - port: 8911
            httpSupport: true
        start: yarn rw serve`.trim();

const Steps = () => {
  return (
    <div className="max-w-[1140px]">
      <div className="flex justify-center">
        <p className="text-center mx-auto">
          Deploying will import the following structure (zerops-project-import.yml)
          <br />
          and use following (zerops.yml) instructions to build and deploy your app:
        </p>
      </div>
      <div className="grid grid-cols md:grid-cols-2 font-light gap-5 md:gap-10 pt-14 px-4">
        <div className="flex flex-col gap-5">
          <Code
            fileLink="https://github.com/zeropsio/recipe-redwoodjs/blob/main/zerops-project-import.yml"
            file="zerops-project-import.yml"
            code={importyaml}
          />
          <div className="flex flex-col py-10 h-[260px] rounded-md gap-5 px-10 border-[#E6E6E6] border">
            <a
              href="https://github.com/zeropsio/recipe-redwoodjs"
              target="_blank"
              className="primarybutton rounded-full text-center text-md duration-300 hover:no-underline"
            >
              Recipe Source Code
            </a>
            <a
              href="https://discord.com/invite/WDvCZ54"
              target="_blank"
              className="discordbutton rounded-full text-center text-md duration-300 hover:no-underline"
            >
              Discord Server
            </a>
            <a
              href="https://docs.zerops.io"
              target="_blank"
              className="zeropsbutton rounded-full text-center text-md duration-300 hover:no-underline"
            >
              Zerops Documentation
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <Code
            fileLink="https://github.com/zeropsio/recipe-redwoodjs/blob/main/zerops.yml"
            file="zerops.yml"
            code={zeropsyaml}
          />
        </div>
      </div>
    </div>
  )
}

export default Steps