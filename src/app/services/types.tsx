import { BoxProps, ButtonProps,
    FormControlProps as ChakraFormControlProps,
    FormLabelProps as ChakraFormLabelProps,
    InputGroupProps as ChakraInputGroupProps,
    InputProps as ChakraInputProps,
    GridItemProps,
    GridProps,
    TextareaProps,

 } from "@chakra-ui/react";
import { FormikProps, FormikValues } from "formik";

export type InputControlProps = {
    formId: string ;
    label: string ;
     type: string ;
     value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FooterButtonProps = {
    backButton?: string;
    submitButton?: string;
    onNextClick?: () => void;
    isPageName?: boolean;
    pathname?: string;
    formikProps?: FormikProps<FormikValues>;
    customBackClick?: () => void;
    isSubmitting?: boolean;
    handleCancelButton?: () => void;
    handleNext?: () => void;
    backBtnProps: ButtonProps;
    submitBtnProps: ButtonProps;
  };
  


  export interface FormControlProps extends ChakraFormControlProps {
    name: string;
    label?: string;
    helperText?: string;
    customError?: (error: string) => React.ReactNode;
    validate?: (value: string) => string | Promise<string>;
    labelProps?: ChakraFormLabelProps;
  }


  export type InputProps = Omit<FormControlProps, "label"> & {
    inputLeftAddon?: string;
    inputLeftElement?: React.ReactNode | string;
    inputRightAddon?: React.ReactNode;
    inputRightElement?: React.ReactNode;
    label?: string | React.ReactElement;
    labelProps?: ChakraFormLabelProps;
    inputGroupProps?: ChakraInputGroupProps;
    inputProps?: ChakraInputProps;
    inputLeftElementColor?: string;
    inputRightElementZIndex?: string;
    ref?: React.RefObject<HTMLInputElement>;
    placeholderColor?: string;
    name?: string | React.ReactElement;
    isRequired?: boolean;
    dateInputValue?: string;
    bColor?: string;
  };
  

  export type TextAreaControlProps = Omit<FormControlProps, "textarea"> & {
    label?: string | React.ReactElement;
    labelProps?: BoxProps;
    name?: string | React.ReactElement;
    isRequired?: boolean;
    inputProps?: TextareaProps;
  };
  

export type WithText = {
  text?: React.ReactNode;
};


  export type TableProps = {
    /** Props for the header grid. */
    tableHeaderGridProps?: GridProps;
    /** Headers with text properties. */
    tableHeaders?: (WithText & GridItemProps)[];
    /** Data for the table. */
    tableData?: {
      /** Data with text properties. */
      data: (WithText & GridItemProps)[];
      /** Props for the data grid. */
      tableDataGridProps: GridProps;
    }[];
    /** Indicates if zebra striping is enabled. */
    isZebraTable?: boolean;
    boxprops?: BoxProps;
    skeletonCount: { rows: number; cols: number };
    loadingSkeleton?: boolean;
  };

 export type ApplicationsType = {
    name: string;
    status: string;
    mobile_number: string;
    email: string;
    role: string;
    date: string;
    companyName: string;
  }
  
  export type AppliedTableProps = {
    Applications: ApplicationsType[];
    count?: number;
    isLoading?: boolean;
  };



  export type JobApplyFormProps = {
    formType:string;
    title: string;
  };