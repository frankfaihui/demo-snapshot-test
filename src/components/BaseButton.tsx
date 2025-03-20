import styled from "@emotion/styled";
import { ReactNode } from "react";

// Button props
export interface BaseButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

// Base Button component
const StyledButton = styled.button<BaseButtonProps>({
  display: "block",
  border: "1px solid #e2e8f0",
  color: "black",
  padding: "10px",
  backgroundColor: "white",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NewButton = styled(StyledButton)({
  backgroundColor: "green",
});

export default function BaseButton({ className, children, ...props }: BaseButtonProps) {

  // uncomment below and run 'npm run test` to see the error, then run `npm run test` --update to see the updated snapshot
  // return (
  //   <NewButton className={className} {...props}>
  //     <div>
  //       {children}
  //     </div>
  //   </NewButton>
  // )
  return <StyledButton className={className} {...props}>{children}</StyledButton>;
} 