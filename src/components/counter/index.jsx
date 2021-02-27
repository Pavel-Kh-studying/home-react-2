import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0,
      isAdd: true,
    }
  }

  handleClick = () => {
    this.setState(({ count, isAdd } = this.state, { step } = this.props) => 
      isAdd ? {count: count + step} : {count: count - step}
    );  
  }

  changeMode = () => {
    this.setState({
      isAdd: !this.state.isAdd,
    });
  }

  render() {
    const { count, isAdd } = this.state;
    const { step } = this.props;

    return (
      <div>
        <div>Текущий счёт: {count}</div>
        <div>Шаг: {step}</div>
        <button onClick={this.handleClick}>
          {isAdd ? 'Добаить' : 'Отнять'}
        </button>
        <button onClick={this.changeMode}>Изменить режим</button>
      </div>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Counter;