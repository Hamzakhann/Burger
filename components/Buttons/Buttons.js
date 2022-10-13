import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import Image from "next/image";

export const PrimaryButton = styled(MuiButton)((props) => ({
  fontWeight: 400,
  fontFamily: "DM Sans, sans-serif",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "10px 20px",
  background: "#FFBA00",
  color: "#000000",
  textAlign: "center",
  border: "none",
  textTransform: "initial",
  "&:hover": {
    background: "#3E2DB2",
  },
}));

export const SecondaryButton = styled(MuiButton)((props) => ({
  fontWeight: 400,
  fontFamily: "DM Sans, sans-serif",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  borderRadius: "10px",
  padding: "10px 20px",
  background: "#000000",
  color: "#ffffff",
  textAlign: "center",
  border: "none",
  textTransform: "initial",
  "&:hover": {
    background: "#000000",
  },
}));
