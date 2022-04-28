import React from 'react';
import { useListBox } from '@react-aria/listbox';
import { Option } from '../Option';

import styles from '../../Select.module.sass';

export const List = (props: any) => {
  //
  const ref = React.useRef();
  const { listBoxRef = ref, items, state } = props;
  const { listBoxProps } = useListBox(props, state, listBoxRef);

  console.log('props', props);

  //const options = items ? items : [...state.collection];

  return (
    <ul className={styles.List} {...listBoxProps} ref={listBoxRef}>
      {[...state.collection].map((item: any) => (
        <Option key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
};
