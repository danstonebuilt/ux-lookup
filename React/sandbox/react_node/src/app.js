import React, { Component } from 'react';
import Table from './table';

class App extends Component {
    render()
     {
         const professionals =
         [
             {
                 name: 'Daniel Stone',
                 job: 'programmer'
             },
             {
                 name: 'Lucy',
                 job: 'Toser'
             }
         ]

        return(
            <div className="container">
               <h1>Hello, React!</h1>
               <Table dataTable={professionals} />
            </div>
        );
     }
}

export default App;