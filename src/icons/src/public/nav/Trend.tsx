// GENERATE BY script
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import IconBase from '@/icons/IconBase';

import data from './Trend.json';

import type { IconBaseProps, IconData } from '@/icons/IconBase';

const Icon = React.forwardRef<
  React.MutableRefObject<SVGElement>,
  Omit<IconBaseProps, 'data'>
>((props, ref) => <IconBase {...props} ref={ref} data={data as IconData} />);

Icon.displayName = 'Trend';

export default Icon;
