import { ReactElement } from 'react';
import styled, { CSSProperties } from 'styled-components';
const reqSvgs = require.context('../../public/icons', true, /\.svg$/);
import colors from '../common/Colors';

type IconWrapperProps = {
  noAlign?: boolean;
  noMargin?: boolean;
};

const IconWrapper = styled.span<IconWrapperProps>`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  vertical-align: ${({ noAlign }) => (noAlign ? 'baseline' : 'middle')};

  .button &,
  .dropdown-item & {
    margin-right: ${({ noMargin }) => (noMargin ? '0' : '0.25rem')};
  }

  & svg {
    display: block;
    margin: auto;
  }
`;

type IconProps = {
  name: string;
  alt?: string;
  size?: string;
  style?: CSSProperties;
  className?: string;
  show?: boolean;
  onClick?: () => void;
  noMargin?: boolean;
  noAlign?: boolean;
};

export const Icon = ({
  name,
  show = true,
  size,
  noMargin,
  noAlign,
  ...props
}: IconProps): ReactElement | null => {
  const svg = reqSvgs(`./${name}.svg`);
  if (!show || !svg) {
    return null;
  }
  const iconInfo = svg.default().props;
  return (
    <IconWrapper noAlign={noAlign} noMargin={noMargin}>
      {svg.default({
        preserveAspectRatio: 'xMidYMid meet',
        width: iconInfo.width ? iconInfo.width : 30,
        height: iconInfo.height ? iconInfo.height : 30,
        viewBox: `0 0 ${iconInfo.width ? iconInfo.width : 30} ${
          iconInfo.height ? iconInfo.height : 30
        }`,
        ...props,
      })}
    </IconWrapper>
  );
};
