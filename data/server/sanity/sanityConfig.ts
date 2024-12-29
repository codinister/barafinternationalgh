'use client'
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes/index';


const key = process.env.NEXT_PUBLIC_KEY || ''
const sanityConfig = defineConfig({
  projectId: key,
  title: 'xmingeradvertising',
  dataset: 'production',
  apiVersion: '2024-08-01',
  basePath: '/adminpage',
  schema: {
    types: schemaTypes,
  },
  plugins: [deskTool()],
});

export default sanityConfig
