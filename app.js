import React from 'react';
import ReactDOM from 'react-dom/client'

const Head=()=>(<h1 className='heading'>Namaste React using JSX!</h1>)

const FunComponent=()=>(<div id='container'>
    <Head/>
    <h1>
        Namaste React Inside Functional Component!
    </h1>
</div>)

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<FunComponent/>)