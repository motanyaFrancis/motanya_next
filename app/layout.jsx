import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'motanya',
    description: 'Discover more about Motanya',

    icons:{
      icon:[
        {url:'/assets/images/favicon.png'}
      ],
      shortcut:['/assets/images/favicon.png']

    }
}

const Rootlayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
              <Nav />
              {children}
            </main>
          </Provider>
        </body>
    </html>
  )
}

export default Rootlayout;