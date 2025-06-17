'use client'

import { MDXLayoutRenderer } from 'pliny/mdx-components'

interface MDXClientRendererProps {
  code: string
}

export default function MDXClientRenderer({ code }: MDXClientRendererProps) {
  return <MDXLayoutRenderer code={code} />
}
