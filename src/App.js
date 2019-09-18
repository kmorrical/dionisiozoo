import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './actions/actions';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Adobo from './components/Adobo';
import Navigation from './components/Navigation';
import Error from './components/Error';
import Aow from './components/Aow';

const animals = {
    'Adobo': {
        name: 'Adobo',
        url: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568669243/IMG_3172.jpg',
        favorites: {
            'Age': '13 Months',
            'Height': '?',
            'Weight': '30 pounds',
            'Favorite Food': 'Green Beans',
            'Activity': 'Running Laps'
        },
        classStyle: 'koiImg',
        additionalStyle: 'imgTop'
    },
    'Tiki': {
        name: 'Tiki',
        url: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1568669242/IMG_1761.jpg',
        favorites: {
            'Age': '?',
            'Height': '?',
            'Weight': '?',
            'Favorite Food': 'Lettuce'
        },
        classStyle: '',
        additionalStyle: ''
    },
    'Koi': {
        name: 'Koi',
        url: "https://res.cloudinary.com/osidekweenyasss/image/upload/v1568669246/IMG_2923.jpg",
        favorites: {},
        classStyle: 'koiImg',
        additionalStyle: 'imgTop'
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favAnimal: this.props.animal
        };
    }

    componentDidMount = () => {
      this.props.fetchWeather();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.weather !== this.props.weather){
        this.forceUpdate();
      }
    }

    addFavorite = (event) => {
        const animal = event.target.value;
        const checked = event.target.checked;
        if (checked === true) {
            this.props.addToCart(animal);
        }
        if (checked === false) {
            this.props.addToCart('');
        }
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <h1>
                            DIONISIO ZOO
                        </h1>
                    </header>
                    <Navigation/>
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={(props) => <Home {...props} favAnimal={this.props.animal} addFavorite={this.addFavorite} loading={this.props.loading} weather={this.props.weather}/>}/>
                        <Route
                            path="/adobo"
                            render={(props) => <Adobo
                            {...props}
                            favAnimal={this.props.animal}
                            addFavorite={this.addFavorite}
                            animal={animals.Adobo}/>}/>
                        <Route
                            path="/tiki"
                            render={(props) => <Adobo
                            {...props}
                            favAnimal={this.props.animal}
                            addFavorite={this.addFavorite}
                            animal={animals.Tiki}/>}/>
                        <Route
                            path="/fish"
                            render={(props) => <Adobo
                            {...props}
                            favAnimal={this.props.animal}
                            addFavorite={this.addFavorite}
                            animal={animals.Koi}/>}/>
                        <Route
                            path="/animalofweek"
                            render={(props) => <Aow
                            {...props}
                            favAnimal={this.props.animal}
                            animalOfWeek={animals[this.props.animal]}/>}/>
                        <Route component={Error} exact/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
};

function mapStateToProps(state, props) {
  return {animal: state.cart.animal, loading: state.cart.loading, weather: state.cart.weather}
     
}

function mapDispatchToProps(dispatch) {
    return {
        fetchWeather: () => dispatch(actions.fetchWeather()),
        addToCart: (animal) => dispatch(actions.addToCart(animal))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
