export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617792e3e2d4e2be8738c16d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hsf13yet',
                  apiId: '88a9f131-a6bb-45b3-a069-6bc8bdf65491'
                },
                {
                  buildHookId: '617792e4eba7b56961aac6e6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-moug63i1',
                  apiId: '00ae0edc-d783-4819-b38b-dece78aeae9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JustinBEverett/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-moug63i1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
