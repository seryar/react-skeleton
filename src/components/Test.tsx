import React from 'react';
import Redux from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { NOTIFY_INFO } from 'src/store/notify/types';
import { AppDispatch, RootState } from '../store/rootStore';

interface Props extends PropsFromRedux {
    backgroundColor: string
  }

const mapStateToProps = (state:RootState) => ({
  count: state.notify.queue.length,
  init: state.notify.init,
});

const mapDispatchToProps = {
  addNotify: () => ({ type: NOTIFY_INFO }),
};

const MyComponent = ({
  backgroundColor, addNotify, count, init,
}: Props) => (
  <div style={{ backgroundColor }}>
    <button onClick={addNotify} type="button">
      Toggle is
      { count }
    </button>
    {init}
  </div>
);

type PropsFromRedux = ConnectedProps<typeof connector>

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default connector(MyComponent);
