import {CollectionConfig} from "payload/types";

const CodingLanguages: CollectionConfig = {
    slug: 'coding_languages',
    labels: {
        singular: 'Coding Language',
        plural: 'Coding Languages',
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

export default CodingLanguages;