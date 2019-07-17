import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import logo from './logo.svg';
import {AgeUp,AgeDown,DeleteItem,updateA,updateB} from './action';

const mapStateToProps = (state) => {
  return {
    age:state.age.age,
    history: state.age.history,
    loading: state.age.loading,
    a: state.sum.a,
    b: state.sum.b
  }
}

const mapDipatchToProps = {AgeUp,AgeDown,DeleteItem,updateA,updateB}

class App extends React.Component {
  render() {
    return (
      <div>
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.AgeUp}>Age Up</button>
        <button onClick={this.props.AgeDown}>Age Down</button>
        {this.props.loading && <img src={logo} className="App-logo" alt="alt" />}
        <hr/>
        <div>History</div>
        <div>
          <ul>
            {
            this.props.history.map((el,i) => {
              return  <li key={el.i} style={{cursor: "pointer"}} onClick={() => this.props.DeleteItem(el.i)}>{el.age}</li>
            })
            }
          </ul>
        </div>
        <hr />
        <div className="col">
          <div>
            <div><span>A:</span>{this.props.a}</div>
            <button onClick={this.props.updateA}>Update A</button>
          </div>
          <div>
            <div><span>B:</span>{this.props.b}</div>
            <button onClick={this.props.updateB}>Update B</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDipatchToProps)(App);
