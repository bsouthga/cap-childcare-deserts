import { createElement } from 'react';
import { connect } from 'react-redux';
import { style } from 'typestyle';
import { Dispatch, State, setSelectedState } from '../../store';
import { stateList, StateName, stateData } from '../../data';
import { Colors } from '../colors';

const selectClass = style({
  maxWidth: 200,
  width: '100%',
  display: 'block',
  margin: '0 auto',
  textAlignLast: 'center',
  background: Colors.SELECT_BAKGROUND,
  border: 'none',
  cursor: 'pointer',
  fontSize: 14,
  height: 40
});

type StateSelectProps = Readonly<{
  above?: boolean;
  className?: string;
  selectedState: StateName;
  onSelectState: (e: React.ChangeEvent<{ value: string }>) => void;
}>;

const StateSelect = (props: StateSelectProps) =>
  <select
    className={selectClass}
    value={props.selectedState}
    onChange={props.onSelectState}
  >
    {stateList.map(s =>
      <option value={s}>
        {s}
      </option>
    )}
  </select>;

const mapStatesToProps = (
  state: State,
  ownProps: { above?: boolean; className?: string }
) => ({
  selectedState: state.selectedState,
  ...ownProps
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSelectState: (e: React.ChangeEvent<{ value: string }>) => {
    dispatch(setSelectedState(e.target.value as StateName));
  }
});

export default connect(mapStatesToProps, mapDispatchToProps)(StateSelect);