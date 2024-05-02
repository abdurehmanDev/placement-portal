export type InputControlProps = {
    formId: string ;
    label: string ;
     type: string ;
     value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}