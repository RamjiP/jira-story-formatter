import contentTypes from './contentTypes';

const config = {
    panel: {
        border: {
            style: 'solid'
        },
        title: {
            background: '#cae1ff'
        }
    },
    content: [
        {
            title: 'Background',
            contentType: contentTypes.PANEL,
            components:[
                {
                    contentType: contentTypes.MULTI_LINE_TEXT
                }
            ]
        },
        {
            title: 'Narrative',
            contentType: contentTypes.PANEL,
            components:[
                {
                    contentType: contentTypes.MULTI_LINE_TEXT
                }
            ]
        },
        {
            title: 'Scope and Assumptions',
            contentType: contentTypes.PANEL,
            components:[
                {
                    title: 'In scope',
                    contentType: contentTypes.UNORDERED_LIST
                },
                {
                    title: 'out of scope',
                    contentType: contentTypes.UNORDERED_LIST
                },
                {
                    title: 'Assumptions',
                    contentType: contentTypes.UNORDERED_LIST
                }
            ]
        },
        {
            title: 'UX / UI design',
            contentType: contentTypes.PANEL,
            components:[
                {
                    contentType: contentTypes.MULTI_LINE_TEXT
                }
            ]
        },
        {
            title: 'Technical details and considerations',
            contentType: contentTypes.PANEL,
            components:[
                {
                    contentType: contentTypes.MULTI_LINE_TEXT
                }
            ]
        },
        {
            title: 'Acceptance Criteria',
            contentType: contentTypes.PANEL,
            components:[
                {
                    title: 'Pre-conditions',
                    contentType: contentTypes.MULTI_LINE_TEXT
                }
            ]
        },
        {
            contentType: contentTypes.SCENARIO,
        },
        {
            title: 'Notes',
            contentType: contentTypes.PANEL,
            components:[
                {
                    contentType: contentTypes.MULTI_LINE_TEXT
                }
            ]
        },
    ]
}

export default config;