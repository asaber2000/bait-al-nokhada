'use client'

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/Admin',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(), // تم استخدام الهيكل الافتراضي البسيط والنظيف
    visionTool({defaultApiVersion: apiVersion}),
  ],
})