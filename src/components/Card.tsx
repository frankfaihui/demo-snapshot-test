import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import BaseButton from "./BaseButton";

// Card props
export interface CardProps {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  children?: ReactNode;
  className?: string;
}

const StyledCard = styled.div({
  backgroundColor: "white",
  borderRadius: "0.5rem",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const CardTitle = styled.h3({
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "#1a202c",
  margin: 0,
});

const CardDescription = styled.p({
  fontSize: "1rem",
  color: "#4a5568",
  margin: 0,
});

const CardFooter = styled.div({
  marginTop: "auto",
  display: "flex",
  justifyContent: "flex-end",
});

export default function Card({
  title,
  description,
  buttonText,
  onButtonClick,
  children,
  className,
}: CardProps) {
  return (
    <StyledCard className={className}>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
      {children}
      {buttonText && (
        <CardFooter>
          <BaseButton onClick={onButtonClick}>{buttonText}</BaseButton>
        </CardFooter>
      )}
    </StyledCard>
  );
} 