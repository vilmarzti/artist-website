import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'


const pictures = defineCollection({
    loader: glob({ 
        pattern: '**/*.md',
        base: './src/data/meta/',
        generateId: ({ entry, base, data }) => data.title
    }),

    schema: z.object({
        title: z.string(),
        artist: z.string(),
        date: z.string(),
        image: z.string(),
        license: z.string(),
        medium: z.string.optional(),
        size: z.string.optional(),
    })
})

export const collections  = { pictures }
