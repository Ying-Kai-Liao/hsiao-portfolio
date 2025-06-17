import SimpleLayout from '@/layouts/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'

export default function ContactPage() {
  return (
    <SimpleLayout title="Contact">
      <div className="space-y-4">
        <p>If you would like to get in touch, please feel free to send an email.</p>
        <p>
          Email:{' '}
          <a
            href={`mailto:${siteMetadata.email}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {siteMetadata.email}
          </a>
        </p>
        <p>You can also connect via other platforms, which can be found in the footer.</p>
      </div>
    </SimpleLayout>
  )
}
