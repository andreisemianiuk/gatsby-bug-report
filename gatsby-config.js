module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            /**
             * First up is the WordPress source plugin that connects Gatsby
             * to your WordPress site.
             *
             * visit the plugin docs to learn more
             * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
             *
             */
            resolve: `gatsby-source-wordpress`,
            options: {
                // the only required plugin option for WordPress is the GraphQL url.
                url:
                  process.env.WPGRAPHQL_URL ||
                  `http://ecosiprom.com/graphql`,
            },
        },
    ]
}