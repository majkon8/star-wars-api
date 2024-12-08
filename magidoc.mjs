export default {
    introspection: {
        type: 'url',
        url: 'http://localhost:3000/' // CHANGE IF SELECTED DIFFERENT PORT IN .env
    },
    website: {
        template: 'carbon-multi-page',
        options: {
            appTitle: 'Star Wars API',
            pages: [
                {
                    title: 'Star Wars API',
                    content: 'Star Wars API'
                }
            ]
        }
    }
};
