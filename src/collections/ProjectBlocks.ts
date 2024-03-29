import {CollectionConfig} from "payload/types";

const ProjectBlocks: CollectionConfig = {
    slug: 'projects_blocks',
    labels: {
        singular: 'Projects Block',
        plural: 'Projects Blocks',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'content',
            label: 'Content',
            type: 'textarea',
            required: true,
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        }
    ]
}

export default ProjectBlocks;