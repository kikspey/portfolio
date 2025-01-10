import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const directoryPath = path.join(process.cwd(), 'content/blog');
    const files = fs.readdirSync(directoryPath).filter((file) => file.endsWith('.mdx'));

    const posts = await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');

        const { metadata } = await import(`@/content/blog/${slug}.mdx`);

        return {
          slug,
          metadata: metadata || {},
        };
      })
    );

    posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Erreur lors de la récupération des posts:', error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}