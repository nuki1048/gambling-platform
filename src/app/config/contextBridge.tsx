export default function ContextBridge<T>(props: {
  children: React.ReactNode;
  Context: React.Context<T>;
  render: (children: React.ReactNode) => JSX.Element;
}): JSX.Element {
  const Context = props.Context;
  const result = (
    <Context.Consumer>
      {(value) =>
        props.render(
          <Context.Provider value={value}>{props.children}</Context.Provider>
        )
      }
    </Context.Consumer>
  );
  return result;
}

import { Stage as PixiStage } from '@pixi/react';
import { ReactReduxContext } from 'react-redux';

export const Stage = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: unknown;
}) => {
  return (
    <ContextBridge
      Context={ReactReduxContext}
      render={(children: React.ReactNode) => (
        <PixiStage {...props} options={{ backgroundColor: 0xeef1f5 }}>
          {children}
        </PixiStage>
      )}
    >
      {children}
    </ContextBridge>
  );
};
