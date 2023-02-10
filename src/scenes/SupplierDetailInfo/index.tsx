import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";
import { ApiSupplierT } from "../../api";
import Header from "../../components/Header";
import usePreserveQueryNavigate from "../../hooks/usePreserveQueryNavigate";
import { tokens } from "../../theme";

const SupplierDetailInfo = () => {
  const navigate = usePreserveQueryNavigate();
  const location = useLocation();
  const param = location.state as ApiSupplierT;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {field:"product_id", headerName: "ID", flex: 1},
    {field:"subproduct_id", headerName: "sub ID", flex: 1},
    {field:"unit_price", headerName:"đơn giá", flex: 1},
    {field:"see_unit_price_between_suppliers", headerName:"xem báo giá giữa các nhà cung cấp", 
      renderCell: () => {
        return (
          <Button>
            Xem báo giá
          </Button>
        )
      }
    },

  ]
  return (
    <Box mt="20px" width="650px" margin="100px auto">
      <Header
        title="Thông tin chi tiết của nhà cung cấp"
        subtitle="Thông tin một nhà cung cấp"
      />
      {/*  */}
        <p>Tên:{param.name}</p>
        <p>Số điện thoại:{param.phone}</p>
        <p>Email:{param.email}</p>
        <p>address:{param.address}</p>
      {/*  */}
        <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid
          rows={ || []}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Box>

  );
};
export default SupplierDetailInfo;