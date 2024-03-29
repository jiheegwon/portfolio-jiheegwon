interface FeedItem {
  id: number;
  content: string;
  target: string;
  href?: string;
  date: string;
  datetime?: string;
  icon: any;
  iconBackground: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ timeline }: { timeline: FeedItem[] }) {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-10 pt-1.5">
                  <div>
                    <p className="text-base text-gray-600">
                      {event.content}{" "}
                      <a href={event.href} className="font-light text-gray-400">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-gray-400 font-light">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
