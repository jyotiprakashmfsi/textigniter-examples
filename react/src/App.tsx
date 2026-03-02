import { Textigniter } from '@mindfiredigital/textigniter-react';

function App() {
  return (
    <Textigniter
      config={{
        showToolbar: true,
        features: [
          'bold',
          'italic',
          'underline',
          'fontFamily',
          'fontSize',
          'fontColor',
          'alignLeft',
          'alignCenter',
          'alignRight',
          'unorderedList',
          'orderedList',
          'hyperlink',
          'image',
        ],
      }}
    />
  );
}

export default App;