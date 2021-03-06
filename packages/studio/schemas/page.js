import { BsJournalText } from 'react-icons/bs'

export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: BsJournalText,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },

      {
        name: 'content',
        title: 'Content',
        type: 'blockContent',
      },
      
      
    ],
  }
  