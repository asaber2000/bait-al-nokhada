import { type SchemaTypeDefinition } from 'sanity';
import { article } from './post';
import { articleEnglish } from './articleEnglish';
import { project } from './project';
import { projectEn } from './projectEn';
import { products } from './products';
import { productsEn } from './productsEn';
import { solutions } from './solutions';
import { solutionsEn } from './solutionsEn';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    articleEnglish,
    project,
    projectEn,
    products,
    productsEn,
    solutions,
    solutionsEn,
  ],
};