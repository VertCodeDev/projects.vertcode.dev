import {CollectionConfig} from "payload/types";

const Projects: CollectionConfig = {
    slug: 'projects',
    labels: {
        singular: 'Project',
        plural: 'Projects',
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
            name: 'description',
            label: 'Description',
            type: 'richText',
            required: true,
        },
        {
            name: 'start_date',
            label: 'Start Date',
            type: 'date',
            required: true,
        },
        {
            name: 'end_date',
            label: 'End Date',
            type: 'date',
            required: false,
        },
        {
            name: 'thumbnail',
            label: 'Thumbnail',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'technologies',
            label: 'Technologies',
            type: 'relationship',
            relationTo: 'technologies',
            hasMany: true,
        },
        {
            name: 'project_blocks',
            label: 'Project Blocks',
            type: 'relationship',
            relationTo: 'projects_blocks',
            hasMany: true,
        },
    ]
};

export default Projects;