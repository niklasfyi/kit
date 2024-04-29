import process from "node:process";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
    application: {
        url: "https://www.niklas.fyi",
    },
    plugins: [
        "@indiekit/store-github",
        "@indiekit/syndicator-mastodon",
    ],

    publication: {
        me: "https://www.niklas.fyi",
        postTypes: {
            note: {
                post: {
                    path: "src/content/{yyyy}/{MM}/{dd}/{slug}.md",
                    url: "{yyyy}/{MM}/{dd}/{slug}"
                },
            },
            like: {
                post: {
                    path: "src/content/{yyyy}/{MM}/{dd}/{slug}.md",
                    url: "{yyyy}/{MM}/{dd}/{slug}"
                },
            },
            checkin: {
                discovery: "checkin",
                post: {
                    path: "src/content/{yyyy}/{MM}/{dd}/{slug}.md",
                    url: "{yyyy}/{MM}/{dd}/{slug}"
                },
            },
        },
    },
    "@indiekit/store-github": {
        user: "niklasfyi",
        repo: "niklasdotfyi",
        branch: "main"
    },

    "@indiekit/syndicator-mastodon": {
        checked: false,
        url: "https://hachyderm.io",
        user: "niklasfyi",
        accessToken: process.env.MASTODON_ACCESS_TOKEN,
    },
};

export default config;
