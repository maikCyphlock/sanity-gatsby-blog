export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6077167171b49300d598383c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-jawyswdy",
                  apiId: "f8a315fb-4e08-4f86-8bd8-3bc870640e7d",
                },
                {
                  buildHookId: "607716711b5444009604df93",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-je1abn2c",
                  apiId: "2879c9f9-0454-41a4-9fce-fb26266cf7ca",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/maikCyphlock/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-je1abn2c.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
