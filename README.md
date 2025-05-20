# Zerops x Redwoodjs


RedwoodJS is a modern, full-stack JavaScript framework designed to streamline the development of web applications by integrating a cohesive set of technologies and tools. It combines React for the frontend, GraphQL for API communication, and Prisma for database interactions, all within a single monorepo structure. <a href="https://zerops.io/" target="_blank">Zerops</a> makes deploying and running Redwoodjs apps, a breeze.

![cover](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/svg/cover-redwoodjs.svg)


<br/>

## Deploy to Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-redwoodjs/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/green/deploy-button.svg)](https://app.zerops.io/recipe/redwoodjs)

<br/>

## Recipe features
- Latest version of **Redwoodjs** with SSR running on a load balanced **Zerops Node.js** service.
- Uses Graphql and Database running on **Postgres 17**.

<br/>

## Production vs. development
This recipe is ready for production as is, and will scale horizontally by adding more containers in case of high traffic surges. If you want to achieve the highest baseline reliability and resiliace, start with at least two containers (add `minContainers: 2` in recipe YAML in the `app` service section, or change the minimum containers in "Automatic Scaling configuration" section of service detail).

<br/>

## Changes made over the default installation
If you want to modify your existing Redwoodjs app to efficiently run on Zerops, there are no changes needed in the codebase on top of the standard installation, just add [zerops.yml](https://github.com/zeropsio/recipe-redwoodjs/blob/main/zerops.yml) to your repository.

<br/>
<br/>

Need help setting your project up? Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).