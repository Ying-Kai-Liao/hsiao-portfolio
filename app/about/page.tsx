import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import SimpleLayout from '@/layouts/SimpleLayout'
import { components } from '@/components/MDXComponents'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About Hsiao-Tsu Huang' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <SimpleLayout title="About Me">
      <MDXLayoutRenderer code={author.body.code} components={components} toc={mainContent.toc} />
    </SimpleLayout>
  )
}
