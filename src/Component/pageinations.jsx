export const customStyles = {
    pagination: {
      style: {
        borderTop: "1px solid #e5e5e5",
        padding: "10px",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
      },
      pageButtonsStyle: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        padding: "5px",
        margin: "0 5px",
        color: "#007bff",
        fill: "#007bff",
        backgroundColor: "#ffffff",
        border: "1px solid #007bff",
        cursor: "pointer",
        "&:disabled": {
          cursor: "not-allowed",
          color: "#ced4da",
          fill: "#ced4da",
          border: "1px solid #ced4da",
        },
        "&:hover:not(:disabled)": {
          backgroundColor: "#007bff",
          color: "#ffffff",
          fill: "#ffffff",
        },
      },
    },
  };