
import Menu from '../Components/Menu';

import 'bootstrap/dist/css/bootstrap.min.css';

import ButtonUsage from '../Components/ButtonUsage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default function MainPage() {

    return (
      <div className="App">
          <Menu/>
          <ButtonUsage/>
          <h1>To jest strona produktowa</h1>
    
      </div>
    )
  }

