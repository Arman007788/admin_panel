import React, { ChangeEvent, FC, ReactElement, useEffect } from "react";
import { Button } from "@mui/material";
import PhotoIcon from "../..//assets/mdi_image.svg";
import { uploadPhotoThunk } from "../../store/thunk/user";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { FileUploadProps } from "../../@types/common";

const FileUpload: FC<FileUploadProps> = ({
  setFieldValue,
  helperText,
}): ReactElement => {
  const dispatch = useAppDispatch();
  const { file } = useAppSelector((state) => state.userSlice);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      dispatch(uploadPhotoThunk(e.target.files[0]));
    }
  };

  useEffect(() => {
    setFieldValue("photo", file);
  }, [file]);

  return (
    <>
      <Button
        variant="outlined"
        component="label"
        className="w-39 h-10.5 text-sm text-[#407EFF] !border-[#407eff] !normal-case !justify-start"
      >
        <img src={PhotoIcon} /> <span className="pl-10">Photo</span>
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={(event): void => handleChange(event)}
        />
      </Button>
      {helperText && (
        <p
          className="text-[#d32f2f] text-xs mx-14 pt-10"
          style={{ fontFamily: "Roboto,Helvetica,Arial,sans-serif" }}
        >
          {helperText}
        </p>
      )}
    </>
  );
};

export default FileUpload;
