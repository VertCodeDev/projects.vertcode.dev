import {CollectionConfig} from "payload/types";
import projectCategory from "./ProjectCategory";

// Fields:
// - thumbnail (relationship to media)
// - name (text)
// - startDate (date)
// - endDate (date, not required)
// - category (relationship to projectCategory)
// - description (textarea)
// - technologies (relationship to technologies)
// - projectBlocks (relationship to projectBlocks)

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
            name: 'thumbnail',
            label: 'Thumbnail',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: true,
        },
        {
            name: 'startDate',
            label: 'Start Date',
            type: 'date',
            required: true,
        },
        {
            name: 'endDate',
            label: 'End Date',
            type: 'date',
        },
        {
            name: 'category',
            label: 'Category',
            type: 'relationship',
            relationTo: 'project_categories',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'technologies',
            label: 'Technologies',
            type: 'relationship',
            relationTo: 'technologies',
            hasMany: true,
            required: true,
        },
        {
            name: 'projectBlocks',
            label: 'Project Blocks',
            type: 'relationship',
            relationTo: 'projects_blocks',
            hasMany: true,
            required: true,
        },
    ]
};

export default Projects;