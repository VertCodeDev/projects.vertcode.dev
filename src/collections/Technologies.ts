import {CollectionConfig} from "payload/types";

const Technologies: CollectionConfig = {
    slug: 'technologies',
    labels: {
        singular: 'Technology',
        plural: 'Technologies',
    },
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
        },
        {
            name: 'icon',
            label: 'Icon',
            type: 'upload',
            relationTo: 'media',
        },
    ],
};

export default Technologies;