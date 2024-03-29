import path from 'path'

import {payloadCloud} from '@payloadcms/plugin-cloud'
import {mongooseAdapter} from '@payloadcms/db-mongodb'
import {webpackBundler} from '@payloadcms/bundler-webpack'
import {slateEditor} from '@payloadcms/richtext-slate'
import {buildConfig} from 'payload/config'

import Users from './collections/Users'
import Media from "./collections/Media";
import Technologies from "./collections/Technologies";
import Projects from "./collections/Projects";
import ProjectBlocks from "./collections/ProjectBlocks";
import Partners from "./collections/Partners";
import ProjectCategory from "./collections/ProjectCategory";

export default buildConfig({
    admin: {
        user: Users.slug,
        bundler: webpackBundler(),
    },
    editor: slateEditor({}),
    collections: [Users, Technologies, Media, Projects, ProjectCategory, ProjectBlocks, Partners],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    },
    plugins: [payloadCloud()],
    db: mongooseAdapter({
        url: process.env.DATABASE_URI,
    }),
})
