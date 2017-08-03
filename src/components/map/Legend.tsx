import { createElement } from 'react';
import { style } from 'typestyle';

const bins = [
  ['60%+', '#932506'],
  ['50-60%', '#D93E0E'],
  ['40-50%', '#FA833D'],
  ['30-40%', '#FDAF6D'],
  ['-30%', '#FCD0B3']
];

const legendClass = style({
  backgroundColor: 'rgba(255,255,255,0.8)',
  width: 150,
  padding: 15,
  borderRadius: 5,
  border: '1px solid #ccc'
});

const legendItemClass = style({
  position: 'relative',
  height: 20
});

const legendSquareClass = style({
  width: 20,
  height: 20,
  display: 'inline-block'
});

const legendBinClass = style({
  marginLeft: 10,
  position: 'relative',
  top: '50%',
  transform: 'translateY(-80%)',
  display: 'inline-block'
});

const legendTitleClass = style({
  fontWeight: 'bold',
  fontSize: 14,
  marginBottom: 10
});

type LegendProps = {
  style?: React.CSSProperties;
};

const Legend = (props: LegendProps) =>
  <div className={legendClass} style={props.style}>
    <div className={legendTitleClass}>
      Percent living in a child care desert{' '}
    </div>
    {bins.map(([range, color]) =>
      <div className={legendItemClass}>
        <span
          className={legendSquareClass}
          style={{
            backgroundColor: color
          }}
        />
        <span className={legendBinClass}>
          {range}{' '}
        </span>
      </div>
    )}
  </div>;

export default Legend;
