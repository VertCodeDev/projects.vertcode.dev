import {CollectionConfig} from "payload/types";

const Partners: CollectionConfig = {
    slug: 'partners',
    labels: {
        singular: 'Partner',
        plural: 'Partners',
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
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'url',
            label: 'URL',
            type: 'text',
            required: true,
        },
    ],
};

export default Partners;