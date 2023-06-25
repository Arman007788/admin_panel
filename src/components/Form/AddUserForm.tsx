import React, { FC, ReactElement } from "react";
import { FormProps } from "../../@types/user";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../hooks/redux";
import { createUserThunk } from "../../store/thunk/user";
import FileUpload from "../FileUpload/FileUpload";

const AddUserForm: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      location: "",
      photo: "",
    },
    onSubmit: (values: FormProps) => {
      dispatch(createUserThunk(values));
    },
    validationSchema: Yup.object({
      name: Yup.string().required("User name is required"),
      email: Yup.string()
        .email("No email format")
        .required("Email is required"),
      location: Yup.string().required("location is required"),
      photo: Yup.string().required("Photo is required"),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box className="pb-16">
        <TextField
          size="small"
          fullWidth
          name="name"
          label="User name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={!!(formik.errors.name && formik.touched.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Box>
      <Box className="pb-16">
        <FileUpload
          setFieldValue={formik.setFieldValue}
          helperText={
            formik.touched.photo && formik.errors.photo
              ? formik.errors.photo
              : undefined
          }
        />
      </Box>
      <Box className="pb-16">
        <TextField
          size="small"
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={!!(formik.errors.email && formik.touched.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
      <Box className="pb-16">
        <TextField
          size="small"
          fullWidth
          name="location"
          label="Location"
          value={formik.values.location}
          onChange={formik.handleChange}
          error={!!(formik.errors.location && formik.touched.location)}
          helperText={formik.touched.location && formik.errors.location}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        className="w-28.5 h-9 text-sm !bg-[#407eff] !normal-case"
      >
        Save
      </Button>
    </form>
  );
};

export default AddUserForm;
