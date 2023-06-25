export interface menuProps {
  title: string;
  subMenu: string[] | [];
  iconPath?: string;
  src: string;
  index: number;
};
export type OrderBy = "asc" | "desc";
interface FileUploadProps {
  setFieldValue: (key: string, value: string) => void;
  helperText?: string;
}

