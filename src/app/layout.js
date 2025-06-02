export const metadata = {
  title: 'LIBERTE-SE: O GUIA DEFINITIVO PARA LARGAR O CIGARRO',
  description: 'Descubra como parar de fumar de uma vez por todas e transforme sua vida com um método comprovado e eficaz.',
};

// Google Analytics Script as a separate component
function GoogleAnalytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-99FBZFZ5QS" />
      <script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-99FBZFZ5QS');
        `}
      </script>
    </>
  );
}

// Facebook Pixel Script as a separate component
function FacebookPixel() {
  return (
    <>
      <script id="facebook-pixel">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1428835491791936');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=1428835491791936&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <GoogleAnalytics />
        <FacebookPixel />
      </head>
      <body>{children}</body>
    </html>
  );
}
