import { createClient, EntryCollection } from 'contentful';

// Contentful client - lazy initialized to avoid build errors
let contentfulClient: ReturnType<typeof createClient> | null = null;

export function getContentfulClient() {
  // Return existing client if already initialized
  if (contentfulClient) {
    return contentfulClient;
  }

  // Check if credentials are available
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    console.warn('Contentful credentials not configured. CMS features will be disabled.');
    return null;
  }

  // Create and cache the client
  contentfulClient = createClient({
    space: spaceId,
    accessToken: accessToken,
  });

  return contentfulClient;
}

/**
 * Blog Post Type Definition
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedDate: string;
  readingTime: string;
  tags: string[];
  featuredImage?: {
    url: string;
    alt: string;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

/**
 * Fetch all blog posts from Contentful
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const client = getContentfulClient();

  // If Contentful is not configured, return empty array
  // The app will fall back to static blog data
  if (!client) {
    return [];
  }

  try {
    const response: EntryCollection<any> = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedDate'],
    });

    return response.items.map((item) => {
      const fields = item.fields as any; // Type assertion to handle Contentful's complex types
      return {
        slug: fields.slug as string,
        title: fields.title as string,
        excerpt: fields.excerpt as string,
        content: fields.content as string,
        category: fields.category as string,
        author: {
          name: fields.authorName as string,
          role: fields.authorRole as string,
          avatar: fields.authorAvatar?.fields?.file?.url as string | undefined,
        },
        publishedDate: fields.publishedDate as string,
        readingTime: fields.readingTime as string,
        tags: (fields.tags as string[]) || [],
        featuredImage: fields.featuredImage
          ? {
              url: fields.featuredImage.fields.file.url as string,
              alt: fields.featuredImage.fields.title as string,
            }
          : undefined,
        seo: fields.seo
          ? {
              metaTitle: fields.seo.metaTitle as string | undefined,
              metaDescription: fields.seo.metaDescription as string | undefined,
              keywords: fields.seo.keywords as string[] | undefined,
            }
          : undefined,
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const client = getContentfulClient();

  if (!client) {
    return null;
  }

  try {
    const response: EntryCollection<any> = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    const item = response.items[0];
    const fields = item.fields as any; // Type assertion to handle Contentful's complex types

    return {
      slug: fields.slug as string,
      title: fields.title as string,
      excerpt: fields.excerpt as string,
      content: fields.content as string,
      category: fields.category as string,
      author: {
        name: fields.authorName as string,
        role: fields.authorRole as string,
        avatar: fields.authorAvatar?.fields?.file?.url as string | undefined,
      },
      publishedDate: fields.publishedDate as string,
      readingTime: fields.readingTime as string,
      tags: (fields.tags as string[]) || [],
      featuredImage: fields.featuredImage
        ? {
            url: fields.featuredImage.fields.file.url as string,
            alt: fields.featuredImage.fields.title as string,
          }
        : undefined,
      seo: fields.seo
        ? {
            metaTitle: fields.seo.metaTitle as string | undefined,
            metaDescription: fields.seo.metaDescription as string | undefined,
            keywords: fields.seo.keywords as string[] | undefined,
          }
        : undefined,
    };
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Get recent blog posts (for homepage, sidebar, etc.)
 */
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const client = getContentfulClient();

  if (!client) {
    return [];
  }

  try {
    const response: EntryCollection<any> = await client.getEntries({
      content_type: 'blogPost',
      order: ['-fields.publishedDate'],
      limit,
    });

    return response.items.map((item) => {
      const fields = item.fields as any; // Type assertion to handle Contentful's complex types
      return {
        slug: fields.slug as string,
        title: fields.title as string,
        excerpt: fields.excerpt as string,
        content: fields.content as string,
        category: fields.category as string,
        author: {
          name: fields.authorName as string,
          role: fields.authorRole as string,
          avatar: fields.authorAvatar?.fields?.file?.url as string | undefined,
        },
        publishedDate: fields.publishedDate as string,
        readingTime: fields.readingTime as string,
        tags: (fields.tags as string[]) || [],
        featuredImage: fields.featuredImage
          ? {
              url: fields.featuredImage.fields.file.url as string,
              alt: fields.featuredImage.fields.title as string,
            }
          : undefined,
        seo: fields.seo
          ? {
              metaTitle: fields.seo.metaTitle as string | undefined,
              metaDescription: fields.seo.metaDescription as string | undefined,
              keywords: fields.seo.keywords as string[] | undefined,
            }
          : undefined,
      };
    });
  } catch (error) {
    console.error('Error fetching recent blog posts:', error);
    return [];
  }
}

/**
 * Get blog posts by category
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const client = getContentfulClient();

  if (!client) {
    return [];
  }

  try {
    const response: EntryCollection<any> = await client.getEntries({
      content_type: 'blogPost',
      'fields.category': category,
      order: ['-fields.publishedDate'],
    });

    return response.items.map((item) => {
      const fields = item.fields as any; // Type assertion to handle Contentful's complex types
      return {
        slug: fields.slug as string,
        title: fields.title as string,
        excerpt: fields.excerpt as string,
        content: fields.content as string,
        category: fields.category as string,
        author: {
          name: fields.authorName as string,
          role: fields.authorRole as string,
          avatar: fields.authorAvatar?.fields?.file?.url as string | undefined,
        },
        publishedDate: fields.publishedDate as string,
        readingTime: fields.readingTime as string,
        tags: (fields.tags as string[]) || [],
        featuredImage: fields.featuredImage
          ? {
              url: fields.featuredImage.fields.file.url as string,
              alt: fields.featuredImage.fields.title as string,
            }
          : undefined,
        seo: fields.seo
          ? {
              metaTitle: fields.seo.metaTitle as string | undefined,
              metaDescription: fields.seo.metaDescription as string | undefined,
              keywords: fields.seo.keywords as string[] | undefined,
            }
          : undefined,
      };
    });
  } catch (error) {
    console.error(`Error fetching blog posts for category "${category}":`, error);
    return [];
  }
}
