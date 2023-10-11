import React from 'react';
import { MessageCard } from '../MessageCard/MessageCard';
import { InputState } from '../../types/types';

export class Form extends React.Component<Record<string, unknown>, InputState> {
  constructor(props: Record<string, unknown>) {
    // вызывается при начальной иницализации компонента
    super(props);
    this.state = {
      inputValue: '',
    };
    console.log('constructor');
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  public handleClick = () => {
    console.log(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  public componentDidMount() {
    // вызывается после рендеринга компонента
    console.log('componentDidMount');
  }

  public componentWillUnmount() {
    // вызывается перед удалением компонента из DOM
    console.log('componentWillUnmount');
  }

  static getDerivedStateFromProps() {
    // вызывается перед рендерингом компонента
    console.log('getDerivedStateFromProps');
    return null;
  }

  public shouldComponentUpdate() {
    // вызывается при обновлении объекта props или state
    console.log('shouldComponentUpdate');
    return true;
  }

  public componentDidUpdate() {
    // вызывается после того, как отработала функция render, в каждом цикле перерисовки
    console.log('componentDidUpdate');
  }

  public getSnapshotBeforeUpdate() {
    // получение текущего состояния DOM перед обновлением
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  public componentWillMount() {
    // вызывается перед монтированием компонента в DOM (переименован в UNSAFE_componentWillMount() и не рекомендован для использования)
    console.log('componentWillMount');
  }

  public render() {
    // рендеринг компонента
    console.log('render');
    return (
      <div>
        <input
          type='text'
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Submit</button>
        <MessageCard name='New User' message={this.state.inputValue} />
      </div>
    );
  }
}
