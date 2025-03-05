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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <GoogleAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}