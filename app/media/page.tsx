import SimpleLayout from '@/layouts/SimpleLayout'

const mediaData = [
  {
    title: 'Rebonds b',
    composer: 'Iannis Xenakis',
    youtubeId: '6K-72Yu6sfg',
  },
  {
    title: 'Hard-boiled Capitalism and the Day Mr. Friedman Noticed Google is a Verb',
    composer: 'Ben Wahlund',
    youtubeId: 'GYOXjVBeNYA',
  },
  {
    title: 'Land',
    composer: 'Takatsugu Muramatsu',
    youtubeId: 'clFv18gnFO8',
  },
  {
    title: 'March',
    composer: 'Elliott Carter',
    youtubeId: 'f_4yQuJIxUM',
  },
]

export default function MediaPage() {
  return (
    <SimpleLayout title="Media">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {mediaData.map((item, index) => (
          <div key={index} className="space-y-4 py-8">
            <h2 className="text-2xl leading-8 font-bold tracking-tight">{item.title}</h2>
            <p className="text-gray-500 dark:text-gray-400">by {item.composer}</p>
            <div className="relative h-0 overflow-hidden rounded-lg pb-[56.25%] shadow-lg">
              <iframe
                className="absolute top-0 left-0 h-full w-full"
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={item.title}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </SimpleLayout>
  )
}
