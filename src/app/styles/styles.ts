const styles = {
  global: () => {
    return {
      html: {
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",
        fontWeight: "normal",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100%",
      },
      main: {
        flex: "1 0 auto",
      },
    };
  },
};

export default styles;
