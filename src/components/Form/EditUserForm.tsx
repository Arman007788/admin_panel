import React, { FC, ReactElement, useEffect } from "react";
import { FormPropsForEdit, UserFormProps } from "../../@types/user";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeUserThunk, getUserThunk } from "../../store/thunk/user";
import FileUpload from "../../components/FileUpload/FileUpload";

const EditUserForm: FC<UserFormProps> = ({ id }): ReactElement => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userSlice);
  useEffect(() => {
    dispatch(getUserThunk(Number(id)));
  }, []);

  const formik = useFormik({
    initialValues: {
      id: user.id,
      photo: user.photo,
      name: user.name,
      email: user.email,
      location: user.location,
    },
    onSubmit: (values: FormPropsForEdit) => {
      dispatch(changeUserThunk(values));
    },
    validationSchema: Yup.object({
      name: Yup.string().required("User name is required"),
      email: Yup.string()
        .email("No email format")
        .required("Email is required"),
      location: Yup.string().required("location is required"),
    }),
    enableReinitialize: true,
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
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <Box className="pb-16">
        <FileUpload setFieldValue={formik.setFieldValue} />
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
          InputLabelProps={{ shrink: true }}
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
          InputLabelProps={{ shrink: true }}
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

export default EditUserForm;
