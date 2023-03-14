import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import React from "react";

interface GridOperationButtonProps {
    operation: string;
    selectOperation: (operation:string) => void;
    selectedOperation: string;
}

const StyledButton = styled(Button)<{selected: boolean}>((props) =>({
    background: "rgba(254, 241, 73, .1)",
    borderColor: props.selected ? "#fff" : "rgba(255, 241, 73, 0.5)"
}))

export const GridOperationButton: React.FC<GridOperationButtonProps> = ({
    operation,
    selectOperation,
    selectedOperation,
}) => {
    return (
        <Grid item xs={3}>
            <StyledButton fullWidth variant="outlined" onClick={() => selectOperation(operation)} selected={selectedOperation === operation}>
                {operation}
            </StyledButton>
        </Grid>
    );
};