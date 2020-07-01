import React from 'react';
import Card from './components/card';
import './App.css';
class App extends React.Component{

  state={
    avatarId:5,
    name:'Cori Dawson'
  }

  changeDetails=()=>{
    this.setState({
      avatarId: 45,
      name: 'Nicole Tovar'
    })
  };

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <Card name={this.state.name} job='Teacher' avatarId={this.state.avatarId}/>
          <Card name='David Sond' job='Playing' avatarId={2}/>
          <Card name='Ikesha' job='Musician' avatarId={44}/>          
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <a onClick={this.changeDetails} className='changedetails' href='#'>Change Details</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;