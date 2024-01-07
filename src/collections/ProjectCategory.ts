import {CollectionConfig} from "payload/types";

const ProjectCategory: CollectionConfig = {
    slug: 'project_categories',
    labels: {
        singular: 'Project Category',
        plural: 'Project Categories',
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
        }
    ],
};

export default ProjectCategory;