import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteSupplier, getSupplierList } from "../../api";
import Header from "../../components/Header";
import usePreserveQueryNavigate from "../../hooks/usePreserveQueryNavigate";
import { tokens } from "../../theme";
const SupplierList = () => {
  const navigate = usePreserveQueryNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { data: supplierList } = useQuery(["supplier-list"], getSupplierList);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteSupplier,
    onSuccess: () => {
      queryClient.invalidateQueries(["supplier"]);
    },
  });
  const columns: GridColumns<any> = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Tên nhà cung cấp",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      flex: 1,
    },
    { field: "note", headerName: "Ghi chú", flex: 1 },
    {
      field: "edit",
      headerName: "",
      renderCell: (param: GridRenderCellParams<any, any, any>) => {
        return (
          <Button
            variant="outlined"
            onClick={() => {
              navigate(`/supplier/update/${param.row?.id}`, {
                state: param.row,
              });
            }}
            startIcon={<EditIcon style={{ color: "white" }} />}
          ></Button>
        );
      },
    },
    {
      field: "delete",
      headerName: "",
      renderCell: (param: GridRenderCellParams<any, any, any>) => {
        return (
          <Button
            variant="text"
            onClick={() => {
              mutate(param.row?.id);
              console.log(mutate(param.row?.id));
            }}
            startIcon={<DeleteIcon style={{ color: "white" }} />}
          ></Button>
        );
      },
    },
    {
      field: "detail",
      headerName: "",
      renderCell: (param: GridRenderCellParams<any, any, any>) => {
        return (
          <Button
            variant="text"
            onClick={() => {
              navigate(`/supplier/${param.row?.id}`, { state: param.row });
            }}
            startIcon={<InfoIcon style={{ color: "white" }} />}
          ></Button>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Danh sách các nhà cung cấp " subtitle="" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => {
              navigate(`/suppliers/create`);
            }}
          >
            Thêm nhà cung cấp
          </Button>
        </Box>
      </Box>
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
          rows={supplierList || []}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Box>
  );
};

export default SupplierList;
