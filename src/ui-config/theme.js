export default {
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#089bab",
      contrastText: "#fff",
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiCardContent: {
      // Name of the rule
      root: {
        // Some CSS
        padding: '8px 8px 8px 8px !important',
      },
    },
    MuiTypography: {
      body1: {
        // fontFamily: "OpenSans"
      },
      h6: {
        // width: "192px",
        // height: "40px",
        fontFamily: "Poppins",
        fontSize: "32px",
        fontWeight: "bold",
        color: "#3a3a3a",
      }
    },
    MuiInputBase: {
      formControl: {
        height: "40px",
        borderRadius: "12px"
      }
    },
    MuiOutlinedInput: {
      adornedEnd: {
        paddingRight: "0px",
        borderRadius: "12px",
      }
    },
    MuiTextField: {
      root: {
        width: "404px"
      }
    },
    MuiDialog: {
      paper: {
        borderRadius: "32px",
      },
      paperWidthSm: {
        maxWidth: "880px"
      },
      paperFullWidth: {
        width: "auto",
        height: "auto"
      }
    },
    MuiDialogTitle: {
      root: {
        padding: "32px 24px"
      }
    }
  },
}
