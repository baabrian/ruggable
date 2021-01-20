import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string;
};

const StyledRoundedButton = withStyles({
  root: {
    backgroundColor: '#ffce29',
    border: '0 solid transparent',
    borderRadius: '3rem',
    padding: '1rem 1rem',
    margin: '1rem 0',
  },
})(Button);

export function RoundedButton({ children }: ButtonProps) {
  return <StyledRoundedButton>{children}</StyledRoundedButton>;
}
