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
                  buildHookId: '5ea1ed0fcfe610019fed2831',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dpew3gwc',
                  apiId: 'edd65e4b-4bad-48ba-98c7-84cf740066b3'
                },
                {
                  buildHookId: '5ea1ed0f2fae1201bffd31bf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8janpg44',
                  apiId: 'd5160fe8-16f9-4388-ab8f-21ed8e8fe768'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DNature/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8janpg44.netlify.app', category: 'apps'}
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
