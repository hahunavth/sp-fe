import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PageModal from "./PageModal";
import usePreserveQueryNavigate from "../../hooks/usePreserveQueryNavigate";

type Props = {
  children: React.ReactNode;
};

/*
 * @brief Tạo trang modal có sửa path (thêm vào App.tsx nested route)
 *
 * Created on Thu Jan 05 2023
 * Copyright (c) 2023 HaVT
 */
function NestedRouteModal({ children }: Props) {
  const navigate = usePreserveQueryNavigate();

  const handleClose = React.useCallback(() => {
    navigate(-1); // go back
  }, [navigate]);

  return (
    <PageModal isOpen={true} handleClose={handleClose}>
      {children}
    </PageModal>
  );
}

export default NestedRouteModal;
