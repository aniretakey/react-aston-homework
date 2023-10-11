import React from 'react';
import { MessageCardProps } from '../../types/types';

export class MessageCard extends React.Component<MessageCardProps> {
  constructor(props: MessageCardProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h2>{this.props.name} says:</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
