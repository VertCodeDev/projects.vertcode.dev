import {CollectionConfig} from "payload/types";
import path from "path";

export const Media: CollectionConfig = {
    slug: 'media',
    labels: {
        singular: 'Media',
        plural: 'Media',
    },
    upload: {
        staticDir: path.resolve(__dirname, '../../media'),
        staticURL: '/media',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: true,
        },
    ],
};

export default Media;