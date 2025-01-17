"use client";

import Script from "next/script";

export default function ContactUs() {
  return (
    <div className="tally">
      <iframe
        data-tally-src="https://tally.so/embed/n0EMG9?hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="284"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Contact form"
      ></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          // @ts-ignore
          Tally.loadEmbeds();
        }}
      />
      <div className="tally_loader">
        <div>Loading...</div>
      </div>
    </div>
  );
}
