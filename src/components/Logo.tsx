import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`}>
      <Box
        component="img"
        alt="Netflix Logo11111 "
        src="/assets/netflix-logo.png1"
        width={87}
        height={25}
        sx={{
          ...sx,
        }}
      />
    </RouterLink>
  );
}
