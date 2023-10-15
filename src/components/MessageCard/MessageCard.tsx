import React from 'react';
import { MessageCardProps } from '../../types/types';
import styles from './style.module.css';
import List from '../List/List';

export class MessageCard extends React.Component<MessageCardProps> {
  constructor(props: MessageCardProps) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{this.props.name} said:</h2>
        <p className={styles.text}>{this.props.message}</p>
        <List />
      </div>
    );
  }
}
