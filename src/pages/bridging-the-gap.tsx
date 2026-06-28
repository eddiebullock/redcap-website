import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type PlatformLabel = 'Amazon Music' | 'Spotify' | 'Apple Podcasts' | 'YouTube'

function PlatformLogo({ label }: { label: PlatformLabel }) {
  const common = { className: 'w-8 h-8', 'aria-hidden': true as const }

  if (label === 'Spotify') {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.49 17.28a.75.75 0 0 1-1.03.25c-2.83-1.73-6.39-2.12-10.58-1.15a.75.75 0 0 1-.34-1.46c4.57-1.06 8.5-.62 11.63 1.29.35.22.46.68.32 1.07zM18.84 14a.9.9 0 0 1-1.23.3c-3.24-1.99-8.18-2.57-12-1.4a.9.9 0 1 1-.52-1.72c4.36-1.33 9.78-.68 13.49 1.6.42.26.56.81.26 1.22zM19 10.55c-3.71-2.2-9.83-2.4-13.37-1.33a1 1 0 1 1-.58-1.91c4.07-1.23 10.85-1 15.11 1.52a1 1 0 0 1-1.16 1.72z" />
      </svg>
    )
  }

  if (label === 'YouTube') {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }

  if (label === 'Apple Podcasts') {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 0 1-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 0 0 2.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z" />
      </svg>
    )
  }

  if (label === 'Amazon Music') {
    return (
      <img
        src="/images/platforms/amazon-music.png"
        alt=""
        className="w-8 h-8"
        loading="lazy"
      />
    )
  }

  // Fallback
  return (
    <svg {...common} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a6.5 6.5 0 0 0-6.5 6.5v7A4.5 4.5 0 0 0 10 21h4a4.5 4.5 0 0 0 4.5-4.5v-7A6.5 6.5 0 0 0 12 3zm-3.2 9.3a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zm6.4 0a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z" />
      <path d="M7.6 16.7c1.3 1 2.8 1.5 4.4 1.5 1.6 0 3.1-.5 4.4-1.5a.75.75 0 1 0-.9-1.2c-1 .8-2.2 1.2-3.5 1.2-1.3 0-2.5-.4-3.5-1.2a.75.75 0 1 0-.9 1.2z" />
    </svg>
  )
}

const PODCAST = {
  title: 'Bridging the Gap',
  description:
    'A RedCap Media podcast featuring conversations that make complex science accessible, human, and worth talking about.',
  canonicalUrl: 'https://redcapmedia.co.uk/bridging-the-gap',
  imageUrl: 'https://redcapmedia.co.uk/images/podcast/bridging-the-gap.png',
  latestEpisode: {
    title: 'How Much Exercise Should We Be Doing?',
    youtubeUrl: 'https://www.youtube.com/watch?v=dUKO4i3zifw&t=62s',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/dUKO4i3zifw?start=62',
  },
  episodes: [
    {
      title: 'Episode 2',
      youtubeUrl: 'https://www.youtube.com/watch?v=jozCIS4XhVg&t=45s',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/jozCIS4XhVg?start=45',
    },
    {
      title: 'Episode 3',
      youtubeUrl: 'https://www.youtube.com/watch?v=JaNWmH6GUS8&t=215s',
      youtubeEmbedUrl: 'https://www.youtube.com/embed/JaNWmH6GUS8?start=215',
    },
  ],
  platforms: [
    {
      label: 'Amazon Music',
      href: 'https://music.amazon.com/podcasts/81219fa0-ecb1-44aa-bd13-17a28e3bd5ea/bridging-the-gap',
    },
    { label: 'Spotify', href: 'https://open.spotify.com/show/6fr1VKe3AWneKMabZ2Bz5e' },
    {
      label: 'Apple Podcasts',
      href: 'https://podcasts.apple.com/us/podcast/bridging-the-gap/id1892327681',
    },
    { label: 'YouTube', href: 'https://www.youtube.com/@Red_Cap_Media' },
  ],
} as const

export default function BridgingTheGapPage() {
  return (
    <>
      <Head>
        <title>Bridging the Gap Podcast - RedCap Media</title>
        <meta name="description" content={PODCAST.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={PODCAST.canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PODCAST.canonicalUrl} />
        <meta property="og:title" content={`${PODCAST.title} Podcast - RedCap Media`} />
        <meta property="og:description" content={PODCAST.description} />
        <meta property="og:image" content={PODCAST.imageUrl} />
        <meta property="og:site_name" content="RedCap Media" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={PODCAST.canonicalUrl} />
        <meta property="twitter:title" content={`${PODCAST.title} Podcast - RedCap Media`} />
        <meta property="twitter:description" content={PODCAST.description} />
        <meta property="twitter:image" content={PODCAST.imageUrl} />
      </Head>

      <div className="bg-white text-dark-900 min-h-screen">
        <Header />

        <main>
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/80 to-white" />
            <div className="relative container mx-auto px-4 pt-28 pb-16 lg:pt-32 lg:pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 border border-white/15 mb-6">
                    Podcast
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                    <span className="text-gradient">{PODCAST.title}</span>
                  </h1>
                  <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">
                    {PODCAST.description}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a href="#listen" className="btn-primary inline-flex items-center justify-center">
                      Listen now
                    </a>
                    <a
                      href="#featured"
                      className="btn-secondary inline-flex items-center justify-center border-white/80 text-white hover:bg-white hover:text-dark-900"
                    >
                      Latest episode
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white">
                    <img
                      src="/images/podcast/bridging-the-gap.png"
                      alt="Bridging the Gap podcast artwork for RedCap Media"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Listen on */}
          <section id="listen" className="section-padding">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-900">
                  Listen now
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Stream Bridging the Gap wherever you get your podcasts.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PODCAST.platforms.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-primary-300 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="text-dark-900/90">
                          <PlatformLogo label={p.label as PlatformLabel} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-gray-500">Platform</p>
                          <p className="mt-1 text-lg font-semibold text-dark-900 group-hover:text-primary-700 transition-colors duration-200 truncate">
                            {p.label}
                          </p>
                        </div>
                      </div>
                      <span className="text-gray-400 group-hover:text-primary-600 transition-colors duration-200">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h6m0 0v6m0-6L10 20l-7-7 11-6z"
                          />
                        </svg>
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                      Open in a new tab
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Featured episode */}
          <section id="featured" className="pb-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-900">
                    Latest episode
                  </h2>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    Watch the latest episode on YouTube or jump straight into the embedded player below.
                  </p>
                </div>
                <a
                  href={PODCAST.latestEpisode.youtubeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Watch on YouTube
                </a>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 bg-black shadow-xl">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={PODCAST.latestEpisode.youtubeEmbedUrl}
                    title={`${PODCAST.title} - ${PODCAST.latestEpisode.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Episodes */}
          <section id="episodes" className="pb-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mb-8">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-900">
                  Episodes
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Catch up on previous conversations from Bridging the Gap.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {PODCAST.episodes.map((episode) => (
                  <div key={episode.youtubeUrl} className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        src={episode.youtubeEmbedUrl}
                        title={`${PODCAST.title} - ${episode.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    <div className="p-5 flex items-center justify-between gap-4">
                      <h3 className="text-lg font-serif font-semibold text-dark-900">
                        {episode.title}
                      </h3>
                      <a
                        href={episode.youtubeUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium whitespace-nowrap"
                      >
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

