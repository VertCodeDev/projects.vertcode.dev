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
            required: true,
        },
        {
            name: 'bgColor',
            label: 'Background Color',
            type: 'text',
            required: true,
        },
        {
            name: 'icon',
            label: 'Icon',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
};

export default Technologies;