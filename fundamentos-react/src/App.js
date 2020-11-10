import React from 'react';

import First from "./components/basic/first";
import Second from "./components/basic/second";
import Fragment from "./components/basic/fragment";
import Random from "./components/basic/random";


class App extends React.Component{

    render(){
        return(
          <div>
            <h1>Componente APP</h1>
            <Random min="-21" max="27" />
            <Fragment />
            <Second title="Situação do aluno" student="Pedro" score="8" />
            <Second title="Situação do aluno" student="Lucas" score="3" />
            <First />
          </div>
        );
    }
}

export default App;
